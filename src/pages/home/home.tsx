// import { ToggleThem } from "@ui/*"
// import {ToggleThem} from "modules/helpers/ui/component/toggleThem"
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import arrowLeftKey from "/icons/left-arrow-svgrepo-com.svg";
import { CountDownTimer, Grouping, ImgMediaCard, MaySlider } from "./partials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
type homePageType = {
  children?: React.ReactNode;
};
const Home: React.FC<homePageType> = ({ children }) => {
  return (
    <>
      <Container sx={{ position: "relative" }}>
        <Box
          component={"header"}
          sx={{
            width: "100%",
            position: "fixed",
            zIndex: "10",
            backgroundColor: "rgb(255,255,255 )",
            top: "0",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".7rem 1rem",
          }}
        >
          <Box component={"nav"}>
            <Box
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              component={"ul"}
            >
              <Box component={"li"}>
                <img
                  style={{ width: "1.71rem", height: "1.42rem" }}
                  src="/icons/favorit.png"
                  alt="favorit icon"
                />
              </Box>
              <Box component={"li"}>
                <img
                  style={{ width: "3rem", height: "2rem" }}
                  src="/icons/searchIcon.png"
                  alt="search icon"
                />
              </Box>
            </Box>
          </Box>
          <Box component={"a"}>
            <img
              style={{
                width: "8rem",
                height: "1.5rem",
              }}
              loading="lazy"
              src="/icons/logo.png"
              alt="logo"
            />
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          marginTop: "2.375rem",
        }}
      >
        {<MaySlider />}
      </Box>
      <Container style={{ position: "relative", marginTop: ".8rem" }}>
        {<CountDownTimer />}
        <Box sx={{ marginTop: ".8rem" }}>
          <Swiper
            centeredSlides={true}
            direction="horizontal"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            spaceBetween={3}
            slidesPerView={2}
            className="mySwiper"
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              {
                <ImgMediaCard
                  altForImage="ادوپریفرم زنانه نایس"
                  imageAddress="https://www.banimode.com/1557544-home_default/163900.jpg"
                  description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                  title1="Nice puppet"
                  price={"505,000"}
                  offer="389,000تومان"
                  onClick={() => {}}
                  key=""
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                <ImgMediaCard
                  percent="10%"
                  available="تعداد باقی مانده دو عدد"
                  altForImage="ادیپریفرم زنانه نایس"
                  imageAddress="https://www.banimode.com/1550038-home_default/154858.jpg"
                  description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                  title1="Nice puppet"
                  price={"505,000"}
                  offer="389,000تومان"
                  onClick={() => {}}
                  key=""
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                <ImgMediaCard
                  altForImage="ادیچریفرم زنانه نایس"
                  imageAddress="https://www.banimode.com/1683226-home_default/188200.jpg"
                  description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                  title1="Nice puppet"
                  price={"505,000"}
                  offer="389,000تومان"
                  onClick={() => {}}
                  key=""
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                <ImgMediaCard
                  percent="80%"
                  available="تعداد باقی مانده یک عدد"
                  altForImage="عکس محصول"
                  imageAddress="https://www.banimode.com/1012052-home_default/94138.jpg"
                  description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                  title1="Nice puppet"
                  price={"1,000,000"}
                  offer="200,000تومان"
                  onClick={() => {}}
                  key=""
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                <ImgMediaCard
                  altForImage="عکس محصول"
                  imageAddress="https://www.banimode.com/1683226-home_default/188200.jpg"
                  description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                  title1="Nice puppet"
                  price={"505,000"}
                  offer="389,000تومان"
                  onClick={() => {}}
                  key=""
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                <ImgMediaCard
                  altForImage="عکس محصول"
                  imageAddress="https://www.banimode.com/1683226-home_default/188200.jpg"
                  description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                  title1="Nice puppet"
                  price={"505,000"}
                  offer="389,000تومان"
                  onClick={() => {}}
                  key=""
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                <ImgMediaCard
                  altForImage="عکس محصول"
                  imageAddress="https://www.banimode.com/1683226-home_default/188200.jpg"
                  description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                  title1="Nice puppet"
                  price={"505,000"}
                  offer="389,000تومان"
                  onClick={() => {}}
                  key=""
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  maxWidth: 345,
                  height: 275,
                  textAlign: "center",
                  display: "flex",
                  alignItems: "cenetr",
                  justifyContent: "center",
                  padding: "1rem",
                  backgroundColor: "#bbdddd",
                  borderRadius: "1rem",
                }}
              >
                <Button variant="outlined">مشاهده همه مصحولات </Button>
              </Box>
            </SwiperSlide>
          </Swiper>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                borderRadius: ".3rem",
                padding: ".5rem",
                width: "fit-content",
                backgroundColor: "rgba(241,100,34,.3)",
                cursor: "pointer",
              }}
              component={"a"}
            >
              <Typography color={"rgb(241,100,34)"} component={"span"}>
                مشاهده همه شگفت انگیز های روز
              </Typography>
              <Box
                sx={{ width: "1rem", height: "1rem" }}
                component={"img"}
                src={arrowLeftKey}
                alt="left arrow"
              ></Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "rgb(245, 245, 245)" }}>
        <Box sx={{ marginTop: "1.5rem" }}>
          <Box
            style={{ cursor: "pointer" }}
            maxWidth="100%"
            component={"img"}
            src="https://www.banimode.com/img/cms/030119/1712471931.jpg"
            alt="promotional banner"
          ></Box>
        </Box>
        <Container style={{ marginTop: "1rem" }}>
          <Box component={"main"}>
            <Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom:"1rem"
                }}
              >
                <Typography
                  component={"div"}
                  fontWeight={"600"}
                  fontSize={"1rem"}
                  fontFamily={"parastoo"}
                >
                  دسته بندی ها
                </Typography>
                <Button
                  variant="text"
                  style={{
                    color: "rgb(241, 100, 34)",
                    fontWeight: "500",
                    fontSize: ".9rem",
                  }}
                >
                  مشاهده همه
                  {
                    <ArrowBackIosIcon
                      style={{
                        color: "rgb(241, 100, 34)",
                        width: "1rem",
                        height: "1rem",
                      }}
                    />
                  }
                </Button>
              </Box>
              {<Grouping />}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Home;
