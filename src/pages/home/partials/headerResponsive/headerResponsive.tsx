import { Box, Container, Divider, Typography } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./headerResponsive.module.css";
import SearchIcon from "@mui/icons-material/Search";
// import { useEffect } from "react";
import { BrandName, Grouping } from "./component";
import DiamondIcon from "@mui/icons-material/Diamond";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import ChairIcon from "@mui/icons-material/Chair";
import ToysIcon from "@mui/icons-material/Toys";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AddchartIcon from "@mui/icons-material/Addchart";
import PersonIcon from "@mui/icons-material/Person";
import {
  ChildrenAndEntertainment,
  DigitalGoods,
  FashionAndClothing,
  HomeAppliances,
  Newest,
  SportAndTravel,
  Stationery,
  WatchesAndJewelry,
} from "./partials";
import { useEffect, useState } from "react";
import { headerResponsiveType } from "./type";
import { ModalOverlay, SearchComponent } from "components";
import cookies from "js-cookie";
import { instance } from "app/App";
import { SignIn } from "../signIn";
import { SignUp } from "../signUp";

export const HeaderResponsive: React.FC<headerResponsiveType> = ({
  className,
}) => {
  const token = cookies.get("baniToken");

  useEffect(() => {
    const brand = document.querySelector<HTMLElement>(`.${style.brand}`);
    const brandSubject = document.querySelector<HTMLElement>(".brandSubject");
    const grouping = document.querySelector(`.${style.grouping}`);
    const hidenCategory = document.querySelector<HTMLElement>(
      `.${style.hidenCategory}`
    );
    const fashionAndClothing = document.querySelector<HTMLElement>(
      `.${style.fashionAndClothing}`
    );
    const digitalGoods = document.querySelector<HTMLElement>(
      `.${style.digitalGoods}`
    );
    const goods = document.querySelector<HTMLElement>(`.goods`);

    const fashionAndClothingSubject = document.querySelector<HTMLElement>(
      `.fashionAndClothingSubject`
    );
    const watchesAndJewelrySubject = document.querySelector<HTMLElement>(
      ".watchesAndJewelrySubject"
    );
    const watchesAndJewelry = document.querySelector<HTMLElement>(
      `.${style.watchesAndJewelry}`
    );

    const sportAndTravelSubject = document.querySelector<HTMLElement>(
      ".sportAndTravelSubject"
    );
    const sportAndTravel = document.querySelector<HTMLElement>(
      `.${style.sportAndTravel}`
    );
    const homeAppliancesSubject = document.querySelector<HTMLElement>(
      ".homeAppliancesSubject"
    );
    const homeAppliances = document.querySelector<HTMLElement>(
      `.${style.homeAppliances}`
    );
    const childrenAndEntertainment = document.querySelector<HTMLElement>(
      `.${style.childrenAndEntertainment}`
    );
    const childrenAndEntertainmentSubject = document.querySelector<HTMLElement>(
      `.childrenAndEntertainmentSubject`
    );
    const newest = document.querySelector<HTMLElement>(`.${style.newest}`);
    const newestSubject = document.querySelector<HTMLElement>(".newestSubject");
    const showHidenCategoryAndFashionAndclothing = () => {
      hidenCategory!.classList.remove(style.hidenCategory);

      fashionAndClothing!.classList.remove(style.fashionAndClothing);
      digitalGoods!.classList.add(style.digitalGoods);
      watchesAndJewelry!.classList.add(style.watchesAndJewelry);
      sportAndTravel!.classList.add(style.sportAndTravel);
      homeAppliances!.classList.add(style.homeAppliances);
      childrenAndEntertainment!.classList.add(style.childrenAndEntertainment);
      stationery!.classList.add(style.stationery);
      newest!.classList.add(style.newest);
    };
    const stationery = document.querySelector<HTMLElement>(
      `.${style.stationery}`
    );
    const stationerySubject =
      document.querySelector<HTMLElement>(".stationerySubject");
    const showFashionAndClothing = () => {
      fashionAndClothingSubject!.style.backgroundColor = "rgb(240,240,240)";
      fashionAndClothingSubject!.style.color = "#00bf6f";
      fashionAndClothing!.classList.remove(style.fashionAndClothing);
      goods!.style.color = "";
      goods!.style.backgroundColor = "";
      watchesAndJewelrySubject!.style.backgroundColor = "";
      sportAndTravelSubject!.style.color = "";
      sportAndTravelSubject!.style.backgroundColor = "";
      homeAppliancesSubject!.style.color = "";
      homeAppliancesSubject!.style.backgroundColor = "";
      childrenAndEntertainmentSubject!.style.color = "";
      childrenAndEntertainmentSubject!.style.backgroundColor = "";
      stationerySubject!.style.color = "";
      stationerySubject!.style.backgroundColor = "";
      newestSubject!.style.color = "";
      newestSubject!.style.backgroundColor = "";

      digitalGoods!.classList.add(style.digitalGoods);
      watchesAndJewelry!.classList.add(style.watchesAndJewelry);
      sportAndTravel!.classList.add(style.sportAndTravel);
      homeAppliances!.classList.add(style.homeAppliances);
      childrenAndEntertainment!.classList.add(style.childrenAndEntertainment);
      stationery!.classList.add(style.stationery);
      newest!.classList.add(style.newest);
    };

    const showDigitalGoods = () => {
      fashionAndClothingSubject!.style.backgroundColor = "";
      fashionAndClothingSubject!.style.color = "";
      goods!.style.color = "#00bf6f";
      goods!.style.backgroundColor = "rgb(240,240,240)";
      watchesAndJewelrySubject!.style.color = "";
      watchesAndJewelrySubject!.style.backgroundColor = "";
      sportAndTravelSubject!.style.color = "";
      sportAndTravelSubject!.style.backgroundColor = "";
      homeAppliancesSubject!.style.color = "";
      homeAppliancesSubject!.style.backgroundColor = "";
      childrenAndEntertainmentSubject!.style.color = "";
      childrenAndEntertainmentSubject!.style.backgroundColor = "";
      stationerySubject!.style.color = "";
      stationerySubject!.style.backgroundColor = "";
      newestSubject!.style.color = "";
      newestSubject!.style.backgroundColor = "";

      fashionAndClothing!.classList.add(style.fashionAndClothing);
      watchesAndJewelry!.classList.add(style.watchesAndJewelry);
      digitalGoods!.classList.remove(style.digitalGoods);
      sportAndTravel!.classList.add(style.sportAndTravel);
      homeAppliances!.classList.add(style.homeAppliances);
      childrenAndEntertainment!.classList.add(style.childrenAndEntertainment);
      stationery!.classList.add(style.stationery);
      newest!.classList.add(style.newest);
    };
    const showWatchesAndJewelry = () => {
      fashionAndClothingSubject!.style.backgroundColor = "";
      fashionAndClothingSubject!.style.color = "";
      // fashionAndClothing!.classList.remove(style.fashionAndClothing);
      goods!.style.color = "";
      goods!.style.backgroundColor = "";
      watchesAndJewelrySubject!.style.backgroundColor = "rgb(240,240,240)";
      watchesAndJewelrySubject!.style.color = "#00bf6f";
      sportAndTravelSubject!.style.color = "";
      sportAndTravelSubject!.style.backgroundColor = "";
      homeAppliancesSubject!.style.color = "";
      homeAppliancesSubject!.style.backgroundColor = "";
      childrenAndEntertainmentSubject!.style.color = "";
      childrenAndEntertainmentSubject!.style.backgroundColor = "";
      stationerySubject!.style.color = "";
      stationerySubject!.style.backgroundColor = "";
      newestSubject!.style.color = "";
      newestSubject!.style.backgroundColor = "";

      fashionAndClothing!.classList.add(style.fashionAndClothing);
      digitalGoods!.classList.add(style.digitalGoods);
      watchesAndJewelry!.classList.remove(style.watchesAndJewelry);
      sportAndTravel!.classList.add(style.sportAndTravel);
      homeAppliances!.classList.add(style.homeAppliances);
      childrenAndEntertainment!.classList.add(style.childrenAndEntertainment);
      stationery!.classList.add(style.stationery);
      newest!.classList.add(style.newest);
    };
    const showSportAndTravel = () => {
      fashionAndClothingSubject!.style.backgroundColor = "";
      fashionAndClothingSubject!.style.color = "";
      fashionAndClothing!.classList.remove(style.fashionAndClothing);
      goods!.style.color = "";
      goods!.style.backgroundColor = "";
      watchesAndJewelrySubject!.style.backgroundColor = "";
      watchesAndJewelrySubject!.style.color = "";
      sportAndTravelSubject!.style.color = "#00bf6f";
      sportAndTravelSubject!.style.backgroundColor = "rgb(240,240,240)";
      homeAppliancesSubject!.style.color = "";
      homeAppliancesSubject!.style.backgroundColor = "";
      childrenAndEntertainmentSubject!.style.color = "";
      childrenAndEntertainmentSubject!.style.backgroundColor = "";
      stationerySubject!.style.color = "";
      stationerySubject!.style.backgroundColor = "";
      newestSubject!.style.color = "";
      newestSubject!.style.backgroundColor = "";

      sportAndTravel!.classList.remove(style.sportAndTravel);
      fashionAndClothing!.classList.add(style.fashionAndClothing);
      digitalGoods!.classList.add(style.digitalGoods);
      watchesAndJewelry!.classList.add(style.watchesAndJewelry);
      homeAppliances!.classList.add(style.homeAppliances);
      childrenAndEntertainment!.classList.add(style.childrenAndEntertainment);
      stationery!.classList.add(style.stationery);
      newest!.classList.add(style.newest);
    };
    const showHomeAppliances = () => {
      fashionAndClothingSubject!.style.backgroundColor = "";
      fashionAndClothingSubject!.style.color = "";
      fashionAndClothing!.classList.remove(style.fashionAndClothing);
      goods!.style.color = "";
      goods!.style.backgroundColor = "";
      watchesAndJewelrySubject!.style.backgroundColor = "";
      watchesAndJewelrySubject!.style.color = "";
      sportAndTravelSubject!.style.color = "";
      sportAndTravelSubject!.style.backgroundColor = "";
      homeAppliancesSubject!.style.color = "#00bf6f";
      homeAppliancesSubject!.style.backgroundColor = "rgb(240,240,240)";
      childrenAndEntertainmentSubject!.style.color = "";
      childrenAndEntertainmentSubject!.style.backgroundColor = "";
      stationerySubject!.style.color = "";
      stationerySubject!.style.backgroundColor = "";
      newestSubject!.style.color = "";
      newestSubject!.style.backgroundColor = "";

      homeAppliances!.classList.remove(style.homeAppliances);
      sportAndTravel!.classList.add(style.sportAndTravel);
      fashionAndClothing!.classList.add(style.fashionAndClothing);
      digitalGoods!.classList.add(style.digitalGoods);
      watchesAndJewelry!.classList.add(style.watchesAndJewelry);
      childrenAndEntertainment!.classList.add(style.childrenAndEntertainment);
      stationery!.classList.add(style.stationery);
      newest!.classList.add(style.newest);
    };
    const showChildrenAndEntertainment = () => {
      fashionAndClothingSubject!.style.backgroundColor = "";
      fashionAndClothingSubject!.style.color = "";
      fashionAndClothing!.classList.remove(style.fashionAndClothing);
      goods!.style.color = "";
      goods!.style.backgroundColor = "";
      watchesAndJewelrySubject!.style.backgroundColor = "";
      watchesAndJewelrySubject!.style.color = "";
      sportAndTravelSubject!.style.color = "";
      sportAndTravelSubject!.style.backgroundColor = "";
      homeAppliancesSubject!.style.color = "";
      homeAppliancesSubject!.style.backgroundColor = "";
      childrenAndEntertainmentSubject!.style.color = "#00bf6f";
      childrenAndEntertainmentSubject!.style.backgroundColor =
        "rgb(240,240,240)";
      stationerySubject!.style.color = "";
      stationerySubject!.style.backgroundColor = "";
      newestSubject!.style.color = "";
      newestSubject!.style.backgroundColor = "";

      childrenAndEntertainment!.classList.remove(
        style.childrenAndEntertainment
      );
      fashionAndClothing!.classList.add(style.fashionAndClothing);
      digitalGoods!.classList.add(style.digitalGoods);
      watchesAndJewelry!.classList.add(style.watchesAndJewelry);
      sportAndTravel!.classList.add(style.sportAndTravel);
      homeAppliances!.classList.add(style.homeAppliances);
      stationery!.classList.add(style.stationery);
      newest!.classList.add(style.newest);
    };
    const showStationary = () => {
      fashionAndClothingSubject!.style.backgroundColor = "";
      fashionAndClothingSubject!.style.color = "";
      fashionAndClothing!.classList.remove(style.fashionAndClothing);
      goods!.style.color = "";
      goods!.style.backgroundColor = "";
      watchesAndJewelrySubject!.style.backgroundColor = "";
      sportAndTravelSubject!.style.color = "";
      sportAndTravelSubject!.style.backgroundColor = "";
      homeAppliancesSubject!.style.color = "";
      homeAppliancesSubject!.style.backgroundColor = "";
      childrenAndEntertainmentSubject!.style.color = "";
      childrenAndEntertainmentSubject!.style.backgroundColor = "";
      stationerySubject!.style.color = "#00bf6f";
      stationerySubject!.style.backgroundColor = "rgb(240,240,240)";
      newestSubject!.style.color = "";
      newestSubject!.style.backgroundColor = "";

      stationery!.classList.remove(style.stationery);
      homeAppliances!.classList.add(style.homeAppliances);
      sportAndTravel!.classList.add(style.sportAndTravel);
      fashionAndClothing!.classList.add(style.fashionAndClothing);
      digitalGoods!.classList.add(style.digitalGoods);
      watchesAndJewelry!.classList.add(style.watchesAndJewelry);
      childrenAndEntertainment!.classList.add(style.childrenAndEntertainment);
      newest!.classList.add(style.newest);
    };

    const showNewest = () => {
      fashionAndClothingSubject!.style.backgroundColor = "";
      fashionAndClothingSubject!.style.color = "";
      fashionAndClothing!.classList.remove(style.fashionAndClothing);
      goods!.style.color = "";
      goods!.style.backgroundColor = "";
      watchesAndJewelrySubject!.style.backgroundColor = "";
      sportAndTravelSubject!.style.color = "";
      sportAndTravelSubject!.style.backgroundColor = "";
      homeAppliancesSubject!.style.color = "";
      homeAppliancesSubject!.style.backgroundColor = "";
      childrenAndEntertainmentSubject!.style.color = "";
      childrenAndEntertainmentSubject!.style.backgroundColor = "";
      stationerySubject!.style.color = "";
      stationerySubject!.style.backgroundColor = "";
      newestSubject!.style.color = "#00bf6f";
      newestSubject!.style.backgroundColor = "rgb(240,240,240)";

      newest!.classList.remove(style.newest);
      fashionAndClothing!.classList.add(style.fashionAndClothing);
      digitalGoods!.classList.add(style.digitalGoods);
      watchesAndJewelry!.classList.add(style.watchesAndJewelry);
      sportAndTravel!.classList.add(style.sportAndTravel);
      homeAppliances!.classList.add(style.homeAppliances);
      childrenAndEntertainment!.classList.add(style.childrenAndEntertainment);
      stationery!.classList.add(style.stationery);
    };

    const hideHidenCategory = () => {
      hidenCategory!.classList.add(style.hidenCategory);
    };

    const showBrand = () => {
      brand!.classList.remove(style.brand);
    };
    const hideBrand = () => {
      brand!.classList.add(style.brand);
    };
    brandSubject?.addEventListener("mousemove", showBrand);
    brandSubject?.addEventListener("mouseout", hideBrand);
    brand?.addEventListener("mouseover", showBrand);
    brand?.addEventListener("mouseout", hideBrand);
    grouping?.addEventListener(
      "mouseover",
      showHidenCategoryAndFashionAndclothing
    );
    grouping?.addEventListener("mouseout", hideHidenCategory);
    hidenCategory?.addEventListener("mouseover", () => {
      fashionAndClothing?.addEventListener(
        "mouseover",
        showHidenCategoryAndFashionAndclothing
      );
      hidenCategory!.classList.remove(style.hidenCategory);
    });
    hidenCategory?.addEventListener("mouseout", hideHidenCategory);
    fashionAndClothing?.addEventListener(
      "mouseover",
      showHidenCategoryAndFashionAndclothing
    );
    // digitalGoods?.addEventListener("mouseover",showHidenCategoryAndOtherComponent)
    fashionAndClothingSubject?.addEventListener(
      "mouseover",
      showFashionAndClothing
    );
    // fashionAndClothing?.addEventListener("mouseover", showFashionAndClothing);
    goods?.addEventListener("mouseover", showDigitalGoods);
    watchesAndJewelrySubject?.addEventListener(
      "mouseover",
      showWatchesAndJewelry
    );
    sportAndTravelSubject?.addEventListener("mouseover", showSportAndTravel);
    homeAppliancesSubject?.addEventListener("mouseover", showHomeAppliances);
    childrenAndEntertainmentSubject?.addEventListener(
      "mouseover",
      showChildrenAndEntertainment
    );
    stationerySubject?.addEventListener("mouseover", showStationary);
    newestSubject?.addEventListener("mouseover", showNewest);
    return () => {
      grouping?.removeEventListener(
        "mouseover",
        showHidenCategoryAndFashionAndclothing
      );
      grouping?.removeEventListener("mouseout", hideHidenCategory);
      hidenCategory?.removeEventListener(
        "mouseover",
        showHidenCategoryAndFashionAndclothing
      );
      hidenCategory?.removeEventListener("mouseout", hideHidenCategory);
    };
  }, []);

  const [searchValue, setSearchValue] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState("");
  console.log(searchValue);
  useEffect(() => {
    const fetchData = async () => {
      await instance.post("/search", searchValue);
    };
    fetchData;
  }, []);

  const handleSearchInput = () => {
    const searchInput = document.querySelector<HTMLElement>(".searchInput");

    searchInput!.style.display = "block";
  };
  const handleDeleteSearchNavbar = () => {
    const searchInput = document.querySelector<HTMLElement>(".searchInput");
    searchInput!.style.display = "none";
  };

  const fetchdata = async () => {
    const res = await instance.get("/");
    console.log(res);
  };
  token && fetchdata();

  const handlShowLogin = () => {
    setIsModalOpen("login");
    document.body.style.overflow = "hidden";
  };

  const handleShowRegister = () => {
    setIsModalOpen("register");
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setIsModalOpen("nothong");
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* فرایند ثبنام و لاگین در صفحه هوم */}

      {isModalOpen === "login" && (
        <SignIn
          removeRegisterModal={handleCloseModal}
          removeLoginAndShowLogin={handleShowRegister}
        />
      )}
      {/*  وقتی که لاگین وریجستر باز شده باشد ModalOverlay  نمایش پوشش  */}
      {(isModalOpen === "login" || isModalOpen === "register") && (
        <ModalOverlay />
      )}
      {isModalOpen === "register" && (
        <SignUp
          removeRegisterModal={handleCloseModal}
          removeRegisterAndShowLogin={handlShowLogin}
          showLoginAfterRegister={handlShowLogin}
        />
      )}
      <SearchComponent
        onClick={handleDeleteSearchNavbar}
        onChange={(e) => setSearchValue(e.target.value)}
        className="searchInput"
      />
      {/* هدر برای عرض بزرگتر از 800 پیکسل */}
      <Container style={{ display: "none" }} className={className}>
        <Box
          className={style.header2}
          style={{ position: "relative", width: "100%", left: "0", right: "0" }}
          component={"header"}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: "1.3rem 0",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ShoppingBasketIcon
                style={{
                  color: "rgb(50,50,50)",
                  width: "2rem",
                  height: "2rem",
                  cursor: "pointer",
                }}
              />
              {token ? (
                <Box
                  sx={{
                    display: "flex",
                    gap: ".3rem",
                    marginRight: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <Typography>mahdi</Typography>
                  <PersonIcon />
                </Box>
              ) : (
                <Box
                  onClick={handlShowLogin}
                  component={"button"}
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    backgroundColor: "#00bf6f",
                    outline: "none",
                    border: "none",
                    borderRadius: "1.5rem",
                    fontSize: "1.3rem",
                    padding: ".8rem 1.4rem",
                  }}
                >
                  ورود / ثبت نام
                </Box>
              )}
            </Box>

            <Box
              onClick={handleSearchInput}
              className={style.searchNavbar}
              sx={{
                overflow: "hidden",
                width: "20rem",
                backgroundColor: "#f1f1f1",
                borderRadius: "1.5rem ",
                display: "flex",
                alignItems: "center",
                paddingRight: ".4rem",
              }}
            >
              <SearchIcon />
              <Box
                component={"input"}
                placeholder="جستجو در میان بیش از هفتصد برند"
                sx={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  height: "100%",
                  fontSize: "1rem",
                  padding: ".8rem .2rem .8rem .8rem",
                  backgroundColor: "inherit",
                }}
              ></Box>
            </Box>
            <Box display={"inline-block"} component={"a"}>
              <Box
                style={{
                  width: "12rem",
                  height: "2rem",
                }}
                component={"img"}
                src="/icons/logo.png"
              ></Box>
            </Box>
          </Box>

          {/* نوار پایین سبد خرید */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: ".2rem 0 2rem 0",
              width: "100%",
              gap: "1.5rem",
              position: "relative",
            }}
            component={"nav"}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <Box className={`${style.grouping} `}>
                <MenuIcon />
                <Typography
                  component={"div"}
                  style={{ fontSize: "1.4rem", color: "rgb(50,50,50)" }}
                >
                  دسته بندی کالاها
                </Typography>
              </Box>
              <Typography
                component={"a"}
                sx={{ textDecoration: "none", color: "black" }}
                href=""
              >
                شگفت انگیز
              </Typography>
              <Typography
                component={"a"}
                sx={{ textDecoration: "none", color: "black" }}
                href=""
              >
                اوتلت
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              sx={{
                bgcolor: "rgb(150,150,150)",
                width: ".08rem",
                height: "2rem",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <Typography
                className="brandSubject"
                component={"a"}
                sx={{
                  textDecoration: "none",
                  color: "black",
                  paddingBottom: ".2rem",
                }}
                href=""
              >
                برند ها
              </Typography>
              <Typography
                component={"a"}
                sx={{ textDecoration: "none", color: "black" }}
                href=""
              >
                کارت هدیه
              </Typography>
              <Typography
                component={"a"}
                sx={{ textDecoration: "none", color: "black" }}
                href=""
              >
                بانی مگ
              </Typography>
            </Box>
          </Box>
          {/* نمایش برند ها  */}
          <Box
            className={style.brand}
            sx={{
              width: "30rem",
              height: "20rem",
              backgroundColor: "rgb(250,250,250)",
              boxShadow:
                "2px 2px 2px  rgb(230,230,230) , -2px -2px 2px rgb(230,230,230)",
              zIndex: "20",
              position: "absolute",
              top: "78%",
              right: "28%",
              borderRadius: ".2rem",
              display: "flex",
            }}
          >
            <Box
              className={style.brandName}
              sx={{
                display: "flex",
                flexDirection: "column",
                // gap: ".4rem",
                width: "40%",
                height: "20rem",
                overflowY: "auto",
                padding: ".2rem .5rem .2rem 0rem",
              }}
            >
              <Box
                sx={{
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(50,50,50)",
                  "&:hover": { color: "rgb(20,255,20)" },
                }}
              >
                <Divider
                  orientation="vertical"
                  sx={{
                    bgcolor: "rgb(20,255,20)",
                    width: ".17rem",
                    height: "1rem",
                    marginLeft: ".4rem",
                  }}
                />
                <Typography
                  sx={{ cursor: "pointer", width: "fit-content" }}
                  variant={"h6"}
                  component={"div"}
                  fontWeight={"bold"}
                >
                  برند ها
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".3rem",
                  paddingRight: "1.5rem",
                }}
              >
                <BrandName brandName="جوتی جینز" href="" />
                <BrandName brandName="جین وست" href="" />
                <BrandName brandName="پیر کاردین" href="" />
                <BrandName brandName="کوتون" href="" />
                <BrandName brandName="ال سی وایکیکی" href="" />
                <BrandName brandName="کروم" href="" />
                <BrandName brandName="دنیلی" href="" />
                <BrandName brandName="صاد" href="" />
                <BrandName brandName="کاسیو" href="" />
                <BrandName brandName="شیامی" href="" />
                <BrandName brandName="کیا گالری" href="" />
                <BrandName brandName="منط" href="" />
              </Box>
              <BrandName
                brandName="همه برند ها"
                arowIcon="exist"
                href=""
                key=""
              />
            </Box>
            <Box
              className={style.brandLogo}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                width: "60%",
                height: "20rem",
                overflowY: "auto",
                padding: ".5rem",
              }}
            >
              <Typography component={"span"}>برند های بر گزیده</Typography>
              <Box
                component={"img"}
                style={{
                  width: "10rem",
                  height: "3rem",
                  border: "1px solid rgb(200,200,200)",
                }}
                src="https://www.banimode.com/img/m/1-brand-136x69.jpg"
                alt="جین وست"
              ></Box>
              <Box
                component={"img"}
                style={{
                  width: "10rem",
                  height: "3rem",
                  border: "1px solid rgb(200,200,200)",
                }}
                src="https://www.banimode.com/img/m/2-brand-136x69.jpg"
                alt="جوتی جینز"
              ></Box>
              <Box
                component={"img"}
                style={{
                  width: "10rem",
                  height: "3rem",
                  border: "1px solid rgb(200,200,200)",
                }}
                src="https://www.banimode.com/img/m/965-brand-136x69.jpg"
                alt="پری کاردین"
              ></Box>
              <Box
                component={"img"}
                style={{
                  width: "10rem",
                  height: "3rem",
                  border: "1px solid rgb(200,200,200)",
                }}
                src="https://www.banimode.com/img/m/444-brand-136x69.jpg"
                alt="نوت"
              ></Box>
              <Box
                component={"img"}
                style={{
                  width: "10rem",
                  height: "3rem",
                  border: "1px solid rgb(200,200,200)",
                }}
                src="https://www.banimode.com/img/m/614-brand-136x69.jpg"
                alt="ال سی ویکیلیس"
              ></Box>
              <Box
                component={"img"}
                style={{
                  width: "10rem",
                  height: "3rem",
                  border: "1px solid rgb(200,200,200)",
                }}
                src="https://www.banimode.com/img/m/905-brand-136x69.jpg"
                alt="سیم"
              ></Box>
            </Box>
          </Box>
          {/* نمایش دسته بندی وقتی که روی منوی همبر گر hover شد */}
          <Box
            className={style.hidenCategory}
            sx={{
              height: "24rem",
              position: "absolute",
              left: "0rem",
              right: "0rem",
              top: "81%",
              backgroundColor: "white",
              zIndex: "20",
              borderRadius: ".2rem",
              border: ".01rem solid rgb(150,150,150)",
              boxShadow:
                "1px 1px 5px rgb(150,150,150) , -1px -1px 5px rgb(150,150,150)",
              display: "flex",
            }}
          >
            <Box
              className={style.scrolbar}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "14%",
                overflowY: "auto",
                height: "100%",
              }}
            >
              <Grouping
                icon={<DiamondIcon />}
                children="مد و پوشاک"
                className={"fashionAndClothingSubject"}
              />
              <Grouping
                icon={<PhoneIphoneIcon />}
                children="کالای دیجیتال"
                className={"goods"}
              />
              <Grouping
                icon={<AccessAlarmIcon />}
                children="ساعت و طلا"
                className="watchesAndJewelrySubject"
              />
              <Grouping
                icon={<SportsBaseballIcon />}
                children="ورزش و سفر"
                className="sportAndTravelSubject"
              />
              <Grouping
                icon={<ChairIcon />}
                children="لوازم خانه"
                className="homeAppliancesSubject"
              />
              <Grouping
                icon={<ToysIcon />}
                children="
                کودک و سرگرمی"
                className="childrenAndEntertainmentSubject"
              />
              <Grouping
                icon={<DriveFileRenameOutlineIcon />}
                children="لوازم تحریر"
                className="stationerySubject"
              />
              <Grouping
                icon={<AddchartIcon />}
                children="جدیدترین ها"
                className="newestSubject"
              />
            </Box>
            <FashionAndClothing className={`${style.fashionAndClothing}`} />
            <DigitalGoods className={`${style.digitalGoods}`} />
            <WatchesAndJewelry className={style.watchesAndJewelry} />
            <SportAndTravel className={style.sportAndTravel} />
            <HomeAppliances className={style.homeAppliances} />
            <ChildrenAndEntertainment
              className={style.childrenAndEntertainment}
            />
            <Stationery className={style.stationery} />
            <Newest className={style.newest} />
          </Box>
        </Box>
      </Container>
    </>
  );
};
