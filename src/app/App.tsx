import React from "react";

const Layout = React.lazy(() => import("components/Layout/Layout"));
import { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("../pages/home/home"));
// import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, useMediaQuery } from "@mui/material";

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode);
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Layout />
              </Suspense>
            }
            children={
              <Route
                path="/"
                element={
                  <Suspense>
                    <Home
                      children={<Switch onClick={() => setMode(!mode)} />}
                    />
                  </Suspense>
                }
              />
            }
          />
          {/* <Route
          path="/"
          element={
            <Suspense >
              <Layout />
            </Suspense>
          }
          children={
          <Route
              path="/home"
              element={
                <Suspense >
                  <Home />
                </Suspense>
              }
            />
          }
        /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
