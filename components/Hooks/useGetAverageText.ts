import { APIURL } from "../constant";
import { AverageText } from "../type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetAverageText(metaspaceId: string) {
  const fetchData = async () => {
    const res = await axios.get(`${APIURL}/getAverageText`);

    const data = res.data as AverageText;

    return data;
  };

  return useQuery({
    queryKey: ["AverageText/"],
    // staleTime: 1000 * 30, // 30 sec
    queryFn: fetchData,
    refetchInterval: 1000 * 60,
  });
}
