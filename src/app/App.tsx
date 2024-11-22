import React from 'react';

const Layout = React.lazy(() => import('components/Layout/Layout'));
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('../pages/home/home'));
const WishList = React.lazy(() => import('../pages/wishList/wishList'));
const ProfileLayout = React.lazy(
  () => import('../components/ProfileLayout/ProfileLayout')
);
const Profile = React.lazy(() => import('pages/profile/profile'));
// import { Box } from "@mui/material";


import { Box,  } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import  cookies  from 'js-cookie';
const CategorizationLayout = React.lazy(
  () => import('components/Categorization/Categorization')
);
const Categorization = React.lazy(
  () => import('../pages/categorization/categorization')
);
const ShoppingCartLayout = React.lazy(
  () => import('../components/shoppingCartLayout/shoppingCartLayout')
);
const ShoppingCart = React.lazy(
  () => import('../pages/shoppingCart/shoppingCart')
);

import { HomeSkeletone } from './skeletones';

export const instance = axios.create({
  baseURL: "http://localhost:4005",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    authorization:cookies.get("baniToken")
  },
});
console.log(cookies.get("baniToken"))
instance.interceptors.request.use(
  function (config) {
    console.log("Request Config:", config);
    return config;
  },
  function (error) {
    console.log("Request Error:", error);

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {

    console.log("response", response);
    return response;
  },
  function (error) {
    console.log("responce error", error.code);
    console.log(error);
    if (error.code === "ERR_NETWORK")
      return toast.error("سرور قادر به پاسخگویی نیست");
    if (error.code >= 500) return toast.error("سرور خاموش است");
    return Promise.reject(error);

   

  }
);

const App: React.FC = () => {
  const loading = () => {
    return (

      <Box sx={{ width: "100%", textAlign: "center" }} fontSize={"2rem"}>

        ...Loading
      </Box>
    );
  };
  return (
    <Router>
      <Routes>
        {/* layout for home */}
        <Route
          path="/"
          element={
            <Suspense fallback={<HomeSkeletone/>}>
              <Layout />
            </Suspense>
          }
          children={
            <>
              <Route
                path="/"
                element={
                  <Suspense fallback={<HomeSkeletone/>}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/wishlist"
                element={
                  <Suspense fallback={loading()}>
                    <WishList />
                  </Suspense>
                }
              />
            </>

          }
        />
        {/* profile layout */}
        <Route
          path="/profile"
          element={
            <Suspense fallback={loading()}>
              <ProfileLayout />
            </Suspense>
          }
          children={
            <Route
              path="/profile"
              element={
                <Suspense fallback={loading()}>
                  <Profile />
                </Suspense>
              }
            />

          }
        />
        {/*shoppingcard lauout*/}
        <Route
          path="/shoppingcard"
          element={
            <Suspense fallback={loading()}>
              <ShoppingCartLayout />
            </Suspense>
          }
          children={
            <Route
              path="/shoppingcard"
              element={
                <Suspense fallback={loading()}>
                  <ShoppingCart />
                </Suspense>
              }
            />
          }
        />
        {/* CategorizationLayout */}
        <Route
          path="/categorization"
          element={
            <Suspense fallback={loading()}>
              <CategorizationLayout />
            </Suspense>
          }
          children={
            <Route
              path="/categorization"
              element={
                <Suspense fallback={loading()}>
                  <Categorization />
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
