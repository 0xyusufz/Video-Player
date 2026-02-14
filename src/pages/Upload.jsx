import React from "react";
import { Container,Box, Input, Button } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Upload = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"full"}
        color={"purple.500"}
      >
        <AiOutlineCloudUpload size={"10vmax"}/>

        <form>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Input required type={"file"} 
            css={{
              "&::file-selector-button": {
                border: "none",
                width: "calc(100% + 36px)",
                height: "100%",
                marginLeft: "-18px",
                color: "purple",
                backgroundColor: "white",
                cursor: "pointer",
              },
            }} />
            <Button colorScheme={"purple"} type={"submit"}>Upload</Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Upload;
