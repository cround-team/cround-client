"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function KaKaoPage() {
  const [code, setCode] = useState();

  useEffect(() => {
    let code: any = new URL(window.location.href).searchParams.get("code");
    setCode(code);
    code && kakaoCodeTest(code);
  }, []);

  // 테스트 API
  const testApi = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get("/cround/health");
    };
    fetchData();
  };

  const kakaoCodeTest = (code: string) => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get(
        `http://54.180.6.174/auth/kakao/login?code=${code}`
      );
      // const response = await axios.get("/auth/kakao/login", {
      //   params: { code },
      // });
    };
    fetchData();
  };

  return (
    <Container>
      <h1>이곳은 리다이렉트용 카카오페이지입니다.</h1>
      <button onClick={testApi}>헬쓰ㅇㅇㅇㅇ</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  text-align: center;
  h1 {
    font-size: 26px;
  }
`;
