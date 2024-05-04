import React from "react";
import Header from "../../components/Header";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import dani from "../../assets/imagem-dani.jpg";
import P02 from "../../assets/pontilhado02-contato.png";

function Sobre() {
    return (
        <div>
            <Header />
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="center" backgroundColor="#e5faf0">
                <Box
                    mt={{ base: "79px", md: "70px" }}
                    mb="20px"
                    ml={{ md: "150px" }} // redução de ml
                >
                    <Image src={P02} h={{ base: "300px", md: "400px" }} top={{ base: "80px", md: "60px" }} left={{ md: "310px" }} position={"absolute"} zIndex={"-1"} />
                    <Image
                        name="Dani"
                        src={dani}
                        boxSize={{ base: "200px", md: "360px" }}
                        maxWidth={{ md: "400px" }}
                        maxHeight={{ md: "400px" }}
                        objectFit="cover"
                        borderRadius="full"
                        boxShadow="0px 4px 20px rgba(23, 0, 22, 0.37)"
                    />
                </Box>
                <Box
                    textAlign={{ base: "center", md: "left" }}
                    mt={{ base: "13px", md: "160px" }}
                    // remoção de padding para desktop
                    pl={"40px"}
                    pr={"40px"}
                    pb={"100px"}
                >
                    <Text
                        fontSize={{ base: "x-large", md: "xx-large" }}
                        textAlign={{ base: "center", md: "left" }}
                        marginLeft={{ base: "13px", md: "45px" }}
                        color="#d8b192" 
                        mt={"40px"}
                        fontWeight="600">
                        MINHA HISTÓRIA...
                    </Text>
                    <Text
                        fontSize={{ base: "medium", md: "18px" }}
                        textAlign={{ base: "left", md: "left" }}
                        mt="30px"
                        pl={{ base: "15px", md: "45px" }}
                        pr={{ base: "15px", md: "40px" }}
                        color={"#767676"}
                    >
                        Há alguns anos, eu estava em um emprego com baixa remuneração quando a
                        pandemia chegou, trazendo desafios para todos. Foi nesse período que descobri
                        que estava grávida e precisei encontrar maneiras de melhorar minha situação
                        financeira para cuidar da minha filha. Decidi, então, abrir um salão de manicure
                        na minha garagem. Com determinação, consegui transformar o espaço em um local
                        profissional, conquistando a confiança de várias clientes. Atualmente, consigo
                        conciliar o trabalho com a maternidade, me sentindo realizada e otimista em
                        relação ao futuro.
                    </Text>
                </Box>
            </Flex>
        </div>
    )
}

export default Sobre;
