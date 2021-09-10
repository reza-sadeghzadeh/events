import "../styles/global-styles.css";
import "../styles/custom-classes.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import styled from "styled-components";
import HeaderNav from "../components/Header";
import { ThemeProvider } from "styled-components";
import Footer from "../components/homeComponents/Footer";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const theme = {};

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    let cookies = document.cookie;
    let cookiObg = {};
    cookies
      .split(" ")
      .map((part) => part.split("="))
      .forEach((a) => (cookiObg[a[0]] = a[1]));
    let token = cookiObg["X-token"];
    if (token) {
      let { data } = await axios.post("/api/users/getUser", { token: token });
      if (data) setUser(data);
    }
    return;
  }, []);

  return (
    <Div>
      <ThemeProvider theme={theme}>
        {/* <ToastContainer> */}
        <div className="header">
          <HeaderNav thisUser={user} />
        </div>
        <Component user={user} {...pageProps} />
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
