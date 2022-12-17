import styled from "styled-components";

const LogoImg = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  object-fit: ${(props) => (props.cover ? "cover" : "contain")};
  object-position: center;
`;

export default LogoImg;
