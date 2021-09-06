import "../styles/global-styles.css";
import type { AppProps } from "next/app";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const theme = {};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Div>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          {/* <Header/> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </Div>
  );
}
export default MyApp;

const Div = styled.main`
  direction: rtl;
`;
