"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";
import Link from "next/link";

export default function TestPage() {
  const [data, setData] = useState("");

  // 테스트 API
  const testHealth = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get("/cround/health");
      console.log(response);
      setData(response.data.status);
    };
    fetchData();
  };

  const testKakao = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get("/oauth2/authorize/kakao", {
        params: {
          // redirect_uri: "http://54.180.6.174/oauth2/kakao",
          redirect_uri: "https://localhost:3000/test/kakao",
        },
      });
      console.log(response);
    };
    fetchData();
  };

  const test2Kakao = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get("/oauth2/authorize/kakao");
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

  // 일반 로그인
  const testLogin = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.post(
        "/api/members/login/token",
        {
          email: "cround@cround.com",
          password: "cround",
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
      <p>{`테스트: ${data}`}</p>
      <button onClick={testHealth}>health 테스트</button>
      <button onClick={testKakao}>카카오 테스트</button>
      <Link href="http://54.180.6.174/oauth2/authorize/kakao?redirect_uri=http://localhost:3000/test/kakao">
        링크테스트
      </Link>
      {/* <button onClick={testApi}>테스트 실행</button> */}
      {/* <button onClick={kakaoOauth}>카카오 오어쓰</button> */}
      {/* <button onClick={testSignup}>일반 회원가입 테스트</button>
      <button onClick={testLogin}>일반 로그인 테스트</button>
      <button onClick={testOauth}>Oauth 테스트</button> */}
    </S.Container>
  );
}
