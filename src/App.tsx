import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { BrowserRouter } from "react-router-dom";
import ThemeProviderContainer from "components/Common/ThemeProviderContainer/index";
import Router from "components/Router/router";

function App() {
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

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <B1ndToastContainer autoClose={3000} limit={1} />
        <BrowserRouter basename="/nightstudy">
          <ThemeProviderContainer>
            <Router />
          </ThemeProviderContainer>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
