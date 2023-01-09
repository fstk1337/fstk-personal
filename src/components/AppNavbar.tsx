import { useState } from 'react';
import { AppBar, Avatar, Box, Container, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "../mui";
import { LogoBtn, MenuBtn, MyToolbar, NavStack, NavBtn, InfoItemText, ContactBtn, MenuDrawer, InfoDrawer } from "./styled";
import { ArrowDropDownRoundedIcon, GitHubIcon, InstagramIcon, LinkedInIcon, LinkRoundedIcon, MenuIcon, TelegramIcon } from "../mui/icons";
import AppMenu from './AppMenu';
import DropdownAvatar from './styled/DropdownAvatar';
import SkypeIcon from './icon/SkypeIcon';
import VKIcon from './icon/VKIcon';


const navItems = ['Home', 'Projects', 'Blog'];
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
    href: 'skype:vit_shvaichuk'
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

const AppNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleInfo = () => {
    setInfoOpen(!infoOpen);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleInfo}
      onKeyDown={toggleInfo}
    >
      <List>
        {socials.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon children={item.icon} />
              </ListItemIcon>
              <InfoItemText secondary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="lg">
        <MyToolbar disableGutters variant="regular">
          <LogoBtn>
            <img src="src/assets/logo.svg" alt="logo" />
          </LogoBtn>
          <NavStack direction="row" gap="40px">
            {navItems.map((item) => (
              <NavBtn
                variant="text"
                key={item}
              >
                {item}
              </NavBtn>
            ))}
            <ContactBtn 
              size="large"
              color="inherit"
              aria-label="info"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <DropdownAvatar src="src/assets/me.png" alt="me" />
              Contacts
              <ArrowDropDownRoundedIcon />
            </ContactBtn>
          </NavStack>
          
          <MenuBtn
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </MenuBtn>
        </MyToolbar>
      </Container>
    </AppBar>
    <AppMenu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    />
    <MenuDrawer
      anchor="right" 
      open={menuOpen}
      onClose={toggleMenu}
    >
      <ListItem>
        <ListItemIcon>
          <Avatar alt="me" src="src/assets/logo.png"/>
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItem>
      <Divider />
      <Box
      role="presentation"
      onClick={toggleMenu}
      onKeyDown={toggleMenu}
    >
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkRoundedIcon />
              </ListItemIcon>
              <ListItemText secondary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem>
        <ListItemIcon>
          <Avatar alt="me" src="src/assets/contacts.png"/>
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
      <Divider />
      <List>
        {socials.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon children={item.icon} />
              </ListItemIcon>
              <InfoItemText secondary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    </MenuDrawer>
    </>
  );
}

export default AppNavbar;