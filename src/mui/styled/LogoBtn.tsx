import { styled } from "@mui/material/styles";
import { Button } from "..";

const LogoBtn = styled(Button)`
  color: #40424a;
  font-weight: 600;
  font-size: 24px;
  text-transform: lowercase;
  @media (max-width: 599px) {
    display: none;
  }
  img {
    height: 45px;
  }
`;

export default LogoBtn;