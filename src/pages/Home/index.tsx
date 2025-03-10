import { useTheme } from "styled-components";
import * as S from "./style";

const HomePage = () => {
  const theme = useTheme();
  console.log(theme);

  return <S.Container></S.Container>;
};

export default HomePage;
