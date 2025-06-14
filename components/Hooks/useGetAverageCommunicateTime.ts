import { APIURL } from "../constant";
import { AverageCommunicateTime } from "../type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetAverageCommunicateTime(metaspaceId: string) {
  const fetchData = async () => {
    const res = await axios.get(`${APIURL}/getAverageCommunicateTime`);

    const data = res.data as AverageCommunicateTime;

    return data;
  };

  return useQuery({
    queryKey: ["AverageCommunicateTime/"],
    // staleTime: 1000 * 30, // 30 sec
    queryFn: fetchData,
    refetchInterval: 1000 * 60,
  });
}
