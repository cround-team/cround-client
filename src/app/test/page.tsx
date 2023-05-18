"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";
import Link from "next/link";
import { KAKAO_AUTH_URL, KAKAO_AUTH_LOGOUT } from "@/service/kakaoOauth";

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

  // 일반 로그인
  const testSignup = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.post(
        "/api/members",
        {
          username: "크라운드드",
          email: "cround2@cround.com",
          password: "cround2",
          confirmPassword: "cround2",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    };
    fetchData();
  };

  return (
    <S.Container>
      <button onClick={testKakao}>카카오 버튼 테스트</button>
      <Link href={KAKAO_AUTH_URL}>카카오 테스트</Link>
      <button onClick={testHealth}>헬쓰 테스트</button>
      <Link href={KAKAO_AUTH_LOGOUT}>로그아웃 테스트</Link>
    </S.Container>
  );
}
