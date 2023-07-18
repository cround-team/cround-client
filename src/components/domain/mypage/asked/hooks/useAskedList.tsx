import { messageListApi } from "@/utils/api/mypage";
import { useEffect } from "react";
import { useImmer } from "use-immer";

type Data = {
  id: number;
  sender: number;
  receiver: number;
  text: string;
  updatedDate: string;
  creatorNickname: string;
  platformHeadType: string | null;
  platformHeadTheme: string | null;
  profileImage: string | null;
};

const INITIAL_STATE = [
  {
    id: 1,
    sender: 1,
    receiver: 2,
    text: "텍스트",
    updatedDate: "ㅇㅇㅇㅇ",
    creatorNickname: "",
    platformHeadType: "",
    platformHeadTheme: "",
    profileImage: "",
  },
];

export default function useAskedList() {
  const [data, setData] = useImmer<Data[]>(INITIAL_STATE);

  useEffect(() => {
    // fetchData();
    fetchTestData();
  }, []);

  const fetchData = async () => {
    console.log("fetch");
    try {
      const response = await messageListApi();
      console.log(response.data);
      setData(response.data.messages);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTestData = () => {
    const response = [
      {
        id: 1,
        sender: 1,
        receiver: 2,
        text: "안녕하세요 코코님! 제가 ASMR을 시작하려고 하는데 일단은 가장 입문하기 좋은 장비부터 구입해보려고 합니다! 코코님이 경험해보신 장비들 중 가성비 쪽으로 가장 추천해주실만한 카메라와 마이크가 있을까요?",
        updatedDate: "06월 03일 20:15",
        creatorNickname: "코코",
        platformHeadType: "유튜브",
        platformHeadTheme: "ASMR",
        profileImage: "/images/avatar.png",
      },
      {
        id: 1,
        sender: 1,
        receiver: 2,
        text: "텍스트",
        updatedDate: "06월 03일 20:15",
        creatorNickname: "짱구",
        platformHeadType: null,
        platformHeadTheme: null,
        profileImage: null,
      },
    ];
    setData(response);
  };

  return {
    data,
  };
}
