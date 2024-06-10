import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import style from "./sportAndTravel.module.css";
import { Product, ProductSubject } from "../../component";
import { FC } from "react";
import { sportAndTravelType } from "./type";

export const SportAndTravel: FC<sportAndTravelType> = ({ className }) => {
  return (
    <>
      <Box
        className={className}
        sx={{
          position: "relative",
          width: "85%",
          height: "24rem",
          padding: ".7rem 1rem .4rem .4rem",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Typography
            component={"h3"}
            fontWeight={"bold"}
            sx={{ cursor: "pointer", "&:hover": { color: "green" } }}
          >
            همه محصولات ورزش و سفر
          </Typography>
          <ArrowBackIosIcon style={{ width: ".8rem", height: ".8rem" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box className={style.boxProduct}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "10rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              <ProductSubject productSubject="لباس ورزشی" href="" />
              <Product value="لباس ورزشی مردانه" />
              <Product value="لباس ورزشی زنانه" />
              <Product value="لباس ورزشی پسرانه" />
              <Product value="لباس ورزشی دخترانه" />
              <ProductSubject productSubject="کفش ورزشی" href="" />
              <Product value="کفش ورزشی زنانه " />
              <Product value="کفش ورزشی مردانه" />
              <Product value="گوشواره تقره ای" />
              <Product value="کفش ورزشی دخترانه" />
              <ProductSubject productSubject="کیف و ساک ورزشی" href="" />
              <Product value="کیف و ساک ورزشی زنانه" />
              <Product value="کیف و ساک ورزشی مردانه" />
              <ProductSubject productSubject="لوازم ورزشی" href="" />
              <Product value="اسکیت و اسکوتر" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "10rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              <Product value="توپ و تجهیزات ورزش های توپی" />
              <Product value="قمقمه ، فلاکس و شیکر ورزشی" />
              <Product value="طناب ورزشی" />
              <Product value="اکسسوری ورزشی زنانه" />
              <Product value="اکسسوری ورزشی مردانه" />
              <ProductSubject productSubject="لوازم کمپینگ و سفر" href="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
