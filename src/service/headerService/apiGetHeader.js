import supabase from "../supabase";

export async function apiGetHeader() {
  const { data, error } = await supabase.from("header").select("*");
  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}
