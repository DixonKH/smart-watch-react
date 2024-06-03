import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "@mui/material";

import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { retriveTopUsers } from "./selector";

/** REDUX SLICE & SELECTOR */
const topUsersRetriver = createSelector(retriveTopUsers, (topUsers) => ({
  topUsers,
}));

// const users = [
//   { productName: "John Doe", imagePath: "/img/tetimonial-img-1.jpg" },
//   { productName: "Maria", imagePath: "/img/tetimonial-img-2.jpg" },
//   { productName: "Steeve", imagePath: "/img/tetimonial-img-3.jpg" },
//   { productName: "Jacob", imagePath: "/img/tetimonial-img-1.jpg" },
//   { productName: "Max", imagePath: "/img/tetimonial-img-2.jpg" },
// ];

export function Testimonal() {
  const { topUsers } = useSelector(topUsersRetriver);
  return (
    <div className="testimonal">
      <Container className="testimonal-frame">
        <Box className="card-title">Testimonial</Box>
        <Swiper slidesPerView={3} spaceBetween={10} className="mySwiper">
          {topUsers.map((ele) => {
            const imagePath = `${serverApi}/${ele.memberImage}`;
            return (
              <SwiperSlide key={ele._id} className="testimonal-slide">
                <Box className="slide">
                  <img src={imagePath} alt="" />
                  <p>{ele.memberDesc}</p>
                  <p className="user-name">{ele.memberNick}</p>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
}
