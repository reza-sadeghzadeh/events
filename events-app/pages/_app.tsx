import "../styles/global-styles.css";
import "../styles/custom-classes.css";
import React from "react";
import type { AppProps } from "next/app";
import styled from "styled-components";
import HeaderNav from "../components/Header";
import { ThemeProvider } from "styled-components";
import Footer from "../components/homeComponents/Footer";

const theme = {};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Div>
      <ThemeProvider theme={theme}>
        <div className="header">
          <HeaderNav />
        </div>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Div>
  );
}
export default MyApp;

const Div = styled.main`
  direction: rtl;
  overflow-x: hidden;
  .header {
    margin-bottom: 80px;
  }
`;
