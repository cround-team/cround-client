"use client";

import { useSocialLogin } from "@/components/domain";

export default function KakaoAuthPage() {
  useSocialLogin();

  return <h1>이곳은 리다이렉트용 카카오페이지입니다.</h1>;
}
