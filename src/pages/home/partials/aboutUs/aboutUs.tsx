import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

export const AboutUs = () => {
  const theme=useTheme()
  const matches=useMediaQuery(theme.breakpoints.up("sm"))
  const [show, setShow] = useState(false);
  const handleOnClick = () => {
    setShow(!show);
  };
  return (
    <Box  sx={{ marginTop: "1.5rem", width: "100%", position: "relative" }}>
      <Typography fontWeight={"bold"}>درباره بانی مد</Typography>
      <Box
        sx={{
          fontWeight: "bold",
          fontStyle: "italic",
          color: "#898989",
          paddingLeft: "2rem",
          lineHeight: "1.4rem",
          wordSpacing: ".2rem",
          marginTop: ".8rem",
          position: "relative",
          ...(matches ? {fontSize:'.7rem'}:{fontSize:'.62rem'}),
          ...(show
            ? {}
            : {
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: "100%",
                  height: "4rem", // Adjust height as needed
                  background:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, .7))",
                },
              }),
        }}
      >
        1393 کار خود را به صورت تخصصی در زمینه پوشاک و سبک زندگی آغاز کرد. در
        این سال‌ها، بانی مد با همکاری بیشتر از 700 برند، توانسته است تجربه‌ای
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        
        <Box id="text" sx={show ? { display: "block" } : { display: "none" }}>
          مهم‌ترین رسالت بانی ‌مد بهبود کیفیت سبک زندگی است و رضایت اکثریت
          مخاطبان این فروشگاه اینترنتی، گواهی بر این ادعاست؛ رضایتی که
          پشتوانه‌ای استوار برای تحقق دیگر اهداف بلند مدت بانی ‌مد است. اساس کار
          بانی مد برای حضور در صنعت پوشاک، بازاریابی مبتنی بر سلایق و فرهنگ
          پوشاک در بین ایرانیان است. موفقیت این مجموعه در همراهی و هماهنگی با
          فرهنگ ایرانی باعث شده برترین برندهای بازار ایران و جهان که از نظر
          کیفیت و خدمات با استانداردهای بانی مد انطباق دارند، خواستار همکاری با
          این مرکز خرید آنلاین باشند. این برندها پس از شروع همکاری، همواره
          باکیفیت‌ترین و محبوب‌ترین کالاهای خود را با بهترین قیمت در بانی مد
          عرضه کرده‌اند و این افتخاری دیگر برای این مجموعه است. برندهایی مانند
          <Box
            component={"a"}
            href="https://www.banimode.com/Brand/1/%D8%AC%DB%8C%D9%86-%D9%88%D8%B3%D8%AA"
            style={{
              color: "rgb(55, 125, 255)",
              textDecoration: "none",
              transition: "color 0.2s ease 0s , text-decoration 0.2s ease 0s",
            }}
          >
            جین وست
          </Box>
          <Box component={"span"}>،</Box>
          <Box
            component={"a"}
            style={{
              color: "rgb(55, 125, 255)",
              textDecoration: "none",
              transition: "color 0.2s ease 0s , text-decoration 0.2s ease 0s",
            }}
          >
            جوتی جینز
          </Box>
          <Box component={"span"}>،</Box>
          <Box
            component={"a"}
            style={{
              color: "rgb(55, 125, 255)",
              textDecoration: "none",
              transition: "color 0.2s ease 0s , text-decoration 0.2s ease 0s",
            }}
          >
            ال سی وایکیکی
          </Box>
          <Box component={"span"}>،</Box>
          <Box
            component={"a"}
            style={{
              color: "rgb(55, 125, 255)",
              textDecoration: "none",
              transition: "color 0.2s ease 0s , text-decoration 0.2s ease 0s",
            }}
          >
            کوتون
          </Box>
          <Box component={"span"}>،</Box>
          <Box
            component={"a"}
            style={{
              color: "rgb(55, 125, 255)",
              textDecoration: "none",
              transition: "color 0.2s ease 0s , text-decoration 0.2s ease 0s",
            }}
          >
            ال سی من
          </Box>
          <Box component={"span"}>،</Box>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
          با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
          <Box component={"span"}>،</Box>
          <Box
            component={"a"}
            style={{
              color: "rgb(55, 125, 255)",
              textDecoration: "none",
              transition: "color 0.2s ease 0s , text-decoration 0.2s ease 0s",
            }}
          >
            جا مدادی
          </Box>
          <Box component={"span"}>،</Box>
          <Box
            component={"a"}
            style={{
              color: "rgb(55, 125, 255)",
              textDecoration: "none",
              transition: "color 0.2s ease 0s , text-decoration 0.2s ease 0s",
            }}
          >
            پوشاک
          </Box>
          <Box component={"span"}>،</Box>
          در بانی مد موجود است.
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          bottom: "0",
          left: "0",
          right: "0",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "cenetr",
          padding:'.5rem 0'
        }}
      >
        <Box
          onClick={handleOnClick}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: "1rem",
              color: "green",
              fontStyle: "italic",
              cursor: "pointer",
            }}
            component={"button"}
          >
            {show ? "نمایش کمتر" : "نمایش بیشتر"}
          </Box>
          {show ? (
            <KeyboardArrowUpIcon style={{ color: "green" }} />
          ) : (
            <KeyboardArrowDownIcon style={{ color: "green" }} />
          )}
        </Box>
      </Box>
    </Box>
  );
};
