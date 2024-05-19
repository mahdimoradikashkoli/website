import { Box, Button, Typography } from "@mui/material";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export const DownloadApplication = () => {
  return (
    <Box
      sx={{
        marginTop: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: ".6rem",
      }}
    >
      <Typography fontWeight={"bold"}>دانلود اپلیکیشن بانی مد</Typography>
      <Box sx={{display:'flex',flexDirection:"column",gap:".5rem"}}>

      
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
          width={"3rem"}
          height={"1.5rem"}
          component={"img"}
          src="/icons/images.png"
          alt="کافه بازار"
        ></Box>
      </Button>
      <Button
        style={{
            outline:".02rem solid #1ac977",
          padding: ".8rem .9rem",
          color: "rgb(25, 177, 106) ",
          fontWeight: "bold",
          width: "100%",
        }}
      >
        <PhoneAndroidIcon style={{color:"rgb(25, 177, 106) "}}/>
        دانلود اپلیکیشن
        
      </Button>
      </Box>
    </Box>
  );
};
