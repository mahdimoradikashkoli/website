import style from "./home.module.css";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import arrowLeftKey from "/icons/left-arrow-svgrepo-com.svg";
import fireIcon from "/icons/fire.svg";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

import {
  AboutUs,
  BestSellers,
  ContactUs,
  CountDownTimer,
  DownloadApplication,
  Grouping,
  HeaderResponsive,
  ImgMediaCard,
  MaySlider,
  SelectedBrands,
  Services,
  SlideBottomOfNavigation,
  Suggestion,
  TheNewest,
} from "./partials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  FooterComponent,
  LabelBottomNavigation,
  Product,
  SearchComponent,
} from "components";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [topValue, setTopValue] = useState<string>("2.5rem");
  const [userEmail, setEmail] = useState<string>();
  console.log(userEmail);
  const handleGetUserEmail = () => {
    if (!userEmail) return alert("ایمیل خالی است");
  };
  const removeGifBanner = () => {
    document.getElementById("banner")!.style.display = "none";
    if (document.getElementById("banner")!.style.display === "none") {
      setTopValue("0");
    } else {
      setTopValue("2.5rem");
    }
    // console.log(topValue,marginValue);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const handleShowSearchNavbar = () => {
    const searchNavbar = document.getElementById("search");

    searchNavbar!.style.display === "block"
      ? (searchNavbar!.style.display = "none")
      : (searchNavbar!.style.display = "block");
  };
  const handlehideSearchInput = () => {
    const searchNavbar = document.getElementById("search");
    searchNavbar!.style.display = "none";
  };
  const navigate=useNavigate()
  return (
    <>
      {/* تبلیغ چسبیده به بالای صفحه */}
      <Box
        id="banner"
        className={style.banner}
        sx={{
          position: "sticky",
          zIndex: "20",
          top: "0",
          left: "0",
          right: "0",
          width: "100%",
          height: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className={style.gif}
          style={{
            width: "100%",
            height: "40px",
          }}
          src="public/imageForHome/gif/1716020397.gif"
          alt="promition banner"
        />

        <ClearIcon
          className={style.clearIcon}
          onClick={removeGifBanner}
          style={{
            position: "absolute",
            zIndex: "21",
            left: "1rem",
            color: "white",
            cursor: "pointer",
          }}
        />
      </Box>

      {/* هدر سایت */}
      <Box
        className={style.header1}
        sx={{
          width: "100%",
          zIndex: "21",
          backgroundColor: "rgb(255,255,255 )",
          position: "sticky",
          top: topValue,
        }}
      >
        <Box
          component={"header"}
          sx={{
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
                <FavoriteBorderIcon
                  onClick={() => {
                    navigate("/wishlist");
                  }}
                  style={{ color: "rgb(80,80,80)" }}
                />
              </Box>
              <Box component={"li"}>
                <SearchIcon
                  onClick={handleShowSearchNavbar}
                  style={{ color: "rgb(80,80,80)" }}
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
        <SearchComponent onClick={handlehideSearchInput} />
      </Box>
      {/* هدر رسپانسیو شده برای صفحات بزرگتر */}
      <HeaderResponsive className={style.header2} />

      {/* اسلایدر اول صفحه */}
      <Box className={style.slider}>
        <MaySlider />
      </Box>
      {/* اسلاید پایین نوار پیمایش برای صفحات بزرگتر از 800 پیکسل */}
      <Container sx={{ display: "none" }} className={style.sliderAfter800px}>
        <SlideBottomOfNavigation />
        {/* محصولات پیشنهادی پایین اسلایدر */}
        <Box
          sx={{
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Product
            alt="product image"
            href=""
            src="public/imageForHome/image1/tishert.png"
            unicId=""
          />
          <Product
            alt="product image"
            href=""
            src="public/imageForHome/image1/shalvar.png"
            unicId=""
          />
          <Product
            alt="product image"
            href=""
            src="public/imageForHome/image1/lavazem.png"
            unicId=""
          />
          <Product
            alt="product image"
            href=""
            src="public/imageForHome/image1/cart.png"
            unicId=""
          />
          <Product
            alt="product image"
            href=""
            src="public/imageForHome/image1/accesory.png"
            unicId=""
          />
          <Product
            alt="product image"
            href=""
            src="public/imageForHome/image1/atr.png"
            unicId=""
          />
        </Box>
      </Container>
      <Container style={{ position: "relative", marginTop: ".8rem" }}>
        {/* تایمر شمارش معکوس */}
        {<CountDownTimer />}
      </Container>
      {/* نمایش محصولات شگفت انگیز به صورت اسلایدر */}
      <Box sx={{ marginTop: ".8rem" }}>
        <Swiper
          direction="horizontal"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={2}
          slidesPerView={2}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            380: {
              slidesPerView: 2.5,
            },
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            687: {
              slidesPerView: 4.5,
            },
            1024: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            {
              <ImgMediaCard
                altForImage="ادوپریفرم زنانه نایس"
                imageAddress="public/imageForHome/image2/img2.png"
                description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                title1="Nice puppet"
                price={"505,000"}
                offer="389,000"
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
                imageAddress="public/imageForHome/image2/img1.png"
                description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                title1="Nice puppet"
                price={"505,000"}
                offer="389,000"
                onClick={() => {}}
                key=""
              />
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              <ImgMediaCard
                altForImage="ادیچریفرم زنانه نایس"
                imageAddress="public/imageForHome/image2/img2.png"
                description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                title1="Nice puppet"
                price={"505,000"}
                offer="389,000"
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
                imageAddress="public/imageForHome/image2/img1.png"
                description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                title1="Nice puppet"
                price={"1,000,000"}
                offer="200,000"
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
                offer="389,000"
                onClick={() => {}}
                key=""
              />
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              <ImgMediaCard
                altForImage="عکس محصول"
                imageAddress="public/imageForHome/image2/img.png"
                description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                title1="Nice puppet"
                price={"505,000"}
                offer="389,000"
                onClick={() => {}}
                key=""
              />
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              <ImgMediaCard
                altForImage="عکس محصول"
                imageAddress="public/imageForHome/image2/img4.png"
                description=" ادوپریفرم زنانه نایس پاپت
          nice puppet مدل  rose حجم 100 میلی لیتر"
                title1="Nice puppet"
                price={"505,000"}
                offer="389,000"
                onClick={() => {}}
                key=""
              />
            }
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                maxWidth: "8.25rem",
                height: "16rem",
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

      <Box sx={{ backgroundColor: "rgb(245, 245, 245)", marginBottom: "4rem" }}>
        {/* عکس کارت هدیه */}
        <Box
          sx={{
            width: "100%",
            margin: "1.4rem auto 0rem auto",
            textAlign: "center",
          }}
        >
          <Box
            style={{ cursor: "pointer" }}
            maxWidth="100%"
            component={"img"}
            src="public/imageForHome/cartgift.png"
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
        <Box sx={{ marginTop: "1.5rem", textAlign: "center" }}>
          {<Suggestion />}
        </Box>
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
          className={style.footer1}
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
                fontSize={matches ? ".9rem" : ".65rem"}
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
        <Container className={style.aboutUs}>
          <AboutUs />
        </Container>
      </Box>
      {/* نوار پیمایش پایین صفحه */}
      <LabelBottomNavigation
        className={style.bottomNavigation}
        initialValue="خانه"
      />
      {/* وارد کردن آدرس ایمیل*/}
      <Container style={{ display: "none" }} className={style.footerAfter800px}>
        <Box
          sx={{
            width: "100%",
            height: "15rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(240,240,240,.9)",
          }}
        >
          <Typography variant="h4" component={"div"}>
            ثبت نام در خبرنامه بانی مد
          </Typography>
          <Typography>
            اولین نفری باشید که از جدید ترین محصولات ،جشنواره ها و فروش های ویژه
            ما با خبر میشید
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
              marginTop: "2rem",
            }}
          >
            <TextField
              onBlur={(e) => setEmail(e.target.value)}
              sx={{
                width: "400px",
                backgroundColor: "rgba(250,250,250,1)",
              }}
              type="email"
              placeholder="آدرس ایمیل شما"
            ></TextField>
            <Button
              onClick={handleGetUserEmail}
              variant="contained"
              style={{
                backgroundColor: "green",
                height: "100%",
                borderRadius: "1rem",
                width: "100px",
              }}
            >
              ارسال
            </Button>
          </Box>
        </Box>
        {/* فوتر سایت */}
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
          display: "none",
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
    </>
  );
};
export default Home;
