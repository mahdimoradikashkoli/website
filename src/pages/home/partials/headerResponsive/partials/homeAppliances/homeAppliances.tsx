import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import style from "./homeAppliances.module.css";
import { Product, ProductSubject } from "../../component";
import { FC } from "react";
import { homeAppliancesType } from "./type";

export const HomeAppliances: FC<homeAppliancesType> = ({ className }) => {
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
            همه محصولات لوازم خانه
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
              <ProductSubject productSubject="خانه و آشپزخانه" href="" />
              <Product value="لوازم آشپزخانه" />
              <Product value="ظروف" />
              <Product value="کالای خواب و استراحت" />
              <Product value="وسایل حمام" />
              <Product value="حوله" />
              <Product value="سرو و پذیرایی" />
              <Product value="لوازم سرویس بهداشتی" />
              <ProductSubject productSubject="لوازم برقی خانگی" href="" />
              <Product value="تلوزیون" />
              <Product value="جاروبرقی" />
              
            </Box>
            
          </Box>
        </Box>
      </Box>
    </>
  );
};
