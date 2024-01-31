import React from "react";
import "./Header.css";
import { Box, HStack, useMediaQuery } from "@chakra-ui/react";
import Logo from "../Logo";
import Menu from "../Menu";
import MenuMobile from "../MenuMobile";

function Header() {
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

  return (
    <Box position={"relative"}>
      <HStack
        bgColor="teal.200"
        w="full"
        p={{ base: "1rem 3rem", md: "1rem 8rem" }}
        justifyContent={"space-between"}
      >
        <Logo size="5rem" />
        {isLargerThanMD ? <Menu /> : <MenuMobile />}
      </HStack>
    </Box>
  );
}

export default Header;
