import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import style from "./watchesAndJewelry.module.css";
import { Product, ProductSubject } from "../../component";
import {FC} from "react"
import {watchesAndJewelryType} from "./type"

export const WatchesAndJewelry:FC<watchesAndJewelryType> = ({className}) => {
  

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
            همه محصولات ساعت و طلا
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
                <ProductSubject productSubject="ساعت مچی" href="" />
              <Product value="ساعت زنانه" />
              <Product value="ساعت مردانه" />
              <Product value="ساعت دخترانه نو جوان" />
              <ProductSubject productSubject="زیورآلات طلا و زنانه" href="" />
              <Product value="انگشتر طلا زنانه" />
              <Product value="گوشواره طلا زنانه" />
              <Product value="گوشواره زیبا" />
              <Product value="گوشواره تقره ای" />
              <Product value="گوشواره ستاره ای" />
              <Product value="گوشواره نقره ای مردانه" />
              <Product value="دستبند طلا زنانه" />
              <Product value="ست طلا زنانه" />
              <Product value="پابند طلا زنانه" />
              
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
                <Product value="آویز ساعت طلا زنانه" />
              <ProductSubject productSubject="زیورآلات طلا مردانه" href="" />
              <ProductSubject productSubject="زیورآلات طلا دخترانه" href="" />
              <ProductSubject productSubject="شمس طلا" href="" />
              <ProductSubject productSubject="بدلیجات زنانه" href="" />
              <Product value="گوشواره بدل زنانه" />
              <Product value="دستبند بدل زنانه" />
              <Product value="گردنبند بدل زنانه" />
              <Product value="انگشتر بدل زنانه" />
              <Product value="آویز ساعت بدل زنانه" />
              <Product value="پابند بدل زنانه" />
              <Product value="ست بدلیجات زنانه" />
              <ProductSubject productSubject="بدلیجات مردانه" href="" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "9rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
               
              <Product value="دشتیند بدل مردانه" />
              <Product value="ساعت بدل مردانه" />
              <Product value="انگشتر بدل مردانه" />
              <Product value="گردنبند بدل مردانه" />
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
              src="/img/watch.png"
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
              src="/img/watch2.png"
              style={{
                cursor:"pointer",
                width: "100%",
                height: "13rem",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: ".3rem",
              }}
            ></Box>
            <Typography component={"h3"} fontSize={"1.5rem"}>بر گزیده ها </Typography>
            <Typography component={"a"} href="">
            <Box style={{border:"1px solid rgba(150,150,150,.5)"}} component={"img"} alt="icon marck" src="https://www.banimode.com/img/m/965-brand-136x69.jpg"></Box>

            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
