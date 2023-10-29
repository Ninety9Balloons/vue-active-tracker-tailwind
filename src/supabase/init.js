import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://fcwdpnlxlhxpewyqbasp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjd2Rwbmx4bGh4cGV3eXFiYXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MTQxMDQsImV4cCI6MjAxNDA5MDEwNH0.-YA2DOyyuDOmlVSm49TtoG_UWU1p5RVINCEdmZKpza8"
);
