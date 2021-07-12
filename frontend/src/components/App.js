import React, { useState } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import {
  Switch as SwitchComponent,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Paper,
  Grid,
} from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/core/styles";

import AboutSite from "./AboutSite";
import AboutMe from "./aboutMe/AboutMe";
import Resume from "./Resume";
import Projects from "./Projects";
import { lightTheme, darkTheme } from "./Themes";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

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
                      <Tabs value={location.pathname}>
                        <Tab
                          label="About This Site"
                          value="/"
                          component={Link}
                          to="/"
                        />
                        <Tab
                          label="About Me"
                          value="/about"
                          component={Link}
                          to="/about"
                        />
                        <Tab
                          value="/resume"
                          label="Resume"
                          component={Link}
                          to="/resume"
                        />
                        <Tab
                          value="/projects"
                          label="Projects"
                          component={Link}
                          to="/projects"
                        />
                      </Tabs>
                      <SwitchComponent
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                      ></SwitchComponent>
                    </Toolbar>
                  </AppBar>

                  <Switch>
                    <Route path="/about" exact render={() => <AboutMe />} />
                    <Route path="/resume" exact render={() => <Resume />} />
                    <Route path="/projects" exact render={() => <Projects />} />
                    <Route path="/" render={() => <AboutSite />} />
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
