import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme={"purple"}
        p={"0"}
        w={"10"}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
        zIndex={"5"}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"black.400"} fontSize={"xl"}>
            VIDEO PLAYER
          </DrawerHeader>
          <DrawerBody>
            <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"} gap={"4"} w={"full"}>
              <Button as={Link} to="/" onClick={onClose} w={"full"} variant={"ghost"} colorScheme={"purple"}>
                Home
              </Button>
              <Button as={Link} to="/videos" onClick={onClose} w={"full"} variant={"ghost"} colorScheme={"purple"}>
                Videos
              </Button>
              <Button
                as={Link}
                to="/videos?category=free"
                onClick={onClose}
                w={"full"}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                Free Video
              </Button>
              <Button as={Link} to="/upload" onClick={onClose} w={"full"} variant={"ghost"} colorScheme={"purple"}>
                Upload video
              </Button>
            </Box>
            <Box display={"flex"} gap={"4"} pos={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
              <Button as={Link} to="/login" onClick={onClose} variant={"outline"} colorScheme={"purple"} fontSize="lg">
                Log in
              </Button>
              <Button as={Link} to="/signup" onClick={onClose} variant={"outline"} colorScheme={"purple"} fontSize="lg">
                Sign up
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
