import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { FooterComponent } from "components/footerComponent";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import style from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <Box className={style.footer} sx={{display:'none'}}>
      <Container>
        <Divider style={{ margin: "2rem 0 2rem 0" }} />
        <Box sx={{ display: "flex", maxWidth: "100%", gap: "1rem" }}>
          <Box sx={{ display: "flex", width: "75%", gap: ".1rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "10rem",
                height: "fit-content",
                position: "relative",
              }}
            >
              <Typography
                variant="h6"
                component={"div"}
                color={"rgb(100,100,100)"}
                position={"relative"}
                fontSize={"1rem"}
                style={{ top: "0", marginBottom: "1rem" }}
              >
                خرید از بانی مد
              </Typography>
              <FooterComponent
                productSeggestion1="بانی مد"
                href1=""
                productSeggestion2="لباس زنانه"
                href2=""
                productSeggestion3="لباس بچه گانه"
                href3=""
                productSeggestion4="لوازم آرایشی"
                href4=""
                productSeggestion5="لباس مردانه"
                href5=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "10rem",
                height: "fit-content",
                position: "relative",
              }}
            >
              <Typography
                variant="h6"
                component={"div"}
                color={"rgb(100,100,100)"}
                fontSize={"1rem"}
                position={"relative"}
                style={{ top: "0", marginBottom: "1rem" }}
              >
                خدمات مشتریان
              </Typography>
              <FooterComponent
                productSeggestion1="پرسش های متداول"
                href1=""
                productSeggestion2="شرایط بازگشت"
                href2=""
                productSeggestion3="راهنمای خرید"
                href3=""
                productSeggestion4="فروش B2B"
                href4=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "10rem",
                height: "fit-content",
                position: "relative",
                top: "0",
              }}
            >
              <Typography
                variant="h6"
                component={"div"}
                color={"rgb(100,100,100)"}
                fontSize={"1rem"}
                position={"relative"}
                style={{ top: "0", marginBottom: "1rem" }}
              >
                اطلاعات بانی مد
              </Typography>
              <FooterComponent
                productSeggestion1="درباره ما "
                href1=""
                productSeggestion2="قوانین و مقررات"
                href2=""
                productSeggestion3="تماس با ما"
                href3=""
                productSeggestion4="فرصت های شغلی"
                href4=""
                productSeggestion5="همکاری تجاری"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "15rem",
                height: "fit-content",
                position: "relative",
                top: "0",
              }}
            >
              <Typography
                variant="h6"
                component={"div"}
                color={"rgb(100,100,100)"}
                fontSize={"1rem"}
                position={"relative"}
                style={{ top: "0", marginBottom: "1rem" }}
              >
                منتظر شنیدن صدای گرمتان هستیم
              </Typography>
              <Typography component={"span"} color={"rgb(100,100,100)"}>
                7روز هفته - 24 ساعته
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  marginTop: "1rem",
                }}
              >
                <Typography component={"span"} style={{ fontSize: "1.4rem" }}>
                  تلفن:
                </Typography>
                <Typography
                  sx={{ "&:hover": { color: "green", cursor: "pointer" } }}
                  fontSize="1rem"
                >
                  10003245
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  marginTop: ".5rem",
                }}
              >
                <Typography component={"span"} style={{ fontSize: "1.4rem" }}>
                  ایمیل:
                </Typography>
                <Typography
                  sx={{ "&:hover": { color: "green", cursor: "pointer" } }}
                  fontSize="1rem"
                >
                  mahdimoradi@gmail.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  marginTop: ".5rem",
                }}
              >
                <Typography component={"span"} style={{ fontSize: "1.4rem" }}>
                  پیامک:
                </Typography>
                <Typography
                  sx={{ "&:hover": { color: "green", cursor: "pointer" } }}
                  fontSize="1rem"
                >
                  103442
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "25%" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
            >
              <Button
                style={{
                  backgroundColor: "rgb(25, 177, 106) ",
                  padding: ".8rem .9rem",
                  color: "white",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                دریافت اپلیکیشن از
                <Box
                  style={{
                    mixBlendMode: "color-burn",
                  }}
                  width={"3rem"}
                  height={"1.5rem"}
                  component={"img"}
                  src="/icons/images.png"
                  alt="کافه بازار"
                ></Box>
              </Button>
              <Button
                style={{
                  outline: ".02rem solid #1ac977",
                  padding: ".8rem .9rem",
                  color: "rgb(25, 177, 106) ",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                <PhoneAndroidIcon style={{ color: "rgb(25, 177, 106) " }} />
                دانلود اپلیکیشن
              </Button>
              <Box
                sx={{
                  marginTop: ".5rem",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                <InstagramIcon style={{ cursor: "pointer" }} />
                <TelegramIcon style={{ cursor: "pointer" }} />
                <TwitterIcon style={{ cursor: "pointer" }} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider style={{ margin: "2rem 0 2rem 0" }} />
      </Container>
      <Box
        className={style.copyRight}
        sx={{
          position: "relative",
          left: "0",
          right: "0",
          bottom: "0",
          height: "5rem",
          backgroundColor: "rgb(230,230,230)",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: ".5rem",
              gap: ".3rem",
            }}
          >
            <CopyrightIcon />
            <Typography>کلیه حقوق این وبسایت مال بانی مد است.</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
