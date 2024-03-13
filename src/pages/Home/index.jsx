import React from "react";
import Header from "../../components/Header";
import { Box, Image, Flex } from "@chakra-ui/react";
import Home01 from "../../assets/imagem-home01.png"
import Home02 from "../../assets/imagem-home02.png"
import LogoZO from "../../assets/logoZO.png"
import Circulo from "../../assets/imagem-home-circulo.png"

function Home() {
    return (
        <div className="conteiner-home">
            <Header />
            <Flex flexDirection={{ base: "column", md: "row" }} justify="space-between">
                <Box>
                    <Image
                        top={"180px"}
                        display={{ base: "none", md: "block" }}
                        boxSize={{ base: "0px", md: "400px" }}
                        src={Circulo}
                        alt='circulo'
                    />
                    <Image
                        top={40}
                        left={150}
                        boxSize={{ base: "200px", md: "300px" }}
                        src={LogoZO}
                        alt='logo do salão zozoz'
                    />
                </Box>
                <Box>
                    <Image
                        boxSize={{ base: "500px", md: "600px" }}
                        src={Home01}
                        alt='mulher com a mão na frente do rosto'
                        objectFit= {{base: "cover"}}
                        filter= {{base: "blur(3px)", md: "none"}}
                    />
                    <Image
                        position={"absolute"}
                        display={{ base: "none", md: "block" }}
                        top={230}
                        right={550}
                        boxSize={{ base: "0px", md: "200px" }}
                        height={{ base: "0px", md: "300px" }}
                        src={Home02}
                        alt='uma mão em cima de um tecido felpudo'
                    />
                </Box>
            </Flex>
        </div>
    )
}
export default Home;
