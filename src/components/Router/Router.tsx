import { Route, Routes } from "react-router-dom";
import HomePage from "src/pages/Home/page";
import PageTemplate from "src/components/Common/PageTemplate";
import { DodamNotFoundPage } from "@b1nd/dds-web";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<DodamNotFoundPage />} />
    </Routes>
  );
};

export default Router;
