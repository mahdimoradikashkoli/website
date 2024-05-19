// import { ToggleThem } from "@ui/*"
// import {ToggleThem} from "modules/helpers/ui/component/toggleThem"
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import arrowLeftKey from "/icons/left-arrow-svgrepo-com.svg";
import fireIcon from "/icons/fire.svg";
import {
  AboutUs,
  BestSellers,
  ContactUs,
  CountDownTimer,
  DownloadApplication,
  Grouping,
  ImgMediaCard,
  MaySlider,
  SelectedBrands,
  Services,
  Suggestion,
  TheNewest,
} from "./partials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { LabelBottomNavigation } from "components";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Home: React.FC = () => {
  const [topValue,setTopValue]=useState<string>("1.5rem")
  const removeGifBanner = () => {
    document.getElementById("banner")!.style.display = "none";
    if( document.getElementById("banner")!.style.display === "none"){
      setTopValue("0")
    }else{
      setTopValue("1.6rem")
    }
    // console.log(topValue,marginValue);
  };
 
  return (
    <>
      <Box
        id="banner"
        sx={{
          position: "sticky",
          zIndex: "20",
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        <img
          width={"100%"}
          src="https://www.banimode.com/img/cms/030229/1716020397.gif"
          alt="promition banner"
        />
        <ClearIcon
          onClick={removeGifBanner}
          style={{
            position: "absolute",
            zIndex: "20",
            left: "1rem",
            top: "auto",
            bottom: "auto",
            color: "white",
          }}
        />
      </Box>

      {/* هدر سایت */}
      <Box
        component={"header"}
        sx={{
          width: "100%",
          zIndex: "10",
          backgroundColor: "rgb(255,255,255 )",
          position: "sticky",
          top: topValue,
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
              gap: ".5rem",
            }}
            component={"ul"}
          >
            <Box component={"li"}>
              <FavoriteBorderIcon style={{ color: "rgb(80,80,80)" }} />
            </Box>
            <Box component={"li"}>
              <SearchIcon style={{ color: "rgb(80,80,80)" }} />
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

      {/* اسلایدر اول صفحه */}
      <Box sx={{}}>{<MaySlider />}</Box>
      <Container style={{ position: "relative", marginTop: ".8rem" }}>
        {/* تایمر شمارش معکوس */}
        {<CountDownTimer />}
      </Container>
      {/* نمایش محصولات شگفت انگیز به صورت اسلایدر */}
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
                maxWidth: "8.25rem",
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
              <Button variant="text">مشاهده همه مصحولات </Button>
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
      {/* عکس کارت هدیه */}
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
        {/* دسته بندی ها */}

        <Box sx={{ marginTop: "1rem" }}>
          <Box>
            <Container>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
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
            </Container>
            {<Grouping />}
          </Box>
        </Box>

        {/* پیشنهاد پوشاک ها عکس به صورت اسلایدر */}
        <Box sx={{ marginTop: "1.5rem" }}>{<Suggestion />}</Box>
        {/* پر فروش ترین ها */}
        <Box sx={{ marginTop: "1.5rem", backgroundColor: "white" }}>
          <Container>
            <Box>
              <Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box component={"img"} src={fireIcon} alt="fire icon"></Box>
                    <Typography
                      component={"div"}
                      fontWeight={"600"}
                      fontSize={"1rem"}
                      fontFamily={"parastoo"}
                    >
                      پرفروش ترین ها
                    </Typography>
                  </Box>
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
              </Box>
            </Box>
          </Container>
          <BestSellers />
        </Box>
        {/* برند های برگزیده */}
        <Box sx={{ marginTop: "1.4rem" }}>
          <Container>
            <Box>
              <Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      component={"div"}
                      fontWeight={"600"}
                      fontSize={"1rem"}
                      fontFamily={"parastoo"}
                    >
                      برند های برگزیده
                    </Typography>
                  </Box>
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
              </Box>
            </Box>
          </Container>
          <SelectedBrands />
        </Box>
        {/* جدید ترینِ بانی مد */}
        <Box sx={{ marginTop: "1.4rem" }}>
          <Container>
            <Box>
              <Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      component={"div"}
                      fontWeight={"600"}
                      fontSize={"1rem"}
                      fontFamily={"abasan"}
                    >
                      جدید ترینِ بانی مد
                    </Typography>
                  </Box>
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
              </Box>
            </Box>
          </Container>
          <TheNewest />
        </Box>
        {/* فوتر سایت */}

        <Box
          sx={{
            backgroundColor: "white",
            marginTop: "1.5rem",
            padding: ".7rem 0",
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography fontWeight={"bold"} fontSize={".9rem"}>
                میزبان صدای گرمتان هستیم
              </Typography>
              <Typography
                component={"span"}
                fontSize={".65rem"}
                color={"rgb(70,70,70)"}
                fontStyle={"italic"}
              >
                7روز هفته 24 ساعته
              </Typography>
            </Box>
            <ContactUs />
            <DownloadApplication />
            <Services />
          </Container>
        </Box>
        {/* درباره ما */}
        <AboutUs />
        {/* نوار پیمایش پایین صفحه */}
        <LabelBottomNavigation initialValue="خانه" />
      </Box>
    </>
  );
};
export default Home;
