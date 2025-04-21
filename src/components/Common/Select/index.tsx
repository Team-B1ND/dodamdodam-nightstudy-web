import { useState } from "react";
import {
  SelectContainer,
  SelectIcon,
  SelectItem,
  SelectItemWrap,
} from "./style";
import { IoIosArrowDown } from "react-icons/io";
import { CSSObject } from "styled-components";

export interface SelectProps {
  items: string[];
  value: string;
  onSelectedItemChange: (type: string) => void;
  zIndex?: number;
  customStyle?: CSSObject;
}

export const Select = ({
  items,
  value,
  zIndex,
  onSelectedItemChange,
  customStyle,
}: SelectProps) => {
  const [close, setClose] = useState<boolean>(true);

  return (
    <SelectContainer
      close={close}
      onClick={() => setClose((prev) => !prev)}
      style={customStyle}
    >
      <p>{value}</p>
      <SelectIcon close={close}>
        <IoIosArrowDown />
      </SelectIcon>
      {!close && (
        <SelectItemWrap style={{ zIndex }}>
          {items.map((item, idx) => (
            <SelectItem key={idx} onClick={() => onSelectedItemChange(item)}>
              {item}
            </SelectItem>
          ))}
        </SelectItemWrap>
      )}
    </SelectContainer>
  );
};
