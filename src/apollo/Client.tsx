// Container component
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://shirayamamachi::stepzen.net+1000::1f836a64154fdb7b9eea1046bb40818d68e3278a29ba4fff632e57d1569f664a",
  //uri: "https://shirayamamachi::stepzen.net+1000::1f836a64154fdb7b9eea1046bb40818d68e3278a29ba4fff632e57d1569f664a",
  //uri: "https://baguey::stepzen.io+1000::b82b51699a3f5e9c91c8a6a200079844740fda0909665c00b1948ebce21f6e44",
  headers: {
    Authorization:
      "apikey shirayamamachi::stepzen.io+1000::fdfe0fd7bab41db9f5a15c30cc3afb83ebc39c8d9391d58d5608d6c53077c71a",
    //"apikey shirayamamachi::stepzen.net+1000::1f836a64154fdb7b9eea1046bb40818d68e3278a29ba4fff632e57d1569f664a",
    //"apikey baguey::stepzen.net+1000::9dc43a63d7b3964e51aff5165028f42dbac4af8ac541a31115ede23021c5ad74",
  },
  cache: new InMemoryCache(),
});
export default client;
