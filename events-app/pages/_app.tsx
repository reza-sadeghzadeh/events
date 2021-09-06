import "../styles/global-styles.css";
import type { AppProps } from "next/app";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
const theme = {};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Div>
      <ThemeProvider theme={theme}>
        {/* <Header/> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </Div>
  );
}
export default MyApp;

const Div = styled.main`
  direction: rtl;
`;
