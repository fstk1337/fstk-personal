import { FC } from "react";
import { Icon, ListItemIcon, ListItemText, Link, Menu, MenuItem } from "../mui";
import { GitHubIcon, InstagramIcon, LinkedInIcon, TelegramIcon } from "../mui/icons";
import { styled } from '@mui/material/styles';
import SkypeIcon from "./icon/SkypeIcon";
import VKIcon from "./icon/VKIcon";

interface AppMenuProps {
    anchorEl: null | HTMLElement;
    open: boolean;
    onClose: EventListener;
}

const MyMenu = styled(Menu)`
    & .MuiPaper-root.MuiPopover-paper {
      top: 65px;
      left: 1240px;
      width: auto;
    }
`;

const MyLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
`;

const socials = [
  {
    icon: <LinkedInIcon />,
    type: 'LinkedIn',
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fstk1337'
  },
  {
    icon: <SkypeIcon />,
    type: 'Skype',
    text: 'Skype',
    href: 'skype:vit_shvaichuk?chat'
  },
  {
    icon: <GitHubIcon />,
    type: 'GitHub',
    text: 'GitHub',
    href: 'https://github.com/fstk1337'
  },
  {
    icon: <InstagramIcon />,
    type: 'Instagram',
    text: 'Instagram',
    href: 'https://www.instagram.com/fstk1337'
  },
  {
    icon: <TelegramIcon />,
    type: 'Telegram',
    text: 'Telegram',
    href: 'https://t.me/fstk1337'
  },
  {
    icon: <VKIcon />,
    type: 'VK',
    text: 'VK',
    href: 'https://vk.com/fstk1337'
  },
];

const AppMenu: FC<AppMenuProps> = (props) => {

    return (
      <MyMenu
      id="basic-menu"
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.onClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}
      >
          { socials.map((item, index) => {
            return (
            <MenuItem key={item.type}>
              <MyLink href={item.href} target="_blank">
                <ListItemIcon>
                  <Icon children={item.icon}/>
                </ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </MyLink>
            </MenuItem>
          )})}
      </MyMenu>
    );
}

export default AppMenu;