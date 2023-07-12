"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import ReactQuery from "./ReactQuery";

import GlobalStyle from "@/styles/global";
import { theme } from "@/styles/themes/theme";
import { AuthContextProvider } from "@/context/AuthContext";
import ScrollToTop from "@/components/common/scrollToTop/ScrollToTop";

export default function AppProvider({ children }: PropsWithChildren) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    const { worker } = require("../../mocks/browser");
    worker.start();
  }

  return (
    <ReactQuery>
      <GlobalStyle />
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <ScrollToTop>{children}</ScrollToTop>
        </ThemeProvider>
      </AuthContextProvider>
    </ReactQuery>
  );
}
