import "./global.css";

import { QueryClient, QueryClientProvider } from "react-query";
import {
  ThemeProvider,
  ThemedStyledProps,
  createGlobalStyle,
} from "styled-components";

import { AppProps } from "next/app";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import React from "react";
import { theme } from "../themes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalStyle = createGlobalStyle<ThemedStyledProps<any, typeof theme>>`
    body {
        background: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};
        font-family: ${(props) => props.theme.typography.fontFamily.body};
        font-size: ${(props) => props.theme.typography.size.normal};
        font-weight: ${(props) => props.theme.typography.weight.normal};
    }
`;

const RadicalApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div
          style={{
            display: "grid",
            gridTemplateRows: "max-content auto max-content",
            minHeight: "100vh",
          }}
        >
          <Header />
          <div
            style={{
              width: "80%",
              margin: "0 auto",
              padding: "0.5rem 0",
            }}
          >
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default RadicalApp;
