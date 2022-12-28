import { styled } from "@mui/material/styles";
import { IconButton } from "..";

const MenuBtn = styled(IconButton)`
  @media (min-width: 600px) {
    display: none;
  }
`;

export default MenuBtn;