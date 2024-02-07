import React from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import { AspectRatio, Box, Flex } from "@chakra-ui/react";
import Manicure from "../../imagens/manicure.jpg";

function Contato() {
    return (
        <div>
            <Header />
            <Footer />

            <Flex justifyContent="center" alignItems="center" height="150vh">
                <Flex direction="column" align="center">
                    <Flex>
                        <Box w="400px" h="200px" bg="red.200" m="2">
                            {Manicure}
                        </Box>
                        <Box w="200px" h="200px" m="2">
                            <h2>
                                Contate nosso salão
                            </h2>
                            <h3> Entre em contato e marque um horário </h3>
                            <h4>(011)97481-0911</h4>
                        </Box>
                    </Flex>
                    <Flex>
                        <Box w="400px" h="200px" bg="green.200" m="2">
                            <AspectRatio ratio={16 / 9}>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                                />
                            </AspectRatio>
                        </Box>
                        <Box w="200px" h="200px" m="2">
                            <h2>Localização</h2>
                            <h3> Rua Brenardino de Sena, 107 </h3>
                            <h4>Casa Verde - SP</h4>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    )
}
export default Contato;