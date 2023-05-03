import React from "react";
import { NavBarItemContainer, NavBarItemBox } from "./style";
import { NAVBAR_ITEMS } from "../../../../constants/navbar/navbar.constant";
import { useNavigate } from "react-router-dom";

const NavBarItem = () => {
  const navigate = useNavigate();
  return (
    <NavBarItemContainer>
      {NAVBAR_ITEMS.map((item, idx) => {
        return (
          <>
            <NavBarItemBox key={idx} onClick={() => navigate(item.link)}>
              {item.title}
            </NavBarItemBox>
          </>
        );
      })}
    </NavBarItemContainer>
  );
};

export default NavBarItem;
