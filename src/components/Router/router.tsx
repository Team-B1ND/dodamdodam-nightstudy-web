import { Route, Routes } from "react-router-dom";
import HomePage from "pages/Home/page";
import PageTemplate from "components/Common/PageTemplate";
import { DodamNotFoundPage } from "@b1nd/dds-web";
import ManagePage from "pages/ManagePage/page";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route index element={<HomePage />} />
        <Route path="/domitory-manage" element={<ManagePage />}/>
      </Route>
      <Route path="*" element={<DodamNotFoundPage />} />
    </Routes>
  );
};

export default Router;
