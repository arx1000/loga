import { createClient } from "@supabase/supabase-js";

const url = "https://kanbzivuodimelryhycb.supabase.co";
const anon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbmJ6aXZ1b2RpbWVscnloeWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMjM1NzIsImV4cCI6MjA5NTc5OTU3Mn0.B2J9CdrsTs9Dh2o57fBT81sXNyyjVAMCw6zW1_pH27Q";
const svc = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbmJ6aXZ1b2RpbWVscnloeWNiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNzgwMjIzNTcyLCJleHAiOjIwOTU5OTk1NzJ9.YcWiEYyY6F0bJTUgJkg6yrWuvFDGr6c6npiUkq2qgEg";

console.log("=== ANON test ===");
const sa = createClient(url, anon);
const { data: d1, error: e1 } = await sa.from("profiles").select("count").limit(1);
console.log("profiles table (anon):", e1?.message || JSON.stringify(d1));

console.log("\n=== SERVICE_ROLE test ===");
const ss = createClient(url, svc);
const { data: d2, error: e2 } = await ss.from("profiles").select("count").limit(1);
console.log("profiles table (svc):", e2?.message || JSON.stringify(d2));
