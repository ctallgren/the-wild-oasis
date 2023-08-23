import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ruihzhxbyjlvtobbchks.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1aWh6aHhieWpsdnRvYmJjaGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxNzU1NjcsImV4cCI6MjAwNzc1MTU2N30.FK_1pvWSFYFrDhWgEvUMV_RZOOEh5h5preDz0HhF7Oc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
