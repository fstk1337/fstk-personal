import { styled } from "@mui/material/styles";
import { Typography } from "../../mui";

const LogoTypography = styled(Typography)`
  color: #000;
  @media (max-width: 599px) {
    display: none;
  }
`;

export default LogoTypography;