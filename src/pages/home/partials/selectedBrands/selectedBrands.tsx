import { Box } from "@mui/material";
import { SwiperSlide, Swiper } from "swiper/react";

export const SelectedBrands = () => {
  return (
    <Swiper
    slidesPerView={3}
    breakpoints={{
      320:{
        slidesPerView:3,
      },
      480:{
        slidesPerView:4,
      },
      568:{
        slidesPerView:5,
      },
      768:{
        slidesPerView:6,
      },
      920:{
        slidesPerView:7,
      },
      1200:{
        slidesPerView:8,
      },
      1400:{
        slidesPerView:9,
      },
    }}>
      <SwiperSlide>
        <Box
          sx={{
            padding: ".4rem .8rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            cursor:'pointer'
          }}
          component={"button"}
        >
          <Box
            width={"4.1875rem"}
            height={"1.75rem"}
            component={"img"}
            src="public/imageForHome/brands/jeanSweet.png"
            alt="جین وست"
          ></Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box
          sx={{
            padding: ".4rem .8rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            cursor:'pointer'
          }}
          component={"button"}
        >
          <Box
            width={"4.1875rem"}
            height={"1.75rem"}
            component={"img"}
            src="public/imageForHome/brands/jootjeans.png"
            alt="جوتی جینز"
          ></Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box
          sx={{
            padding: ".4rem .8rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            cursor:'poiter'
          }}
          component={"button"}
        >
          <Box
            width={"4.1875rem"}
            height={"1.75rem"}
            component={"img"}
            src="public/imageForHome/brands/pirecardin.png"
            alt="پیر کاردین"
          ></Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box
          sx={{
            padding: ".4rem .8rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            cursor: 'poiter'
          }}
          component={"button"}
        >
          <Box
            width={"4.1875rem"}
            height={"1.75rem"}
            component={"img"}
            src="public/imageForHome/brands/note.png"
            alt="نوت"
          ></Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box
          sx={{
            padding: ".4rem .8rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            cursor:'pointer'
          }}
          component={"button"}
        >
          <Box
            width={"4.1875rem"}
            height={"1.75rem"}
            component={"img"}
            src="public/imageForHome/brands/823-brand-136x69.jpg"
            alt="پیر کاردین"
          ></Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box
          sx={{
            padding: ".4rem .8rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            cursor:'pointer'
          }}
          component={"button"}
        >
          <Box
            width={"4.1875rem"}
            height={"1.75rem"}
            component={"img"}
            src="public/imageForHome/brands/katon.png"
            alt="کتون"
          ></Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box
          sx={{
            padding: ".4rem .8rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            cursor:'pointer'
          }}
          component={"button"}
        >
          <Box
            width={"4.1875rem"}
            height={"1.75rem"}
            component={"img"}
            src="public/imageForHome/brands/614-brand-136x69.jpg"
            alt="ال سی ویکیلس"
          ></Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box
          sx={{
            padding: ".4rem .8rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            cursor:'pointer'
          }}
          component={"button"}
        >
          <Box
            width={"4.1875rem"}
            height={"1.75rem"}
            component={"img"}
            src="public/imageForHome/brands/905-brand-136x69.jpg"
            alt="سیم"
          ></Box>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};
