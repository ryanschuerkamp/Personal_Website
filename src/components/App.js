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

import AboutSite from "./AboutSite";
import AboutMe from "./aboutMe/AboutMe";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";
import { lightTheme, darkTheme } from "./themes";

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
                    <Toolbar>
                      <Tabs value={location.pathname}>
                        <Tab label="Home" value="/" component={Link} to="/" />
                        <Tab
                          label="About"
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
                      <IconButton
                        color="secondary"
                        onClick={() => setDarkMode(!darkMode)}
                      >
                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                      </IconButton>
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
