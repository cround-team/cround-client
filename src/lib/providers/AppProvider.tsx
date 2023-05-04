"use client";

import { ThemeProvider } from "styled-components";
import ReactQuery from "./ReactQuery";
import GlobalStyle from "@/styles/global";
import { theme } from "@/styles/themes/theme";
import { PropsWithChildren } from "react";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <ReactQuery>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ReactQuery>
  );
}
