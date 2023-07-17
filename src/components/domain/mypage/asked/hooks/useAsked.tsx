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
  creatorNickname: string;
  platformHeadType: string;
  platformHeadTheme: string;
};

const DATA: Data = {
  messages: {
    "2023-07-11": [
      {
        id: 1,
        sender: 69,
        receiver: 68,
        text: "안녕하세요 코코님! 제가 ASMR을 시작하려고 하는데 일단은 가장 입문하기 좋은 장비부터 구입해보려고 합니다! 코코님이 경험해보신 장비들 중 가성비 쪽으로 가장 추천해주실만한 카메라와 마이크가 있을까요?",
        updatedDate: "2023-07-11T20:18:42.340493",
      },
      {
        id: 2,
        sender: 68,
        receiver: 69,
        text: "쪽지를 받습니다!",
        updatedDate: "2023-07-11T20:18:42.340494",
      },
    ],
    "2023-07-12": [
      {
        id: 1,
        sender: 69,
        receiver: 68,
        text: "쪽지를 보냅니다!",
        updatedDate: "2023-07-11T20:18:42.340493",
      },
      {
        id: 2,
        sender: 68,
        receiver: 69,
        text: "쪽지를 받습니다!",
        updatedDate: "2023-07-11T20:18:42.340494",
      },
    ],
  },
  sender: 69,
  receiver: 68,
  creatorNickname: "코코",
  platformHeadType: "유튜브",
  platformHeadTheme: "ASMR",
};

export default function useAsked() {
  return {
    creatorNickname: DATA.creatorNickname,
    platformHeadType: DATA.platformHeadType,
    platformHeadTheme: DATA.platformHeadTheme,
    messages: DATA.messages,
    sender: DATA.sender,
    receiver: DATA.receiver,
  };
}
