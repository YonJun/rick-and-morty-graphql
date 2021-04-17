import "./styles.css";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import Home from "pages/Home";
import { __BASE_URL__ } from "constants/api";

const client = new ApolloClient({
  uri: __BASE_URL__,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
