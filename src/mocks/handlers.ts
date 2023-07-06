import { rest } from "msw";

export type Product = {
  name: string;
  imagePath: string;
};

export const handlers = [
  rest.get("http://54.180.159.108/api/creators/home", (req, res, ctx) => {
    return res(
      // ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        latestCreators: [
          {
            creatorId: 0,
            description:
              "안녕하세요 크리에이터 코코팜팜가돗입니다\n 현재 유튜브에서 활동 하고 있으며 asmr위주의 숏폼영상을 올리고 있습니다. 질문은 언제나 환영입니다",
            creatorNickname: "코코팜팜가돗",
            platformType: "youtube",
            profileImage: "https://ifh.cc/g/owtZoM.jpg",
            platformTheme: "ASMR  ",
          },
          {
            creatorId: 1,
            description:
              "안녕하세요 레오입니다\n 과거 N사 웹툰 작가로 10편 가량의 작품을 연재한 경력이 있습니다.",
            creatorNickname: "레오",
            platformType: "웹툰",
            profileImage: "https://ifh.cc/g/nDoX4m.jpg",
            platformTheme: "코믹",
          },
          {
            creatorId: 2,
            description:
              "안녕하세요 크리에이터 헤이즈 입니다\n 현재 트위치, 이모티콘 위주의 영상을 올리고 있습니다 문의사항은 이메일 혹은 질문하기로 문의 부탁드립니다",
            creatorNickname: "헤이즈",
            platformType: "트위치",
            profileImage: "https://ifh.cc/g/kqYAlC.jpg",
            platformTheme: "예술",
          },
          {
            creatorId: 3,
            description: "안녕하세요 페이커입니다.",
            creatorNickname: "페이커",
            platformType: "트위치",
            profileImage: "https://ifh.cc/g/b7f3Za.jpg",
            platformTheme: "게임",
          },
        ],
        interestCreators: [
          {
            creatorId: 0,
            description:
              "안녕하세요 크리에이터 코코팜팜가돗입니다\n 현재 유튜브에서 활동 하고 있으며 asmr위주의 숏폼영상을 올리고 있습니다. 질문은 언제나 환영입니다",
            creatorNickname: "코코팜팜가돗",
            platformType: "youtube",
            profileImage: "https://ifh.cc/g/owtZoM.jpg",
            platformTheme: "ASMR  ",
          },
          {
            creatorId: 1,
            description:
              "안녕하세요 레오입니다\n 과거 N사 웹툰 작가로 10편 가량의 작품을 연재한 경력이 있습니다.",
            creatorNickname: "레오",
            platformType: "웹툰",
            profileImage: "https://ifh.cc/g/nDoX4m.jpg",
            platformTheme: "코믹",
          },
          {
            creatorId: 2,
            description:
              "안녕하세요 크리에이터 헤이즈 입니다\n 현재 트위치, 이모티콘 위주의 영상을 올리고 있습니다 문의사항은 이메일 혹은 질문하기로 문의 부탁드립니다",
            creatorNickname: "헤이즈",
            platformType: "트위치",
            profileImage: "https://ifh.cc/g/kqYAlC.jpg",
            platformTheme: "예술",
          },
          {
            creatorId: 3,
            description: "안녕하세요 페이커입니다.",
            creatorNickname: "페이커",
            platformType: "트위치",
            profileImage: "https://ifh.cc/g/b7f3Za.jpg",
            platformTheme: "게임",
          },
        ],
        randomCreators: [
          {
            creatorId: 0,
            description:
              "안녕하세요 크리에이터 코코팜팜가돗입니다\n 현재 유튜브에서 활동 하고 있으며 asmr위주의 숏폼영상을 올리고 있습니다. 질문은 언제나 환영입니다",
            creatorNickname: "코코팜팜가돗",
            platformType: "youtube",
            profileImage: "https://ifh.cc/g/owtZoM.jpg",
            platformTheme: "ASMR  ",
          },
          {
            creatorId: 1,
            description:
              "안녕하세요 레오입니다\n 과거 N사 웹툰 작가로 10편 가량의 작품을 연재한 경력이 있습니다.",
            creatorNickname: "레오",
            platformType: "웹툰",
            profileImage: "https://ifh.cc/g/nDoX4m.jpg",
            platformTheme: "코믹",
          },
          {
            creatorId: 2,
            description:
              "안녕하세요 크리에이터 헤이즈 입니다\n 현재 트위치, 이모티콘 위주의 영상을 올리고 있습니다 문의사항은 이메일 혹은 질문하기로 문의 부탁드립니다",
            creatorNickname: "헤이즈",
            platformType: "이모티콘",
            profileImage: "https://ifh.cc/g/kqYAlC.jpg",
            platformTheme: "예술",
          },
          {
            creatorId: 3,
            description: "안녕하세요 페이커입니다.",
            creatorNickname: "페이커",
            platformType: "트위치",
            profileImage: "https://ifh.cc/g/b7f3Za.jpg",
            platformTheme: "게임",
          },
        ],
      })
    );
  }),
  rest.get("http://54.180.159.108/api/shorts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        pages: [
          {
            shortsId: 0,
            title:
              "ASMR 팁 방출 및 ASMR 분야의 모든것을 알려드리고자 합니다. ASMR 팁 방출 및 ASMR 분야의 모든것을 알려드리고자 합니다. ASMR 팁 방출 및 ASMR 분야의 모든것을 알려드리고자 합니다.",
            thumbnailUrl: "https://ifh.cc/g/yqHOwh.jpg",
            platformType: "유튜브",
            profileImage: "https://ifh.cc/g/owtZoM.jpg",
            author: "코코팜팜가돗",
          },
          {
            shortsId: 1,
            title: "웹툰 작가로 일하며 느낀점",
            thumbnailUrl: "https://ifh.cc/g/Kmff8k.jpg",
            platformType: "웹툰",
            profileImage: "https://ifh.cc/g/nDoX4m.jpg",
            author: "레오",
          },
          {
            shortsId: 2,
            title: "이모티콘 제작 과정",
            thumbnailUrl: "https://ifh.cc/g/yT5yjT.png",
            platformType: "이모티콘",
            profileImage: "https://ifh.cc/g/kqYAlC.jpg",
            author: "헤이즈",
          },
          {
            shortsId: 3,
            title: "게이머의 일상",
            thumbnailUrl: "https://ifh.cc/g/RA31Yo.jpg",
            platformType: "트위치",
            profileImage: "https://ifh.cc/g/b7f3Za.jpg",
            author: "페이커",
          },
        ],
      })
    );
  }),
  rest.get("http://54.180.159.108/api/boards", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        pages: [
          {
            boardId: 0,
            title: "ASMR 이렇게 하세요",
            content:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellendus placeat ratione. Deleniti laboriosam asperiores quibusdam earum maxime sit voluptatem doloremque officia quod voluptatum expedita, explicabo facere dolor est quae?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellendus placeat ratione. Deleniti laboriosam asperiores quibusdam earum maxime sit voluptatem doloremque officia quod voluptatum expedita, explicabo facere dolor est quae?",
            platformType: "ASMR",
            profileImage: "https://ifh.cc/g/owtZoM.jpg",
            author: "코코팜팜가돗",
          },
          {
            boardId: 1,
            title: "웹툰 이렇게 진행하시면 도움이 됩니다",
            content:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellendus placeat ratione. Deleniti laboriosam asperiores quibusdam earum maxime sit voluptatem doloremque officia quod voluptatum expedita, explicabo facere dolor est quae?",
            platformType: "웹툰",
            profileImage: "https://ifh.cc/g/nDoX4m.jpg",
            author: "레오",
          },
          {
            boardId: 2,
            title: "이모티콘으로 벌어들인 수입 공개",
            content: "Lorem ipsum, ",
            platformType: "이모티콘",
            profileImage: "https://ifh.cc/g/kqYAlC.jpg",
            author: "헤이즈",
          },
          {
            boardId: 3,
            title: "중요한건 꺾이지 않는 마음입니다.",
            content:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellendus placeat ratione.",
            platformType: "트위치",
            profileImage: "https://ifh.cc/g/b7f3Za.jpg",
            author: "페이커",
          },
        ],
      })
    );
  }),
];
