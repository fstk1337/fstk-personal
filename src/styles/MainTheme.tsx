import { createTheme } from "@mui/material/styles";
import { cyan, teal } from '@mui/material/colors';

const MainTheme = createTheme({
    palette: {
        primary: teal,
        secondary: cyan
    }
});

export default MainTheme;