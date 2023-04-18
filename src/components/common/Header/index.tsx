import React from "react";
import { HeaderContainer, HeaderLogo } from "./style";
import logo from "../../../assets/logo/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={logo} alt={"header/headerLogo"} />
      </HeaderLogo>
    </HeaderContainer>
  );
};

export default Header;
