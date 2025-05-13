import { PageTemplateContainer } from "./style";
import useTheme from "hooks/Theme/useTheme";
import { DodamNavBar } from "@b1nd/dds-web";
import { Outlet } from "react-router-dom";
import useLogout from "hooks/Auth/useLogout";

const PageTemplate = () => {
  const { themeColor, handleTheme } = useTheme();
  const { handleClickLogout } = useLogout();

  return (
    <PageTemplateContainer>
      <DodamNavBar
        location={"nightstudy"}
        currentTheme={themeColor}
        handleTheme={handleTheme}
        logout={handleClickLogout}
      />
      <Outlet />
    </PageTemplateContainer>
  );
};

export default PageTemplate;
