import React from "react";

const Layout = React.lazy(() => import("components/Layout/Layout"));
import { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("../pages/home/home"));
const WishList = React.lazy(() => import("../pages/wishList/wishList"));
// import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Switch, useMediaQuery } from "@mui/material";
import { ImgMediaCard } from "pages/home/partials";
import axios from "axios"
import toast from "react-hot-toast";

export const instance=axios.create({
  baseURL: 'http://localhost:4005',
  headers: {
    "Content-Type":"application/json",
    "Accept":"application/json",
  
  }
})
instance.interceptors.request.use( function (config) {
    console.log('Request Config:', config)
    return config
},function(error){
  console.log('Request Error:', error)
  return Promise.reject(error);
})

instance.interceptors.response.use(function(response){
  console.log("response",response)
  return response
},function (error){
  console.log("responce error",error.code)
  if( error.code === "ERR_NETWORK") return toast.error("سرور قادر به پاسخگویی نیست")
    if( error.code >= 500) return toast.error("سرور خاموش است")
})

const App: React.FC = () => {
  const loading=()=>{
    return (
      <Box sx={{width:'100%',textAlign:'center'}} fontSize={"2rem"}>...Loading</Box>
    )
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={loading()}>
              <Layout />
            </Suspense>
          }
          children={
            <>
              <Route
                path="/"
                element={
                  <Suspense>
                    <Home />
                  </Suspense>
                }
              />
              <Route path="/wishlist" element={
                <Suspense fallback={loading()}>
                  <WishList/>
                </Suspense>
              }/>
            </>
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
