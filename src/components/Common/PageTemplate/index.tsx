import { PageTemplateContainer } from "./style";
import useTheme from "src/hooks/Theme/useTheme";
import { DodamNavBar } from "@b1nd/dds-web";
import { Outlet } from "react-router-dom";

const PageTemplate = () => {
  const { themeColor, handleTheme } = useTheme();

  return (
    <PageTemplateContainer>
      <DodamNavBar
        location={"nightstudy"}
        currentTheme={themeColor}
        handleTheme={handleTheme}
        logout={() => console.log("로그아웃")}
      />
      <Outlet />
    </PageTemplateContainer>
  );
};

export default PageTemplate;
