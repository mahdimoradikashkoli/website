import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import style from "./stationery.module.css";
import { Product, ProductSubject } from "../../component";
import {FC} from "react"
import {stationeryType} from "./type"

export const Stationery:FC<stationeryType> = ({className}) => {
  

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
          <Typography component={"h3"} fontWeight={"bold"} sx={{cursor:"pointer","&:hover":{color:'green'}}}>
            همه محصولات لوازم تحریر
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
                <ProductSubject productSubject="لوازم تحریر" href="" />
              <Product value="جامدادی " />
              <Product value="لوازم اداری" />
              
            </Box>
          </Box>
          <Box
          className={style.productImage}
            sx={{
              width: "20%",
              height: "20rem",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              gap: ".5rem",

            }}
          >
            <Box
              component={"img"}
              alt="product image"
              src="/img/stationery.png"
              style={{
                cursor:"pointer",
                width: "100%",
                height: "13rem",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: ".3rem",
              }}
            ></Box>
            <Box
              component={"img"}
              alt="product image"
              src="/img/stationery2.png"
              style={{
                cursor:"pointer",
                width: "100%",
                height: "13rem",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: ".3rem",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
