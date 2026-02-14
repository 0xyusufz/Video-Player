import React from "react";
import { Box, Container, Heading, Image,Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";
import Img5 from "../assets/5.png";

const headingOption = {
  position: "absolute",
  top: ["70%", "50%"],
  left: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  textAlign: "center",
  w: ["90%", "auto"],
  px: ["3", "6"],
  py: ["2", "4"],
  fontSize: ["xl", "3xl", "6xl"],
  borderRadius: "lg",
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid "}
          m={"auto"}
        >
          Services
        </Heading>

        <Box h={"full"} p={"4"} display={"flex"} flexDirection={["column","row "]} alignItems={"center"}>
          <Image src={Img5} h={["40","400"]} filter={"hue-rotate(-130deg)"} />

          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae ipsam tenetur aliquid at! Soluta error, delectus odio quasi sunt accusantium, qui ipsam assumenda necessitatibus asperiores officia pariatur impedit, temporibus veniam! Voluptatibus debitis velit ea ipsam temporibus pariatur, non dolorem cumque soluta eum enim, architecto magnam? Aperiam ratione eius eaque!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat impedit quam quidem, iusto reprehenderit nemo eligendi nostrum ad eos, nobis rem. Provident ipsa nobis repellendus, facere totam nam inventore natus soluta adipisci rerum praesentium beatae. Nesciunt fugiat, cupiditate distinctio corrupti assumenda necessitatibus facilis, vero, quos ipsa sunt blanditiis atque 
            placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga ut reiciendis nemo sit animi, fugit libero quod optio eligendi aliquid deleniti fugiat! Suscipit, earum.
          </Text>
        </Box>
      </Container>
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
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
        WATCH THE FUTURE
      </Heading>
    </Box>
    <Box w="full" h={"100vh"}>
      <Image src={Img2} h={"100%"} w={"100%"} objectFit={"cover"} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOption}>
        FUTURE IS GAMING
      </Heading>
    </Box>
    <Box w="full" h={"100vh"}>
      <Image src={Img3} h={"100%"} w={"100%"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
        GAMING ON CONSOLE
      </Heading>
    </Box>
    <Box w="full" h={"100vh"}>
      <Image src={Img4} h={"100%"} w={"100%"} objectFit={"cover"} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOption}>
        NIGHT LIFE IS COOL
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
