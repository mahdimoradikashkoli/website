import { Swiper, SwiperSlide } from "swiper/react";
import { ImgMediaCard } from "../../../../components/card";
import { Box, Button } from "@mui/material";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const BestSellers = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={3}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        480:{
          slidesPerView:3
        },
        568:{
          slidesPerView:4
        },
        768:{
          slidesPerView:5
        },
        920:{
          slidesPerView:6
        },
        1200:{
          slidesPerView:7
        }
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <ImgMediaCard
          altForImage="تیشرت مردانه"
          imageAddress="https://www.banimode.com/1671382-home_default/186427.jpg"
          description="تیشرت مردانه کوتونkoton کد32vffqeeqwd"
          title1="koton"
          key=""
          price="999,0000"
          offer="669,000"
          giftContent="تخفیف بیشتر در بازی کهکشان میلیاردی"
          percent2="30%"
          onClick={() => {}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImgMediaCard
          altForImage="تیشرت مردانه"
          imageAddress="https://www.banimode.com/1715986-home_default/194887.jpg"
          description="پیراهن استین بلند مردانه جوتی جینز jootijeans کد ldwmkj"
          title1="JootiJeans"
          key=""
          price="999,0000"
          giftContent="تخفیف بیشتر در بازی کهکشان میلیاردی"
          onClick={() => {}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImgMediaCard
          altForImage="تیشرت مردانه"
          imageAddress="https://www.banimode.com/1647163-home_default/167074.jpg"
          description="تیشرت مردانه jootijeans کد32vffqe34"
          title1="JootiJeans"
          key=""
          price="2,669,000"
          suggestion="1خرید + 1هدیه جین وست"
          onClick={() => {}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImgMediaCard
          altForImage="تیشرت مردانه"
          imageAddress="https://www.banimode.com/1142610-home_default/107060.jpg"
          description="شومیز کوتاه زنانه koton کد 1234dsxxax"
          title1="koton"
          key=""
          price="3,499,0000"
          offer="1,295,000"
          giftContent="تخفیف بیشتر در بازی کهکشان میلیاری"
          percent2="40%"
          onClick={() => {}}
        />
      </SwiperSlide>

      <SwiperSlide>
        <ImgMediaCard
          altForImage="تیشرت مردانه"
          imageAddress="https://www.banimode.com/1671382-home_default/186427.jpg"
          description="تیشرت مردانه کوتونkoton کد32vffqeeqwd"
          title1="koton"
          key=""
          price="999,0000"
          offer="669,000"
          giftContent="تخفیف بیشتر در بازی کهکشان میلیاری"
          percent2="30%"
          onClick={() => {}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImgMediaCard
          altForImage="تیشرت مردانه"
          imageAddress="https://www.banimode.com/1671382-home_default/186427.jpg"
          description="تیشرت مردانه کوتونkoton کد32vffqeeqwd"
          title1="koton"
          key=""
          price="999,0000"
          offer="669,000"
          giftContent="تخفیف بیشتر در بازی کهکشان میلیاری"
          percent2="30%"
          onClick={() => {}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImgMediaCard
          altForImage="تیشرت مردانه"
          imageAddress="https://www.banimode.com/1671382-home_default/186427.jpg"
          description="تیشرت مردانه کوتونkoton کد32vffqeeqwd"
          title1="koton"
          key=""
          price="999,0000"
          offer="669,000"
          giftContent="تخفیف بیشتر در بازی کهکشان میلیاری"
          percent2="30%"
          onClick={() => {}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImgMediaCard
          altForImage="تیشرت مردانه"
          imageAddress="https://www.banimode.com/1671382-home_default/186427.jpg"
          description="تیشرت مردانه کوتونkoton کد32vffqeeqwd"
          title1="koton"
          key=""
          price="999,0000"
          offer="669,000"
          giftContent="تخفیف بیشتر در بازی کهکشان میلیاری"
          percent2="30%"
          onClick={() => {}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImgMediaCard
          altForImage="تیشرت مردانه"
          imageAddress="https://www.banimode.com/1671382-home_default/186427.jpg"
          description="تیشرت مردانه کوتونkoton کد32vffqeeqwd"
          title1="koton"
          key=""
          price="999,0000"
          offer="669,000"
          giftContent="تخفیف بیشتر در بازی کهکشان میلیاری"
          percent2="30%"
          onClick={() => {}}
        />
      </SwiperSlide>
      
      <SwiperSlide>
        <Box
          sx={{
            maxWidth: "8.25rem",
            height: "16rem",
            textAlign: "center",
            display: "flex",
            alignItems: "cenetr",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "#bbdddd",
            borderRadius: "1rem",
          }}
        >
          <Button variant="text">مشاهده همه مصحولات </Button>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};
