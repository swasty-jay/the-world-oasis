import supabase from "./Supabase";

async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch cabins");
  }
  return cabins;
}
export default getCabins;
