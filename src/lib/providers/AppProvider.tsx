"use client";

import { ThemeProvider } from "styled-components";
import ReactQuery from "./ReactQuery";
import GlobalStyle from "@/styles/global";
import { theme } from "@/styles/themes/theme";
import { PropsWithChildren } from "react";
import MyPageSidebar from "@/components/layout/myPage/MyPageSidebar";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <ReactQuery>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* <MyPageSidebar /> */}
        {children}
      </ThemeProvider>
    </ReactQuery>
  );
}
