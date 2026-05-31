import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const supabase = await createServerSupabase();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { items, total, shippingAddress } = await req.json();

    if (!items || !items.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        items,
        total,
        status: "pending",
        shipping_address: shippingAddress || null,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ order: data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to create order" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const supabase = await createServerSupabase();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { data: orders, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ orders });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
