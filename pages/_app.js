import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../apollo-client';

export default function App({ Component, pageProps }) {
  const client=createApolloClient()
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
