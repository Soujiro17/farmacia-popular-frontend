import React from "react";
import { ImgIcon, InputCustom, InputWrapper } from "./style";

const InputWithIcon = ({ placeholder, icon, width, height }) => {
  return (
    <InputWrapper height={height} width={width}>
      <InputCustom height={height} width="100%" placeholder={placeholder} />
      <ImgIcon src={icon} alt="input-icon" />
    </InputWrapper>
  );
};

export default InputWithIcon;
