import { createClient } from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://tmzclqswtxvuounotpsp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtemNscXN3dHh2dW91bm90cHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMjkzNjQsImV4cCI6MjA3ODgwNTM2NH0.gPdtG0U0s6LXVM7epRNUgHa6jHV23SEMeJOcjg0Xbts";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Example test query (you can remove this later)
async function testConnection() {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    console.error("Supabase connection failed:", error.message);
  } else {
    console.log("Connected to Supabase:", data);
  }
}

testConnection();
