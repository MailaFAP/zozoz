import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

function BoxServicos({ imagem, titulo, descricao }) {
    return (
        <div>
            <Box maxWidth={"300px"} display={"flex"} gap={"15px"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
          <Image src={imagem} boxSize={{ base: "40px", md: "80px" }} />
          <Text fontSize={{ base: "12px", md: "xl" }} fontWeight={"600"}>{titulo}</Text>
          <Text fontSize={{ base: "10px", md: "xs" }}>{descricao}</Text>
        </Box>
        </div>
    )
}

export default BoxServicos;