import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jhbddoxjywwceynosqov.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoYmRkb3hqeXd3Y2V5bm9zcW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NjgxMTQsImV4cCI6MjA2NDI0NDExNH0.B5thcPdMLrPxn4dlKCFNnO48ihnsW9cjlvkjzIdEshs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
