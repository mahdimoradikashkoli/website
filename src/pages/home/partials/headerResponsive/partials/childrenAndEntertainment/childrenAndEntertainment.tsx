import { Box, Typography } from "@mui/material";
import { Product, ProductSubject } from "../../component";
import style from "./childrenAndEntertainment.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FC } from "react";
import { childrenAndEntertainmentType } from "./type";

export const ChildrenAndEntertainment: FC<childrenAndEntertainmentType> = ({ className }) => {
  return (
    <>
      <Box
        className={className}
        sx={{
          width: "85%",
          height: "24rem",
          padding: ".7rem 1rem .4rem .4rem",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Typography component={"h3"} fontWeight={"bold"} sx={{ cursor: "pointer", "&:hover": { color: "green" } }}>
            همه محصولات کودک و سرگرمی
          </Typography>
          <ArrowBackIosIcon style={{ width: ".8rem", height: ".8rem" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box className={style.boxProduct}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "14rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              {/* موبایل */}
              <ProductSubject productSubject="اسباب بازی" href="" />
              <Product value="لگو،پازل و انواع اسباب بازی آموزشی و سرگرمی" />
              <Product value="ماشین بازی و وسایل  نقلیه اسباب بازی" />
              <Product value="بازی فضای باز" />
              <Product value="عروسک و ست اسباب بازی" />
              <Product value="تفنگ اسباب بازی و مبارزه" />
              <ProductSubject productSubject="بهداشت و حمام و کودک و نوزاد" href="" />
              <ProductSubject productSubject="تغذیه و رشد نوزاد" href="" />
              
              
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "14rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              <ProductSubject productSubject="لوازم ایمنی و مراقب کودک و نوزاد" href="" />
              <ProductSubject productSubject="کالای خواب کودک و نوزاد" href="" />
              <ProductSubject productSubject="لوازم گردش و سفر نوزاد" href="" />
              <ProductSubject productSubject="لوازم نوزاد پستانک و شیر دوش" href="" />
          </Box>
            
          </Box>
        </Box>
      </Box>
    </>
  );
};
