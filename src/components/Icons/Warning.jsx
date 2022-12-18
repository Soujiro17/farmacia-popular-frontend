import React from "react";
import { Path, Svg } from "./style";

const Warning = ({ fill, height, width }) => {
  return (
    <Svg
      width={width || "22"}
      height={height || "19"}
      viewBox="0 0 22 19"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0.916992 18.25H21.0837L11.0003 0.833374L0.916992 18.25ZM11.917 15.5H10.0837V13.6667H11.917V15.5ZM11.917 11.8334H10.0837V8.16671H11.917V11.8334Z"
        fill={fill}
      />
    </Svg>
  );
};

export default Warning;
