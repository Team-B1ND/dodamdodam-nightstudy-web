import { DarkmodeButton } from "@b1nd/b1nd-dodam-common-ui";
import { PageTemplateContainer, PageTemplateContentWrap } from "./style";
import useTheme from "../../../hooks/Theme1/useTheme";
import { useRecoilValue } from "recoil";
import { themeModeAtom } from "../../../store/Theme1/theme.store";
import NavBar from "../NavBar";

interface Props {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  const { handleTheme } = useTheme();
  const isDark = useRecoilValue(themeModeAtom);

  return (
    <PageTemplateContainer>
      <NavBar />
      <PageTemplateContentWrap>{children}</PageTemplateContentWrap>
      <DarkmodeButton
        onClick={handleTheme}
        isDark={isDark === "DARK" ? true : false}
      />
    </PageTemplateContainer>
  );
};

export default PageTemplate;
