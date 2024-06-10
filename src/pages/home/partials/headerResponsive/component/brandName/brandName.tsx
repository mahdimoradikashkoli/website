import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type BrandName = {
  brandName: string;
  href: string;
  key?: string;
  arowIcon?:string
};
export const BrandName: React.FC<BrandName> = ({ brandName, href, key ,arowIcon}) => {
  return (
    <Box  sx={{
        width:'fit-content',
        display: "flex",
        alignItems: "center",
        color: "rgb(50,50,50)",
        ...(arowIcon ? {marginTop:"2rem"}:{}),
        "&:hover":{color:"rgb(20,255,20)"}
      }}>
      <Typography
        key={key}
        component={"a"}
        href={href}
        sx={{
          textDecoration: "none",
          ...( arowIcon ?{ color: "black",fontSize:"1rem",paddingRight:'1rem',}:{}),
          "&:hover":{color:"rgb(20,255,20)"}
        }}
      >
        {brandName}
     </Typography>
      {  arowIcon && <ArrowBackIosIcon style={{ width: ".8rem", height: ".8rem" }} />}
    </Box>
  );
};
