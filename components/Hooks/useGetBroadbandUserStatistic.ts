import { APIURL } from "../constant";
import { BroadbandUserStatistic } from "../type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetBroadbandUserStatistic(metaspaceId: string) {
  const fetchData = async () => {
    const res = await axios.get(`${APIURL}/getBroadbandUserStatistic`);

    const data = res.data as BroadbandUserStatistic;

    return data;
  };

  return useQuery({
    queryKey: ["BroadbandUserStatistic/"],
    // staleTime: 1000 * 30, // 30 sec
    queryFn: fetchData,
    refetchInterval: 1000 * 60,
  });
}
