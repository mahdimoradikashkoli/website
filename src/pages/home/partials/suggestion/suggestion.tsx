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
        style={{cursor:'pointer'}}
      >
        <SwiperSlide>
          <Box
            borderRadius={".3rem"}
            maxWidth={"-webkit-fill-available"}
            component={"img"}
            src="public/imageForHome/poshak/poshakmardaneh.png"
            alt="پوشاک مردانه"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius={".3rem"}
            maxWidth={"-webkit-fill-available"}
            component={"img"}
            src="public/imageForHome/poshak/poshakzananeh.png"
            alt="پوشاک زنانه"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius={".3rem"}
            maxWidth={"-webkit-fill-available"}
            component={"img"}
            src="public/imageForHome/poshak/poshakbacheganeh.png"
            alt="پوشاک بچه گانه"
          ></Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
