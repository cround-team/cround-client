import { messageDetailApi } from "@/utils/api/mypage";
import { useEffect } from "react";
import { useImmer } from "use-immer";

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
        id: 1,
        sender: 69,
        receiver: 68,
        text: "안녕하세요 코코님! 제가 ASMR을 시작하려고 하는데 일단은 가장 입문하기 좋은 장비부터 구입해보려고 합니다! 코코님이 경험해보신 장비들 중 가성비 쪽으로 가장 추천해주실만한 카메라와 마이크가 있을까요?",
        updatedDate: "2023-07-11T20:18:42.340493",
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
  };
}
