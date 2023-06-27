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
} from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/core/styles";
import { Brightness4, Brightness7 } from "@material-ui/icons";

import Home from "./Home";
import AboutMe from "./aboutMe/AboutMe";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";
import { lightTheme, darkTheme } from "./Themes";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

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
                    <Grid item container>
                      <Grid item xs={0} lg={1} />
                      <Grid item xs={12} lg={11}>
                        <Toolbar>
                          <Tabs value={location.pathname}>
                            <Tab
                              label="Ryan Schuerkamp"
                              value="/"
                              component={Link}
                              style={{ marginRight: "auto" }}
                              to="/"
                            />
                            <Tab
                              value="/resume"
                              label="CV"
                              component={Link}
                              to="/resume"
                            />
                            <Tab
                              label="Personal"
                              value="/about"
                              component={Link}
                              to="/about"
                            />
                            <Tab
                              value="/projects"
                              label="Publications"
                              component={Link}
                              to="/projects"
                            />
                          </Tabs>
                          <IconButton
                            color="secondary"
                            // style={{ marginLeft: "auto" }}
                            onClick={() => setDarkMode(!darkMode)}
                          >
                            {darkMode ? <Brightness7 /> : <Brightness4 />}
                          </IconButton>
                        </Toolbar>
                      </Grid>
                      <Grid item xs={0} lg={1} />
                    </Grid>
                  </AppBar>

                  <Switch>
                    <Route path="/about" exact render={() => <AboutMe />} />
                    <Route path="/resume" exact render={() => <Resume />} />
                    <Route path="/projects" exact render={() => <Projects />} />
                    <Route path="/" render={() => <Home />} />
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
