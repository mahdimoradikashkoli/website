import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Suggestion = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={true}
      >
        <SwiperSlide>
          <Box
            borderRadius={".3rem"}
            maxWidth={"-webkit-fill-available"}
            component={"img"}
            src="https://www.banimode.com/img/cms/030119/1712514434.jpg"
            alt="پوشاک مردانه"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius={".3rem"}
            maxWidth={"-webkit-fill-available"}
            component={"img"}
            src="https://www.banimode.com/img/cms/030119/1712514533.jpg"
            alt="پوشاک زنانه"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius={".3rem"}
            maxWidth={"-webkit-fill-available"}
            component={"img"}
            src="https://www.banimode.com/img/cms/030119/1712514540.jpg"
            alt="پوشاک بچه گانه"
          ></Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
