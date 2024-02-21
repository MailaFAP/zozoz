import React from "react";
import Header from "../../componentes/Header";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import "./Servicos.css";
import Tabela from "../../componentes/Tabela";
import ImagemPrecos from "../../imagens/img-precos.png";
import Cutilagem from "../../imagens/cutilagem.png";
import Esmaltacao from "../../imagens/esmaltacao.png";
import Esmaltes from "../../imagens/esmaltes.png";
import BoxServicos from "../../componentes/BoxServicos";

function Servicos() {
  return (
    <div>
      <Header />
      <Flex p="112px 0 0 0" flexDir={"column"} gap={"50px"} alignItems={"center"}>
        <Box>
          <Tabela />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Image src={ImagemPrecos} h="270px" />
        </Box>
        <Button
          color={"white"}
          bgColor={"#d8b192"}
          width={"180px"}
          height={"50px"}
          borderRadius={"50px"}
        >
          Agendar
        </Button>
      </Flex>
      <Flex justifyContent={"center"} gap={"18px"} m={"100px 0"}>
        <BoxServicos imagem={Cutilagem} titulo="Cutilagem" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

        <BoxServicos imagem={Esmaltacao} titulo="Esmaltação" descricao="Esmaltação com foco em unhas naturais" />

        <BoxServicos imagem={Esmaltes} titulo="Esmaltes" descricao="Utilizamos esmaltes diferenciados de ótima qualidade para um melhor resultado" />
      </Flex>
    </div>
  );
}
export default Servicos;
