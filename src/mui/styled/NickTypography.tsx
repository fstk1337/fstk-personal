import { styled } from "@mui/material/styles";
import { Typography } from "..";

const NickTypography = styled(Typography)`
  @media (min-width: 600px) {
    display: none;
  }
`;

export default NickTypography;