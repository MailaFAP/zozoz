import React from "react";
import Header from "../../componentes/Header";
import { Box, Image, Flex } from "@chakra-ui/react";
import Home01 from "../../imagens/imagem-home01.png"
import Home02 from "../../imagens/imagem-home02.png"
import LogoHome from "../../imagens/logo-home.png"
import Circulo from "../../imagens/imagem-home-circulo.png"

function Home() {
    return (
        <div className="conteiner-home">
            <Header />
            <Flex align="center" justify="space-between">
                <Box>
                    <Image
                        boxSize='400px'
                        src={Circulo}
                        alt='logo do salão zozoz'
                    />

                    <Box position={"absolute"} top={55} left={150}>
                        <Image
                            boxSize='300px'
                            src={LogoHome}
                            alt='logo do salão zozoz'
                        />
                    </Box>
                </Box>
                <Flex >
                    <Box >
                        <Image
                            boxSize='600px'
                            src={Home01}
                            alt='munher com a mão na frente do rosto'
                        />
                        <Box position={"absolute"} top={230} right={550}>
                            <Image
                                boxSize='200px'
                                height={300}
                                src={Home02}
                                alt='uma mão em cima de um tecido felpudo'
                            />
                        </Box>
                    </Box>
                </Flex>
            </Flex>

        </div>
    )
}
export default Home;