import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import { Provider } from "react-redux";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { store } from "../redux/store";

interface MyAppProps extends AppProps {}

const MyApp: NextPage<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
};

export default MyApp;
