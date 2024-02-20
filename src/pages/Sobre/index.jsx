import React from "react";
import Header from "../../componentes/Header";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import dani from "../../imagens/imagem-dani.jpg";
import "./Sobre.css";

function Sobre (){
    return(
        <div >
            <Header />
            <Flex className="container-sobre" flexDirection="column" alignItems="center" display="Flex">
                <Box
                    className="container-avatar"
                    mt="220px"
                    mb="20px"
                >
                    <Avatar
                        className="avatar"
                        name="Dani"
                        src={dani}
                        size={{ base: "2xl", md: "3xl" }}
                        borderRadius="full"
                        boxShadow="0px 4px 6px rgba(23, 0, 22, 0.37)"
                    />
                </Box>
                <Text
                    className="container-texto"
                    textAlign="center"
                    mt={{ base: "13px", md: "0" }}
                    pl={{ base: "40px", md: "100px" }}
                    pr={{ base: "40px", md: "100px" }}
                >
                    <Text className="titulo" fontSize={{ base: "x-large", md: "xx-large" }} color="#d8b192" fontWeight="600"> Minha história... </Text>
                    <Text 
                        className="paragrafo"
                       fontSize="medium"
                       mt="13px"
                       pl="15px"
                       pr="15px"
                    >
                    Olá, sou a Dani, a mente criativa por trás deste espaço encantador. 
                        Estou comprometida em oferecer serviços de alta qualidade, utilizando produtos de qualidade 
                        para garantir resultados impecáveis...
                    </Text>
                </Text>
            </Flex>
        </div>
    )
}

export default Sobre;
