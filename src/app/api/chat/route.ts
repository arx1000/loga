import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase/server";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

const SYSTEM_PROMPT = `You are a helpful sales assistant for LuxWood Doors, a premium wooden door company.
Your role is to help customers find the perfect door for their needs.

Product categories available:
- Classic: Traditional panel doors (Heritage $899, Craftsman $1099, Colonial $679)
- Modern: Contemporary designs (Modernist $1299, Contemporary $1599, Nordic $949, Garden $1449, Urban $829)
- Luxury: Premium hand-crafted (Versailles $2499 double door, Artisan $1899 carved, Imperial $3299 grand entry)
- Rustic: Reclaimed barn wood (Rustic $749 sliding door)

Key selling points:
- All doors are handcrafted from premium solid woods
- Free shipping on orders over $500
- 5-year craftsmanship warranty on all doors
- Custom sizing available for most models
- Free design consultation available

Keep responses friendly, helpful, and concise. Recommend specific doors based on customer needs.
Ask about their preferred style, budget, and where the door will be used (interior/exterior).`;

export async function POST(req: Request) {
  try {
    const { messages, conversationId } = await req.json();

    if (!GROQ_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const supabase = await createServerSupabase();
    const { data: { user } } = await supabase.auth.getUser();

    let convId = conversationId;

    if (user && !convId) {
      const { data: conv } = await supabase
        .from("conversations")
        .insert({ user_id: user.id, title: messages[0]?.content?.slice(0, 50) || "Chat" })
        .select("id")
        .single();
      if (conv) convId = conv.id;
    }

    if (user && convId) {
      const lastMsg = messages[messages.length - 1];
      await supabase.from("messages").insert({
        conversation_id: convId,
        role: "user",
        content: lastMsg.content,
      });
    }

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "Groq API error" },
        { status: response.status }
      );
    }

    const assistantMsg = data.choices[0].message;

    if (user && convId) {
      await supabase.from("messages").insert({
        conversation_id: convId,
        role: "assistant",
        content: assistantMsg.content,
      });
      await supabase
        .from("conversations")
        .update({ updated_at: new Date().toISOString() })
        .eq("id", convId);
    }

    return NextResponse.json({ message: assistantMsg, conversationId: convId });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
