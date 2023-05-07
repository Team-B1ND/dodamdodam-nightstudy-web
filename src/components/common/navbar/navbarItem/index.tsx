import React from "react";
import { NavBarItemContainer, NavBarItemBox } from "./style";
import { NAVBAR_ITEMS } from "../../../../constants/navbar/navbar.constant";
import { useLocation, useNavigate } from "react-router-dom";

const NavBarItem = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <NavBarItemContainer>
      {NAVBAR_ITEMS.map((item, idx) => {
        return (
          <>
            <NavBarItemBox
              pathName={pathname}
              linkName={item.link}
              key={idx}
              onClick={() => navigate(item.link)}
            >
              {pathname === item.link ? <span>•</span> : null}
              {item.title}
            </NavBarItemBox>
          </>
        );
      })}
    </NavBarItemContainer>
  );
};

export default NavBarItem;
