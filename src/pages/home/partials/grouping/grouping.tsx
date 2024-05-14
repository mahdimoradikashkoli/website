import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

export const Grouping = () => {
  return (
    <>
      <Swiper
      spaceBetween={10}
      slidesPerView={3}>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".7rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "4.4rem",
                padding: "12px 11.5px",
                height: "4.75rem",
                backgroundColor: "white",
                borderRadius: "1.3rem",
              }}
              onClick={() => {}}
            >
              <Box
                width={"4.75rem"}
                height={"4.75rem"}
                component={"img"}
                src="https://www.banimode.com/img/cms/030120/1712594678.jpg"
                alt="پوشاک بچه گانه"
              ></Box>
            </Box>
            <Typography fontWeight={"600"} fontSize={".7rem"}>پوشاک بچه گانه</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
                width:"6rem",
              display: "flex",
              flexDirection: "column",
              gap: ".7rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "4.4rem",
                padding: "12px 11.5px",
                height: "4.75rem",
                backgroundColor: "white",
                borderRadius: "1.3rem",
              }}
              onClick={() => {}}
            >
              <Box
                width={"4.75rem"}
                height={"4.75rem"}
                component={"img"}
                src="https://www.banimode.com/img/cms/030120/1712594497.jpg"
                alt=" مانتو و پانچو"
              ></Box>
            </Box>
            <Typography  fontWeight={"600"} fontSize={".7rem"}>مانتو و پانچو</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
                width:'6rem',
              display: "flex",
              flexDirection: "column",
              gap: ".7rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "4.4rem",
                padding: "12px 11.5px",
                height: "4.75rem",
                backgroundColor: "white",
                borderRadius: "1.3rem",
              }}
              onClick={() => {}}
            >
              <Box
                width={"4.75rem"}
                height={"4.75rem"}
                component={"img"}
                src="https://www.banimode.com/img/cms/020705/1695832447.jpg"
                
                alt="ساعت مردانه و زنانه"
              ></Box>
            </Box>
            <Typography  fontWeight={"600"} fontSize={".7rem"}>ساعت مردانه و زنانه</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
                width:"6rem",
              display: "flex",
              flexDirection: "column",
              gap: ".7rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "4.4rem",
                padding: "12px 11.5px",
                height: "4.75rem",
                backgroundColor: "white",
                borderRadius: "1.3rem",
              }}
              onClick={() => {}}
            >
              <Box
                width={"4.75rem"}
                height={"4.75rem"}
                component={"img"}
                src="https://www.banimode.com/img/cms/020705/1695832454.jpg"
                alt="لباس زیر"
              ></Box>
            </Box>
            <Typography  fontWeight={"600"} fontSize={".7rem"}>لباس زیر</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
                width:"6rem",
              display: "flex",
              flexDirection: "column",
              gap: ".7rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "4.4rem",
                padding: "12px 11.5px",
                height: "4.75rem",
                backgroundColor: "white",
                borderRadius: "1.3rem",
              }}
              onClick={() => {}}
            >
              <Box
                width={"4.75rem"}
                height={"4.75rem"}
                component={"img"}
                src="https://www.banimode.com/img/cms/020705/1695832439.jpg"
                alt="کالای خواب و استراحت"
              ></Box>
            </Box>
            <Typography  fontWeight={"600"} fontSize={".7rem"}>کالای خواب و استراحت</Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
