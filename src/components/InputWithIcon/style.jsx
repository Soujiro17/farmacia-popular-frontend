import styled from "styled-components";
import colors from "../../constants/colors";
import Input from "../../shared/Input";

export const ImgIcon = styled.img`
  width: 30px;
  height: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white100};
  height: ${(props) => props.height || "2.5rem"};
  width: ${(props) => props.width || "100%"};
  border: 1px solid ${colors.black};
  border-radius: 0.5rem;
  padding-right: 1rem;
`;

export const InputCustom = styled(Input)`
  height: 96%;
  line-height: ${(props) => props.height};
  font-size: calc(1.2rem + 0.4vw);
  outline: none;
  border: none;
`;
