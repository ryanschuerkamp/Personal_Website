import React, { useState } from "react";
import {
  Grid,
  Paper,
  createTheme,
  Switch,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
} from "@material-ui/core/";
import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";

import AboutSite from "./AboutSite";
import Sidebar from "./Sidebar";

export default function App() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleSelectedTabChange = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  };

  let darkTheme = createTheme({
    palette: {
      primary: {
        main: "#185adb",
        light: "#6786ff",
        dark: "#0032a8",
      },
      secondary: {
        main: "#fdd835",
        light: "#ffff6b",
        dark: "#c6a700",
      },
      type: "dark",
    },
  });

  darkTheme = responsiveFontSizes(darkTheme);

  let lightTheme = createTheme({
    palette: {
      primary: {
        main: "#185adb",
        light: "#6786ff",
        dark: "#0032a8",
      },
      secondary: {
        main: "#fdd835",
        light: "#ffff6b",
        dark: "#c6a700",
      },
    },
  });

  lightTheme = responsiveFontSizes(lightTheme);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper style={{ height: "100vh" }}>
        <AppBar position="static">
          <Toolbar>
            <Tabs value={selectedTab} onChange={handleSelectedTabChange}>
              <Tab label="About This Site" />
              <Tab label="About Me" />
              <Tab label="Resume" />
              <Tab label="Projects" />
            </Tabs>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            ></Switch>
          </Toolbar>
        </AppBar>
        <Grid container spacing={4}>
          <Grid item xs={false} sm={5}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={7}>
            {selectedTab === 0 && <AboutSite />}
            {selectedTab === 1 && <div>Put about page here</div>}
            {selectedTab === 2 && <div>Put resume page here</div>}
            {selectedTab === 3 && <div>Put projects page here</div>}
          </Grid>
        </Grid>
      </Paper>

      {/* Card section
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Content />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </Paper> */}
    </ThemeProvider>
  );
}
