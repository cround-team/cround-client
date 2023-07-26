import { messageListApi } from "@/utils/api/mypage";
import { useEffect } from "react";
import { useImmer } from "use-immer";

type Data = {
  id: number;
  sender: number;
  receiver: number;
  text: string;
  updatedDate: string;
  nickname: string;
};

const INITIAL_STATE = [
  {
    id: 0,
    sender: 1,
    receiver: 2,
    text: "",
    updatedDate: "",
    nickname: "",
  },
];

export default function useAskedList() {
  const [data, setData] = useImmer<Data[]>(INITIAL_STATE);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await messageListApi();
      console.log("askedList", response.data);
      setData(response.data.messages);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    data,
  };
}
