import React from "react";
import Header from "../../componentes/Header";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import "./Servicos.css";
import Tabela from "../../componentes/Tabela";
import ImagemPrecos from "../../imagens/img-precos.png";
import Cutilagem from "../../imagens/cutilagem.png";
import Esmaltacao from "../../imagens/esmaltacao.png";
import Esmaltes from "../../imagens/esmaltes.png";
import BoxServicos from "../../componentes/BoxServicos";
import UnhasAmarelo from "../../imagens/unhas-amarelo.png";
import salao01 from "../../imagens/imagem-salao01.jpg";
import salao02 from "../../imagens/imagem-salao02.jpg";
import salao03 from "../../imagens/imagem-salao03.jpg";

function Servicos() {
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <Header />
      <Flex
        p="112px 0 0 0"
        flexDir={"column"}
        gap={"50px"}
        alignItems={"center"}
      >
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
      <Flex justifyContent={"center"} gap={"18px"} m={"100px 0"} color={"#767676"}>
        <BoxServicos
          imagem={Cutilagem}
          titulo="Cutilagem"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <BoxServicos
          imagem={Esmaltacao}
          titulo="Esmaltação"
          descricao="Esmaltação com foco em unhas naturais"
        />
        <BoxServicos
          imagem={Esmaltes}
          titulo="Esmaltes"
          descricao="Utilizamos esmaltes diferenciados de ótima qualidade para um melhor resultado"
        />
      </Flex>
      {isLargerThanMD ? (
        <Flex flexDir={"column"}>
          <Text
            fontSize={{ base: "24px", md: "40px" }}
            color={"#d8b192"}
            fontWeight={"600"}
            textAlign={"center"}
          >
            PRODUTOS
          </Text>
          <Box display={"flex"} m={"50px 0"} gap={"20px"}>
            <Box w={"50vw"} display={"flex"} justifyContent={"end"}>
              <Image src={UnhasAmarelo} height={"400px"} />
            </Box>

            <Box display={"flex"} flexDir={"column"} gap={"20px"}>
              <Box
                w={"50vw"}
                display={"flex"}
                gap={"20px"}
                justifyContent={"start"}
                alignItems={"center"}
              >
                <Image src={salao01} height={"190px"} />
                <Image src={salao02} height={"190px"} />
              </Box>
              <Box
                w={"50vw"}
                display={"flex"}
                gap={"20px"}
                justifyContent={"start"}
                alignItems={"center"}
              >
                <Image src={salao03} height={"190px"} />
                <Image src={UnhasAmarelo} height={"190px"} />
              </Box>
            </Box>
          </Box>
        </Flex>
      ) : (
        <Flex>
          <Box
            justifyContent={"center"}
            display={"flex"}
            flexDir={"row"}
            flexWrap={"wrap"}
            gap={"20px"}
          >
            <Image src={salao01} height={"200px"} />
            <Image src={salao02} height={"200px"} />
            <Image src={salao03} height={"200px"} />
            <Image src={UnhasAmarelo} height={"200px"} />
            <Image src={UnhasAmarelo} height={"200px"} />
          </Box>
        </Flex>
      )}
    </div>
  );
}
export default Servicos;
