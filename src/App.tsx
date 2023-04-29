import React from "react";
import Providers from "./components/common/Providers";
import Router from "./router/Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Providers>
        <Router />
      </Providers>
    </RecoilRoot>
  );
}

export default App;
