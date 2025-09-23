import { Route, Routes } from "react-router-dom";
import HomePage from "pages/Home/page";
import PageTemplate from "components/Common/PageTemplate";
import { DodamNotFoundPage } from "@b1nd/dds-web";
import ManagePage from "pages/ManagePage/page";
import { useState, useEffect } from "react";
import studentRepository from "repositories/Student/student.repository";

const ProtectedManagePage = () => {
  const [isDormitoryManageMember, setIsDormitoryManageMember] = useState<
    boolean | null
  >(null);

  const getDormitoryManageMemberCheckData = async () => {
    const data = await studentRepository.checkDormitoryManager();
    setIsDormitoryManageMember(data.data);
  };

  useEffect(() => {
    getDormitoryManageMemberCheckData();
  }, []);

  if (isDormitoryManageMember === null || !isDormitoryManageMember) {
    return null; 
  }

  return <ManagePage />;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route index element={<HomePage />} />
        <Route path="/dormitory-manage" element={<ProtectedManagePage />} />
      </Route>
      <Route path="*" element={<DodamNotFoundPage />} />
    </Routes>
  );
};

export default Router;
