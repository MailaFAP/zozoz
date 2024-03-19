import React from "react";
import Header from "../../components/Header";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import dani from "../../assets/imagem-dani.jpg";
import P02 from "../../assets/pontilhado02-contato.png";

function Sobre() {
    return (
        <div>
            <Header />
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="center">
                <Box
                    mt={{ base: "220px", md: "220px" }}
                    mb="20px"
                    ml={{ md: "150px" }} // redução de ml
                >
                    <Image src={P02} h={{ base: "300px", md: "400px" }} top={{ base: "80px", md: "60px" }} left={{ md: "310px" }} position={"absolute"} zIndex={"-1"} />
                    <Image
                        name="Dani"
                        src={dani}
                        boxSize={{ base: "200px", md: "250px" }}
                        maxWidth={{ md: "400px" }}
                        maxHeight={{ md: "400px" }}
                        objectFit="cover"
                        borderRadius="full"
                        boxShadow="0px 4px 6px rgba(23, 0, 22, 0.37)"
                    />
                </Box>
                <Box
                    textAlign={{ base: "center", md: "left" }}
                    mt={{ base: "13px", md: "160px" }}
                    // remoção de padding para desktop
                    pl={"40px"}
                    pr={"40px"}
                >
                    <Text fontSize={{ base: "x-large", md: "xx-large" }} textAlign={{ base: "left", md: "left" }} marginLeft={{ base: "13px", md: "45px" }} color="#d8b192" fontWeight="600"> MINHA HISTÓRIA... </Text>
                    <Text
                        fontSize={{ base: "medium", md: "20px" }}
                        textAlign={{ base: "left", md: "left" }}
                        mt="13px"
                        pl={{ base: "15px", md: "45px" }}
                        pr={{ base: "15px", md: "40px" }}
                        color={"#767676"}
                    >
                        Olá, sou a Dani, a mente criativa por trás deste espaço encantador.
                        Estou comprometida em oferecer serviços de alta qualidade, utilizando produtos de qualidade
                        para garantir resultados impecáveis...
                    </Text>
                </Box>
            </Flex>
        </div>
    )
}

export default Sobre;
