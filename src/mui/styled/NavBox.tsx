import { styled } from "@mui/material/styles";
import { Box } from "..";

const NavBox = styled(Box)`
  @media (max-width: 599px) {
    display: none;
  }
`;

export default NavBox;