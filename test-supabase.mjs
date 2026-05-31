import { createClient } from "@supabase/supabase-js";

const url = "https://kanbzivuodimelryhycb.supabase.co";
const anon =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbmJ6aXZ1b2RpbWVscnloeWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMjM1NzIsImV4cCI6MjA5NTc5OTU3Mn0.B2J9CdrsTs9Dh2o57fBT81sXNyyjVAMCw6zW1_pH27Q";
const svc =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbmJ6aXZ1b2RpbWVscnloeWNiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNzgwMjIzNTcyLCJleHAiOjIwOTU5OTk1NzJ9.YcWiEYy6F0bJTUgJkg6yrWuvFDGr6c6npiUkq2qgEg";

async function test() {
  const supabase = createClient(url, svc);
  const { data, error } = await supabase.from("_dummy_test").select("*").limit(1);
  if (error && error.code === "PGRST301") {
    console.log("Auth error - trying alternative URL...");
    const supabase2 = createClient("https://kanbzivuodimelryhycb.supabase.co", anon);
    const { data: d2, error: e2 } = await supabase2.from("_dummy").select("*").limit(1);
    console.log("Anon test:", e2?.message || "OK");
  } else {
    console.log("Service test:", error?.message || `OK data=${JSON.stringify(data)}`);
  }
}
test();
