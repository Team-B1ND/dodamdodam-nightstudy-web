import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import MyPage from "../pages/mypage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/my" element={<MyPage />} />
    </Routes>
  );
};

export default Router;
