import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { DeleteCabin as deleteCabinApi } from "../../services/ApiCabins";

export function useDeleteCabin() {
  const queryclient = useQueryClient();
  //Deleting cabins using react-query
  const { isLoading: isDeleting, mutate: DeleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),

    onSuccess: () => {
      // Invalidate the "cabin" query to refetch the data
      toast.success("Cabin deleted successfully");
      queryclient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isDeleting, DeleteCabin };
}
