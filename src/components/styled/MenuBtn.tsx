import { styled } from '@mui/material/styles';
import { IconButton } from '../../mui';

const MenuBtn = styled(IconButton)`
    @media (min-width: 801px) {
        display: none;
    }
`;

export default MenuBtn;
