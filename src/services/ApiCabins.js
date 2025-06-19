import supabase, { supabaseUrl } from "./Supabase";

///////FETCHING CABINS FROM SUPABASE////////
async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch cabins");
  }
  return data;
}
export default getCabins;

///FUNCTION TO CREATE NEW CABIN/////////
export async function createEditCabin(newCabin, id) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //1. CREATE / EDIT CABIN
  let query = supabase.from("cabins");
  ///A) CREATE CABIN FN
  if (!id) query.insert([{ ...newCabin, image: imagePath }]);

  ///B) EDIT CABIN FN

  const { data, error } = await query.select().single();
  if (id)
    query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  if (error) {
    console.error(error);
    throw new Error("cabin could not be created");
  }

  //2. upload image

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //delete cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(error);
    throw new Error(
      "cabin image could not be uploaded and cabin was not created"
    );
  }

  return data;
}

////FUNCTION TO DELETE CABIN////////

export async function DeleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabin could not be deleted");
  }
  return data;
}
// export { DeleteCabin };
