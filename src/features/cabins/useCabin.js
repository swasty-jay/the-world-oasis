import { useQuery } from "@tanstack/react-query";
import getCabins from "../../services/ApiCabins";

export const useCabin = () => {
  const {
    isLoading,
    data: cabins,
    // error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
  return { isLoading, cabins };
};
