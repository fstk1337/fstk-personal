import { styled } from "@mui/material/styles";
import { Typography } from "..";

const LogoTypography = styled(Typography)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default LogoTypography;