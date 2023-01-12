import React, { useState } from 'react';
import { AppBar, Avatar, Box, Container, Divider, Icon, List, Link, ListItem, ListItemButton, ListItemIcon, ListItemText } from "../mui";
import { LogoBtn, MenuBtn, MyToolbar, NavStack, NavBtn, InfoItemText, ContactBtn, MenuDrawer, AppNavLink } from "./styled";
import { ArrowDropDownRoundedIcon, GitHubIcon, InstagramIcon, LinkedInIcon, LinkRoundedIcon, MenuIcon, TelegramIcon } from "../mui/icons";
import AppMenu from './AppMenu';
import DropdownAvatar from './styled/DropdownAvatar';
import SkypeIcon from './icon/SkypeIcon';
import VKIcon from './icon/VKIcon';
import { styled } from '@mui/material/styles';


const navItems = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Projects',
    path: '/projects'
  },
  {
    text: 'Blog',
    path: '/blog'
  }
];
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

const MyLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
`;

const AppNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const list = () => (
          <Box
            role="presentation"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
          >
            <ListItem>
                <ListItemIcon>
                    <Avatar alt="me" src="src/assets/logo.png"/>
                </ListItemIcon>
                <ListItemText primary="Pages" />
            </ListItem>
            <Divider />
            <List>
                {navItems.map(item => (
                    <ListItem key={item.text} disablePadding>  
                      <AppNavLink to={item.path}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LinkRoundedIcon />
                            </ListItemIcon>
                            <ListItemText secondary={item.text} />
                        </ListItemButton>
                      </AppNavLink>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <Avatar alt="me" src="src/assets/me.png"/>
                </ListItemIcon>
                <ListItemText primary="Contacts" />
            </ListItem>
            <Divider />
            <List>
                {socials.map(item => (
                    <ListItem key={item.text} disablePadding>
                      <MyLink href={item.href} target="_blank">
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon children={item.icon} />
                            </ListItemIcon>
                            <InfoItemText secondary={item.text} />
                        </ListItemButton>
                      </MyLink>
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
            <AppNavLink to="/">
              <img src="./src/assets/fromzero.svg" alt="brand-logo" />
              {/* <img src="./src/assets/logo.png" alt="image-logo" /> */}
            </AppNavLink>
          </LogoBtn>
          <NavStack direction="row" gap="40px">
            {navItems.map((item) => (
              <NavBtn key={item.text} variant="text">
                <AppNavLink to={item.path}>
                  {item.text}
                </AppNavLink>
              </NavBtn>
            ))}
            <ContactBtn 
              id="basic-button"
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
      {list()}
    </MenuDrawer>
    </>
  );
}

export default AppNavbar;