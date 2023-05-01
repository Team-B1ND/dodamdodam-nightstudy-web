import React from "react";
import { NavBarItemContainer, NavBarItemBox } from "./style";
import { NAVBAR_ITEMS } from "../../../../constants/navbar/navbar.constant";

const NavBarItem = () => {
  return (
    <NavBarItemContainer>
      {NAVBAR_ITEMS.map((item) => {
        return (
          <>
            <NavBarItemBox>{item.title}</NavBarItemBox>
          </>
        );
      })}
    </NavBarItemContainer>
  );
};

export default NavBarItem;
