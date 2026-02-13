import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";
import Img5 from "../assets/5.png";


const headingOption={
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransform:"uppercase",
  whiteSpace:"nowrap",
  p:"4",
  size:"4xl",
  zIndex:"5"
}
const Home = () => {
  return (
    <Box>
      <MyCarousel />
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={"100vh"}>
      <Image src={Img1} h={"100%"} w={"100%"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>WATCH THE FUTURE</Heading>
    </Box>
    <Box w="full" h={"100vh"}>
      <Image src={Img2} h={"100%"} w={"100%"} objectFit={"cover"}/>
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOption}>FUTURE IS GAMING</Heading>
    </Box>
    <Box w="full" h={"100vh"}>
      <Image src={Img3} h={"100%"} w={"100%"} objectFit={"cover"}/>
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>GAMING ON CONSOLE</Heading>
    </Box>
    <Box w="full" h={"100vh"}>
      <Image src={Img4} h={"100%"} w={"100%"} objectFit={"cover"}/>
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOption}>NIGHT LIFE IS COOL</Heading>
    </Box>
  </Carousel>
);

export default Home;
