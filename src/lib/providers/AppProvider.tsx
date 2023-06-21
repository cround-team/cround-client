"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import ReactQuery from "./ReactQuery";

import GlobalStyle from "@/styles/global";
import { theme } from "@/styles/themes/theme";
import { AuthContextProvider } from "@/context/AuthContext";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <ReactQuery>
      <GlobalStyle />
      <AuthContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AuthContextProvider>
    </ReactQuery>
  );
}
