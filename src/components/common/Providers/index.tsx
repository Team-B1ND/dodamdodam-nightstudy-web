import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../../../styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 1000,
    },
  },
});

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <B1ndToastContainer />
        <GlobalStyle />
        <BrowserRouter>
          <Layout>{children}</Layout>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Providers;
