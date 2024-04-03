import React from "react"
import LinkWhats from "../../assets/whatsapp-link.png"
import { Image } from "@chakra-ui/react"


function WhatsApp() {
    return (
        <div>
            <a href="https://api.whatsapp.com/send?phone=5511974810911" target="_blank" rel="noreferrer">
                
                <Image src={LinkWhats} alt="WhatsApp"
                    boxSize={{ base: "55px", md: "70px" }}
                    position="fixed"
                    bottom="20px"
                    right="20px"
                />
            </a>
        </div>
    )
}

export default WhatsApp;


// <Flex
// 				p="100px 100px 90px 300px"
// 				flexDir={"row"}
// 				gap={"100px"}
// 				alignItems={"center"}
// 			>
// 				<Box>
// 					<Table_services />
// 				</Box>
// 				<Box display={"flex"} justifyContent={"center"}>
// 					<Image src={ImagemPrecos} h="270px" />
// 				</Box>

// 			</Flex>
// 			<Shedule />