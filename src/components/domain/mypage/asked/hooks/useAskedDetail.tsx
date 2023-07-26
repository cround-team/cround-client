import { useEffect } from "react";
import { useImmer } from "use-immer";

import { messageDetailApi } from "@/utils/api/mypage";

export type Message = {
  id: number;
  sender: number;
  receiver: number;
  text: string;
  updatedDate: string;
};

export type Messages = {
  [date: string]: Message[];
};

export type Data = {
  messages: Messages;
  sender: number;
  receiver: number;
  nickname: string;
};

const INITIAL_STATE: Data = {
  messages: {
    "2023-07-01": [
      {
        id: 0,
        sender: 0,
        receiver: 0,
        text: "",
        updatedDate: "",
      },
    ],
  },
  sender: 0,
  receiver: 0,
  nickname: "",
};

export default function useAskedDetail(id: number) {
  const [data, setData] = useImmer(INITIAL_STATE);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const params = { id };
      const response = await messageDetailApi(params);
      console.log(response);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    messages: data.messages,
    sender: data.sender,
    receiver: data.receiver,
    nickname: data.nickname,
    onFetchData: fetchData,
  };
}
