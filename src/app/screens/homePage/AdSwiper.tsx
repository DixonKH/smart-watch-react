import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "@mui/material";

const list = [
  { productName: "Mobile", imagePath: "/img/3_thumb.jpg" },
  { productName: "Sports", imagePath: "/img/6_thumb.jpg" },
  { productName: "Jewellery", imagePath: "/img/7_thumb.jpg" },
  { productName: "Cameras", imagePath: "/img/8_thumb.jpg" },
  { productName: "Books", imagePath: "/img/11_thumb.jpg" },
  { productName: "Fashion", imagePath: "/img/27_thumb.jpg" },
  { productName: "Men", imagePath: "/img/28_thumb.jpg" },
  { productName: "Sale", imagePath: "/img/37_thumb.jpg" },
];

export function AdSwiper() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={-200}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {list.map((ele, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slides">
              <Box className="slides-img">
                <img src={ele.imagePath} alt={ele.productName} />
              </Box>
              <Box className="slide-txt">
                <p className="slide-txt-info">{ele.productName}</p>
                <img src="/icons/arrow.png" />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
