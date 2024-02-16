import React from "react";
import "./Header.css";
import { Box, HStack, useMediaQuery } from "@chakra-ui/react";
import Logo from "../Logo";
import Menu from "../Menu";
import MenuMobile from "../MenuMobile";
import LogoMenu from "../../imagens/logo.jpeg"
 
function Header() {
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

  return (
    <Box position={"relative"}>
      <HStack
        bgColor="rgb(0,0,0,0.3)"
        w="full"
        p={{ base: "1rem 3rem", md: "1rem 8rem" }}
        justifyContent={"space-between"}
        position={"fixed"}
        zIndex={1}
      >
        <Logo imagem= {LogoMenu} size="5rem" />
        {isLargerThanMD ? <Menu /> : <MenuMobile />}
      </HStack>
    </Box>
  );
}

export default Header;
