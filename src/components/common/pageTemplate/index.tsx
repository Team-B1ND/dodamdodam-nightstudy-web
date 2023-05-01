import { DarkmodeButton } from "@b1nd/b1nd-dodam-common-ui";
import {
  PageTemplateContainer,
  PageTemplateContentWrap,
  PageTemplateWrap,
} from "./style";
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
      <PageTemplateWrap>
        <NavBar />
        <PageTemplateContentWrap>{children}</PageTemplateContentWrap>
        <DarkmodeButton
          onClick={handleTheme}
          isDark={isDark === "DARK" ? true : false}
        />
      </PageTemplateWrap>
    </PageTemplateContainer>
  );
};

export default PageTemplate;
