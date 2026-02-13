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
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    onClose();
  };

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
              <Button onClick={onClose} w={"full"} varient={"ghost"} colorScheme={"purple"}><Link to={'/'}>Home</Link></Button>
              <Button onClick={onClose} w={"full"} varient={"ghost"} colorScheme={"purple"}><Link to={'/videos'}>Videos</Link></Button>
              <Button onClick={onClose} w={"full"} varient={"ghost"} colorScheme={"purple"}><Link to={'/videos?category=free'}>Free Video</Link></Button>
              <Button onClick={onClose} w={"full"} varient={"ghost"} colorScheme={"purple"}><Link to={'/upload'}>Upload video</Link></Button>
            </Box>
            <Box display={"flex"} gap={"4"} pos={"absolute"} bottom={"10"}left={"0"} w={"full"} justifyContent={"space-evenly"}>
              <Button onClick={onClose} varient={"outline"} colorScheme={"purple"} fontSize="lg"><Link to={"/login"}>Log in</Link></Button>
              <Button onClick={onClose} varient={"outline"} colorScheme={"purple"} fontSize="lg"><Link to={"/signup"}>Sign up</Link></Button>
            </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
