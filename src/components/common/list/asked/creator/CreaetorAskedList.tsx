import Link from "next/link";
import * as S from "./styled";
import { PATH } from "@/constants";
import Image from "next/image";
import { media } from "@/styles/themes/foundations";

type CreaetorAskedListProps = {
  data: {
    id: number;
    sender: number;
    receiver: number;
    text: string;
    updatedDate: string;
    creatorNickname: string;
    platformHeadType: string;
    platformHeadTheme: string;
    profileImage: string;
  };
};

export default function CreaetorAskedList({ data }: CreaetorAskedListProps) {
  const {
    id,
    sender,
    receiver,
    text,
    updatedDate,
    creatorNickname,
    platformHeadType,
    platformHeadTheme,
    profileImage,
  } = data;
  return <div>dd</div>;
}
