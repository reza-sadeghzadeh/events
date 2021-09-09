import "../styles/global-styles.css";
import "../styles/custom-classes.css";
import React from "react";
import type { AppProps } from "next/app";
import styled from "styled-components";
import HeaderNav from "../components/Header";
import { ThemeProvider } from "styled-components";
import Footer from "../components/homeComponents/Footer";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = {};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Div>
      <ThemeProvider theme={theme}>
        {/* <ToastContainer> */}
        <div className="header">
          <HeaderNav />
        </div>
        <Component {...pageProps} />
        <Footer />
        {/* </ToastContainer> */}
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
