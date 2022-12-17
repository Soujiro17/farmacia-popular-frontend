import React from "react";
import LogoImg from "./style";

const Logo = ({
  height,
  width,
  cover = false,
  corpo = false,
  white = false,
}) => {
  return (
    <LogoImg
      src={
        // eslint-disable-next-line no-nested-ternary
        corpo
          ? white
            ? "/corpo-logo-white.png"
            : "/corpo-logo.png"
          : "/logo.png"
      }
      height={height}
      width={width}
      cover={cover}
      alt="logo"
    />
  );
};

export default Logo;
