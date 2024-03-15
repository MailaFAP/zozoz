import React from "react";
import Header from "../../components/Header";
import { Box, Image, Flex } from "@chakra-ui/react";
import Home01 from "../../assets/imagem-home01.png";
import Home02 from "../../assets/imagem-home02.png";
import LogoZO from "../../assets/logoZO.png";
import Circulo from "../../assets/imagem-home-circulo.png";
import Sobre from "../Sobre";
import Servicos from "../Servicos";
import Contato from "../Contato";

function Home() {
  return (
    <div>
      <div className="container-home">
        <Header />
        <Flex flexDirection={{ base: "column", md: "row" }} justify="space-between">
          <Box position="relative" width="100%">
            <Image
              display={{ base: "block", md: "none" }}
              boxSize="100%"
              maxHeight="100vh"
              src={Home01}
              alt="mulher com a mão na frente do rosto"
              objectFit="cover"
              filter={{ base: "blur(3px)", md: "none" }}
            />
            <Image
              display={{ base: "block", md: "none" }}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              boxSize="200px"
              src={LogoZO}
              alt="logo do salão zozoz"
            />

            <Image
              display={{ base: "none", md: "block" }}
              boxSize="100%"
              maxHeight="100vh"
              src={Home01}
              alt="mulher com a mão na frente do rosto"
              objectFit="cover"
              filter={{ base: "blur(3px)", md: "none" }}
            />
            <Image
              display={{ base: "none", md: "block" }}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              boxSize="300px"
              src={LogoZO}
              alt="logo do salão zozoz"
            />

            <Image
              display={{ base: "none", md: "block" }}
              boxSize="0px"
              src={Circulo}
              alt="circulo"
            />
            <Image
              display={{ base: "none", md: "block" }}
              position="absolute"
              top={230}
              right={550}
              boxSize="0px"
              height="0px"
              src={Home02}
              alt="uma mão em cima de um tecido felpudo"
            />
          </Box>
        </Flex>
      </div>
      <Sobre />
      <Servicos />
      <Contato />
    </div>
  );
}

export default Home;
