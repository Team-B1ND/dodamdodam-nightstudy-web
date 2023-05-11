import React from "react";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import styled from "styled-components";
import { ApplyPlaceNameBox } from "../../../Apply/ApplyPlace/style";

const CheckBoxFallBackLoader = () => {
  return (
    <>
      <ApplyPlaceNameBox>
        {Array.from({ length: 6 }).map((_, idx) => (
          <Item key={idx} />
        ))}
      </ApplyPlaceNameBox>
    </>
  );
};

const Item = styled.div`
  width: 150px;
  height: 17px;
  ${skeletonAnimtaion};
`;

export default CheckBoxFallBackLoader;
