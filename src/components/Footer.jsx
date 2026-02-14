import { Box, Button, Heading, Input ,Text} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}    >
      <Box display={"flex"} flexDirection={["column", "row"]}>
        <Box display={"flex"} flexDirection={"column"}  alignItems={"stretch"} w="full" px="4">
          <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>Subsribe to get updates</Heading>
          <Box display={"flex"} py={"2"} borderBottom={["none","2px solid white "]}>
            <Input placeholder={"enter email here "} border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor={"none"}  />
            <Button p={"0"} colorScheme={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"}>
              <AiOutlineSend size={"20"} />
            </Button>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} w={"full"} borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>
            <Heading textTransform={"uppercase"} textAlign={"center"}>
                Video Player
            </Heading>
            <Text textAlign={"center"}>All right reserved</Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} w={"full"} >
            <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"} mb={"4"}>social media</Heading>
            
            <Button variant={"link"} colorScheme={"purple"}>
                <a href="https://github.com/0xyusufz" target="blank">Github</a>
            </Button>
            <Button variant={"link"} colorScheme={"purple"}>
                <a href="https://x.com/0xyusufz" target="blank">Twitter</a>
            </Button>
            <Button variant={"link"} colorScheme={"purple"}>
                <a href="https://www.linkedin.com/in/md-yusuf-fatah-331688284/" target="blank">Linkedin</a>
            </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
