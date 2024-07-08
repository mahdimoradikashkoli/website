import { Box, Button, Container, Typography } from "@mui/material";
import { Footer, LabelBottomNavigation, Navigation } from "components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cookies from "js-cookie";
import { Login } from "pages/login";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import { Register } from "pages/register";
import { useNavigate } from "react-router-dom";
import style from "./wishList.module.css";
import { HeaderResponsive } from "pages/home/partials";
import { TermsAndRules } from "pages/TermsAndRules";

// تعریف انیمیشن برای حرکت از پایین به بالا
const slideIn = keyframes`
  from {
    top: 100%;
  }
  to {
    top: 0;
  }
`;

const WishList = () => {
  const token = cookies.get("baniToken");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [termsAndrules, setTermsAndrules] = useState(false);

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
    setTermsAndrules(false);
  };

  const handleShowWishList = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
    setTermsAndrules(false);
  };
  const showRegisterFormFunction = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
    setTermsAndrules(false);
  };
  const handleShowTermsAndRules = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
    setTermsAndrules(true);
  };
  const navigate = useNavigate();

  return (
    <>
      {/* wishlist */}

      {termsAndrules ? (
        <Box
          sx={{
            display: termsAndrules ? "block" : "none",
            position: "absolute",
            top: termsAndrules ? "0" : "100%",
            left: "0",
            right: "0",
            bottom: "0",
            animation: termsAndrules ? `${slideIn} 2s forwards` : "",
            zIndex: "30",
          }}
        >
          <TermsAndRules
            handleBackAddress={() => {
              setTermsAndrules(false);
            }}
          />
        </Box>
      ) : (
        <Box
          className={style.wishlist}
          sx={{
            position: "relative",
            display: showLoginForm || showRegisterForm ? "none" : "block",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
          }}
        >
          <Box className={style.navigation}>
            <Navigation
              backAddress={() => {
                navigate("/");
              }}
              titleOfPage="لیست علاقه مندی ها"
            />
          </Box>

          {/* نمایش در صفحات بیشتر از 800 پیکسل */}
          <HeaderResponsive className={style.headerResponsive} />
          <Box sx={{ width: "100%", height: "100%" }}>
            {token ? (
              <Container className={style.container}>
                <Box
                  className={style.productWishList}
                  sx={{
                    width: "100%",
                    height: "33rem",
                    paddingBottom: "3rem",
                    display: "inline-block",
                    overflowY: "auto",
                  }}
                >
                  <Typography
                    style={{
                      textAlign: "center",
                      alignContent: "center",
                      fontSize: "1.5rem",
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    لیست علاقه مندی ها خالی می باشد
                  </Typography>
                </Box>
              </Container>
            ) : (
              <Container>
                <Box
                  sx={{
                    width: "100%",
                    height: "37rem",
                    overflowY: "auto",
                    paddingBottom: "2rem",
                    alignContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <FavoriteBorderIcon
                      style={{ width: "7rem", height: "7rem", color: "green" }}
                    />
                    <Typography>
                      برای نمایش لیست محصولات علاقه مندی به حساب کاربری خود وارد
                      شوید.
                    </Typography>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "green",
                        width: "100%",
                        padding: ".7rem",
                      }}
                      onClick={handleShowLoginForm}
                    >
                      ورود / ثبت نام
                    </Button>
                  </Box>
                </Box>
              </Container>
            )}
          </Box>
          <LabelBottomNavigation
            className={style.bottomNavigation}
            initialValue=""
          />
          {/* فوتر سایت */}
          <Footer />
        </Box>
      )}
      {/* login */}
      {token ? null : (
        <Box
          sx={{
            display: showLoginForm ? "block" : "none",
            position: "absolute",
            zIndex: "20",
            top: showLoginForm ? "0" : "100%",
            bottom: "0",
            right: "0",
            left: "0",
            backgroundColor: "rgb(255,255,255)",
            animation: showLoginForm ? `${slideIn} 2s forwards` : ``,
          }}
        >
          <Login
            handleOnClick={handleShowWishList}
            handleShowRegisterForm={showRegisterFormFunction}
            showWishList={handleShowWishList}
          />
        </Box>
      )}
      {/* register */}
      {token ? null : (
        <Box
          sx={{
            display: showRegisterForm ? "block" : "none",
            position: "absolute",
            zIndex: "20",
            top: showRegisterForm ? "0" : "100%",
            bottom: "0",
            right: "0",
            left: "0",
            backgroundColor: "rgb(255,255,255)",
            animation: showRegisterForm ? `${slideIn} 2s forwards` : ``,
          }}
        >
          <Register
            handleOnClick={handleShowWishList}
            showLoginForm={handleShowLoginForm}
            handleShowTermsAndRules={handleShowTermsAndRules}
          />
        </Box>
      )}
      {/* نمایش قوانین و شرایط */}
    </>
  );
};

export default WishList;
