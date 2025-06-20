import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/ApiCabins";
import toast from "react-hot-toast";

export const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: createcabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("cabin successfully created");
      //validating to automatically update after creation//
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createcabin, isCreating };
};
