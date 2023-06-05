"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";
import Link from "next/link";
import {
  KAKAO_AUTH_URL,
  KAKAO_AUTH_LOGOUT,
  KAKAO_TEST_URL,
} from "@/service/kakaoOauth";

export default function TestPage() {
  const [data, setData] = useState("");

  const testKakao = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get(KAKAO_AUTH_URL);
      console.log(response);
    };
    fetchData();
  };

  // 테스트 API
  const testHealth = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get("/cround/health");
      console.log(response.data);
      setData(response.data.status);
    };
    fetchData();
  };

  // 카카오 로그아웃
  const kakaoLogout = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get(KAKAO_AUTH_LOGOUT);
      console.log(response);
    };
    fetchData();
  };

  const windowTest = () => {
    window.location.href = KAKAO_TEST_URL;
  };

  return (
    <S.Container>
      <button onClick={() => windowTest()}>카카오 버튼 테스트</button>
      <Link target="_blank" href={KAKAO_TEST_URL}>
        카카오 테스트
      </Link>
      <button onClick={testHealth}>헬쓰 테스트</button>
      <Link href={KAKAO_AUTH_LOGOUT}>로그아웃 테스트</Link>
      <Link href="https://kapi.kakao.com/v1/user/logout">로그아웃 2테스트</Link>
    </S.Container>
  );
}
