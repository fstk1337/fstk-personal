import { AppBar, Avatar, Container, MenuIcon } from "../mui";
import { LogoBtn, LogoTypography, MenuBtn, MyToolbar, NavBox, NavBtn, NickTypography } from "../mui/styled";

const navItems = ['Blog', 'Projects', 'Contact'];

const AppNavbar = () => {
    return (
      <AppBar position="static">
        <Container maxWidth="lg">
          <MyToolbar disableGutters variant="regular">
            <MenuBtn
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </MenuBtn>
            <LogoBtn>
              <img src="src/assets/logo.png" alt="logo" />
              <LogoTypography variant="h6">ggy beam</LogoTypography>
            </LogoBtn>
            <NavBox>
              {navItems.map((item) => (
                <NavBtn
                  variant="text"
                  key={item}
                >
                  {item}
                </NavBtn>
              ))}
            </NavBox>
            <NickTypography variant="h6">Vitali Shvaichuk</NickTypography>
            <Avatar alt="me" src="src/assets/me.png"/>
          </MyToolbar>
        </Container>
      </AppBar>
    );
}

export default AppNavbar;