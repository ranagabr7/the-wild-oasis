import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kvediietpndzmpvrjjkj.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZWRpaWV0cG5kem1wdnJqamtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NjY0MjIsImV4cCI6MjA2NTE0MjQyMn0.MQ-nD9jSbGqi6ZGCw01IRC5XiqSzT71vEbZw4SlqPG4";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

{
  /*
   1- install supabase
   2- create file supabase.js and configure  
    
    */
}
/*
we should write api key there but we change the RLS to make it read data only
api key:
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZWRpaWV0cG5kem1wdnJqamtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NjY0MjIsImV4cCI6MjA2NTE0MjQyMn0.MQ-nD9jSbGqi6ZGCw01IRC5XiqSzT71vEbZw4SlqPG4

*/
