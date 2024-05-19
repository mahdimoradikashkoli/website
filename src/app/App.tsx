import React from "react";

const Layout = React.lazy(() => import("components/Layout/Layout"));
import { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("../pages/home/home"));
// import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, useMediaQuery } from "@mui/material";
import { ImgMediaCard } from "pages/home/partials";

const App: React.FC = () => {

  return (
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
                  <Home />
                </Suspense>
              }
            />
          }
        />
        <Route
          path="/"
          element={
            <Suspense>
              <Layout />
            </Suspense>
          }
          children={
            <Route
              path="/card"
              element={
                <Suspense>
                  <ImgMediaCard />
                </Suspense>
              }
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
