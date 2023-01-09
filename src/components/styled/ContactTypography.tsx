import { styled } from "@mui/material/styles";
import { Typography } from "../../mui";

const ContactTypography = styled(Typography)`
  text-transform: lowercase;
  @media (max-width: 599px) {
    display: none;
  }
`;

export default ContactTypography;