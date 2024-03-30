import { NavBarItemContainer, NavBarItemBox } from "./style";
import { NAVBAR_ITEMS } from "../../../../constants/NavBar/navbar.constant";
import { useLocation, useNavigate } from "react-router-dom";

const NavBarItem = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <NavBarItemContainer>
      {NAVBAR_ITEMS.map((item, idx) => {
        return (
          <NavBarItemBox
            isMatch={pathname === item.link ? true : false}
            key={idx}
            onClick={() => navigate(item.link)}
          >
            {item.title}
          </NavBarItemBox>
        );
      })}
    </NavBarItemContainer>
  );
};

export default NavBarItem;
