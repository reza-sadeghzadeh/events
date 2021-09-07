import "../styles/global-styles.css";
import "../styles/custom-classes.css";
import React from "react";
import Router from "next/router";
import type { AppProps } from "next/app";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import HeaderNav from "../components/Header";

const queryClient = new QueryClient();

const theme = {};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Div>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <HeaderNav />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </Div>
  );
}
export default MyApp;

const Div = styled.main`
  direction: rtl;
  overflow-x: hidden;
`;
