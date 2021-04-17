import "./styles.css";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import ListCharacter from "layouts/List";
import { __BASE_URL__ } from "constants/api";

const client = new ApolloClient({
  uri: __BASE_URL__,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ListCharacter />
      </div>
    </ApolloProvider>
  );
}
