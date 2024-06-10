import { Box, Typography } from "@mui/material";
import { Product, ProductSubject } from "../../component";
import style from "./digitalGoods.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FC } from "react";
import { digitalGoodstype } from "./type";

export const DigitalGoods: FC<digitalGoodstype> = ({ className }) => {
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
            همه محصولات کالای دیجیتال
          </Typography>
          <ArrowBackIosIcon style={{ width: ".8rem", height: ".8rem" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box className={style.boxProduct}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "9rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              {/* موبایل */}
              <ProductSubject productSubject="موبایل" href="" />
              <Product value="گوشی سامسونگ" />
              <Product value="گوشی شیامی" />
              <Product value="گوشی آیفون" />
              <Product value="گوشی اوپو" />
              <Product value="گوشی آنر " />
              <Product value="گوشی نوکیا" />
              <Product value="گوشی موتورلا" />
              <Product value="گوشی ریلمی" />
              <Product value="/وشی هوآوی" />
              <Product value="گوشی ناتینگ فون" />
              {/* لپتاپ */}
              <ProductSubject productSubject="لپ تاپ" href="" />
              <Product value="لپ تاپ ایسوس" />
              <Product value="اپ تاپ لنوو" />
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
              <Product value="لپ تا اچ پی" />
              <Product value="لپتاپ اپل (مک بوک)" />
              <Product value="لپ تاپ دل " />
              <Product value="لپ تاپ ایسر" />
              {/* ساعت هوشمند */}
              <ProductSubject productSubject="ساعت هوشمند" href="" />
              <Product value="ساعت هوشمند اپل" />
              <Product value="ساعت هوشمند سامسونگ" />
              <ProductSubject productSubject="هدفون و هنذفری" href="" />
              <Product value="هدفون و هنذفری اپل" />
              <Product value="هدفون و هنذفری سامسونگ" />
              <Product value="هدفون و هنذفری سامسونگ" />
              <Product value="هدفون و هنذفری سامسونگ" />
              <Product value="هدفون و هنذفری سامسونگ" />

              <ProductSubject productSubject="اسپیکر" href="" />
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
              <Product value="اسپیکر هارمن کاردن" />
              <Product value="اسپیکر هارمن کاردن" />
              <Product value="اسپیکر هارمن کاردن" />
              <Product value="اسپیکر هارمن کاردن" />
              <ProductSubject productSubject="لوازم جانبی موبایل" href="" />
              <Product value="قاب و کاور موبایل" />
              <Product value="گلس گوشی" />
              <Product value="کابل شارژ و مبدل موبایل" />
              <Product value="کابل شارژ و مبدل موبایل" />
              <Product value="کابل شارژ و مبدل موبایل" />
              <Product value="کابل شارژ و مبدل موبایل" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "12rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              <ProductSubject
                productSubject="هارد و تجهیزات ذخیره سازی"
                href=""
              />
              <Product value="فلش مموری" />
              <Product value="هارد" />
              <ProductSubject productSubject="کنسول بازی " href="" />
              <ProductSubject productSubject="ماشین اداری" href="" />
              <ProductSubject
                productSubject="تجهیزات شبکه و ارتباطات"
                href=""
              />
              <ProductSubject
                productSubject="کامچیوتر ئ تجهیزات جانبی"
                href=""
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
