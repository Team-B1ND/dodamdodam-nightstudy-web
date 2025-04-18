import { useState } from "react";
import {
  SelectContainer,
  SelectIcon,
  SelectItem,
  SelectItemWrap,
  SelectText,
} from "./style";
import { IoIosArrowDown } from "react-icons/io";
import { CSSObject } from "styled-components";

export interface SelectProps {
  items: string[];
  value: string;
  onChange: (type: string) => void;
  zIndex?: number;
  customStyle?: CSSObject;
}

export const Select = ({
  items,
  value,
  zIndex,
  onChange,
  customStyle,
}: SelectProps) => {
  const [close, setClose] = useState<boolean>(true);

  return (
    <SelectContainer
      close={close}
      onClick={() => setClose((prev) => !prev)}
      style={customStyle}
    >
      <SelectText>{value}</SelectText>
      <SelectIcon close={close}>
        <IoIosArrowDown />
      </SelectIcon>
      {!close && (
        <SelectItemWrap style={{ zIndex }}>
          {items.map((item, idx) => (
            <SelectItem key={idx} onClick={() => onChange(item)}>
              {item}
            </SelectItem>
          ))}
        </SelectItemWrap>
      )}
    </SelectContainer>
  );
};
