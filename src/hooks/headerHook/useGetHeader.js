import { useQuery } from "@tanstack/react-query";
import { apiGetHeader } from "../../service/headerService/apiGetHeader";

export function useGetHeader() {
  return useQuery({
    queryFn: apiGetHeader,
    queryKey: ["header"],
  });
}
