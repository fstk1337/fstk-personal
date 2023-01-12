import { styled } from "@mui/material/styles";
import { Stack } from "../../mui";

const NavStack = styled(Stack)`
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;

export default NavStack;