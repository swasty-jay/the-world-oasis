import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("Status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "Status", value: filterValue };

  const sortByRaw = searchParams.get("sortBy") || "StartDate-desc";

  const [field, directions] = sortByRaw.split("-");

  const sortBy = { field, directions };

  const {
    isLoading,
    data: bookings,
    // error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { isLoading, bookings };
};
