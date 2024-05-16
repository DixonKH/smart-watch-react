import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "@mui/material";

const users = [
  { productName: "John Doe", imagePath: "/img/tetimonial-img-1.jpg" },
  { productName: "Maria", imagePath: "/img/tetimonial-img-2.jpg" },
  { productName: "Steeve", imagePath: "/img/tetimonial-img-3.jpg" },
  { productName: "Jacob", imagePath: "/img/tetimonial-img-1.jpg" },
  { productName: "Max", imagePath: "/img/tetimonial-img-2.jpg" },
];

export function Testimonal() {
  return (
    <div className="testimonal">
      <Container className="testimonal-frame">
        <Box className="card-title">Testimonial</Box>
        <Swiper slidesPerView={3} spaceBetween={10} className="mySwiper">
          {users.map((ele, index) => {
            return (
              <SwiperSlide key={index} className="testimonal-slide">
                <Box className="slide">
                  <img src={ele.imagePath} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    mollitia eveniet.
                  </p>
                  <p className="user-name">{ele.productName}</p>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
}
