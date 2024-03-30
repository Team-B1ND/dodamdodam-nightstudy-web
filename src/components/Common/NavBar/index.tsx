import {
  NavBarContainer,
  NavBarLogo,
  NavBarTitle,
  NavBarTopWrap,
} from "./style";
import logo from "../../../assets/logo/logo.svg";
import { BsFillMoonFill } from "react-icons/bs";
import NavBarItem from "./NavBarItemList";
import NavBarProfile from "./NavBarProfile";
import { Suspense } from "react";
import UserBoxFallBackLoader from "../FallbackLoader/UserBox";
import { ErrorBoundary } from "react-error-boundary";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarTopWrap>
        <NavBarLogo
          src={logo}
          onClick={() => (window.location.href = "http://dodam.b1nd.com/")}
          alt={"header/headerLogo"}
        />
        <NavBarTitle>Night Study</NavBarTitle>
        <BsFillMoonFill
          style={{
            marginLeft: "4px",
            color: "#3A83F0",
            width: "16px",
            height: "17px",
          }}
        />
      </NavBarTopWrap>
      <ErrorBoundary fallback={<>error</>}>
        <Suspense fallback={<UserBoxFallBackLoader />}>
          <NavBarProfile />
        </Suspense>
      </ErrorBoundary>
      <NavBarItem />
    </NavBarContainer>
  );
};

export default NavBar;
