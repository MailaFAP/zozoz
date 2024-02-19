import React from "react";
import Header from "../../componentes/Header";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import "./Servicos.css";
import Tabela from "../../componentes/Tabela";
import ImagemPrecos from "../../imagens/img-precos.png";

function Servicos() {
  return (
    <div>
      <Header />
      <Flex p="112px 0" flexDir={"column"} gap={"50px"} alignItems={"center"}>
        <Box>
          <Tabela />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Image src={ImagemPrecos} h="270px" />
        </Box>
        <Button color={"white"} bgColor={"#d8b192"} width={"180px"} height={"50px"} borderRadius={"50px"}>Agendar</Button>
      </Flex>
    </div>
  );
}
export default Servicos;
