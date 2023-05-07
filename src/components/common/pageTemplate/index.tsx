import { DarkmodeButton } from "@b1nd/b1nd-dodam-common-ui";
import { PageTemplateContainer, PageTemplateContentWrap } from "./style";
import useTheme from "../../../hooks/theme/useTheme";
import { useRecoilValue } from "recoil";
import { themeModeAtom } from "../../../store/theme/theme.store";
import NavBar from "../navbar";

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
