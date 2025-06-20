import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/ApiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editcabin, isLoading: isEditting } = useMutation({
    mutationFn: ({ newCabidata, id }) => createEditCabin(newCabidata, id),
    onSuccess: () => {
      toast.success("cabin successfully edited");
      //validating to automatically update after creation//
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editcabin, isEditting };
}
