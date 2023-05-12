"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function KaKaoPage() {
  const [code, setCode] = useState();
  useEffect(() => {
    let code: any = new URL(window.location.href).searchParams.get("code");
    setCode(code);
    console.log(code);
  }, []);

  // 테스트 API
  const testApi = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get("cround/health");
      console.log(response.data);
    };
    fetchData();
  };

  //테스트3 기존 오어쓰 방식
  const baseOauth = () => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get("/oauth2/kakao", {
        params: {
          code: code,
        },
      });
      console.log(response);
    };
    fetchData();
  };

  return (
    <>
      <p>이곳은 리다이렉트용 카카오페이지입니다.</p>
      <button onClick={testApi}>헬쓰ㅇㅇㅇㅇ</button>
      <button onClick={baseOauth}>베이스 오어쓰</button>
    </>
  );
}
