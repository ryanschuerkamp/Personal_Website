import React, { useState } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Paper,
  Grid,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
  Tooltip,
} from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/core/styles";
import { Brightness4, Brightness7, Menu as MenuIcon } from "@material-ui/icons";

import Home from "./Home";
import Personal from "./personal/Personal";
import CV from "./cv/CV";
import Papers from "./Papers";
import { lightTheme, darkTheme } from "./Themes";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const modeSwitchTooltip = darkMode
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";

  return (
    <Grid container>
      <Paper>
        <BrowserRouter>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Route
              path="/"
              render={({ location }) => (
                <>
                  <AppBar position="static">
                    <Toolbar>
                      <Hidden smDown>
                        <Tabs
                          value={location.pathname}
                          variant="standard"
                          centered
                          aria-label="Navigation Tabs"
                          component={Grid}
                          container
                          justifyContent="center"
                          spacing={2}
                          xs={12}
                          sm={12}
                          md={0}
                        >
                          <Tab
                            label="Ryan Schuerkamp"
                            value="/"
                            component={Link}
                            style={{ marginRight: "auto" }}
                            to="/"
                          />
                          <Tab
                            value="/cv"
                            label="CV"
                            component={Link}
                            to="/cv"
                          />
                          <Tab
                            value="/papers"
                            label="Papers"
                            component={Link}
                            to="/papers"
                          />
                          <Tab
                            label="Personal"
                            value="/personal"
                            component={Link}
                            to="/personal"
                          />
                        </Tabs>
                      </Hidden>
                      <Hidden mdUp>
                        <IconButton
                          color="inherit"
                          aria-label="menu"
                          edge="end"
                          onClick={handleMenuOpen}
                        >
                          <MenuIcon />
                        </IconButton>
                      </Hidden>
                      <IconButton
                        color="secondary"
                        onClick={() => setDarkMode(!darkMode)}
                        style={{ marginLeft: "auto" }}
                      >
                        <Tooltip title={modeSwitchTooltip} arrow>
                          {darkMode ? <Brightness7 /> : <Brightness4 />}
                        </Tooltip>
                      </IconButton>
                    </Toolbar>
                  </AppBar>

                  <Menu
                    anchorEl={menuAnchorEl}
                    keepMounted
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                      Ryan Schuerkamp
                    </MenuItem>
                    <Hidden mdUp>
                      <MenuItem
                        component={Link}
                        to="/cv"
                        onClick={handleMenuClose}
                      >
                        CV
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        to="/papers"
                        onClick={handleMenuClose}
                      >
                        Papers
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        to="/personal"
                        onClick={handleMenuClose}
                      >
                        Personal
                      </MenuItem>
                    </Hidden>
                  </Menu>

                  <Switch>
                    <Route path="/cv" exact component={CV} />
                    <Route path="/papers" exact component={Papers} />
                    <Route path="/personal" exact component={Personal} />
                    <Route path="/" exact component={Home} />
                  </Switch>
                </>
              )}
            />
          </ThemeProvider>
        </BrowserRouter>
      </Paper>
    </Grid>
  );
}
