import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Button, Stack } from "@mui/material";

export default function SlidePage() {
  return (
    <>
      <Swiper
        navigation={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className={"swiper-slide"}>
          <Stack className={"carusel-txt"}>
            <Stack className="my-swiper-slide">
              <p>Rich Watch</p>
              <h1>Sale 35% Off</h1>
              <p>Make a rich life</p>
            </Stack>
            <Stack>
              <Button className={"swiper-button"}>Shop Now</Button>
            </Stack>
          </Stack>
          <img src="./img/home.jpg" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Stack className={"carusel-txt"}>
            <Stack className="my-swiper-slide">
              <p>H-vault Classic</p>
              <h1>Offer 20% Off</h1>
              <p>Starting at $10.99</p>
            </Stack>
            <Stack>
              <Button className={"swiper-button"}>Shop Now</Button>
            </Stack>
          </Stack>
          <img src="./img/home2.jpg" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Stack className={"carusel-txt"}>
            <Stack className="my-swiper-slide">
              <p>Smart Watch</p>
              <h1>Flat 35% Off</h1>
              <p>At $99-Only For Today</p>
            </Stack>
            <Stack>
              <Button className={"swiper-button"}>Shop Now</Button>
            </Stack>
          </Stack>
          <img src="./img/home3.jpg" alt="Image 1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
