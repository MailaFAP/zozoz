import { IconButton, Box } from "@chakra-ui/react";
import { useState } from "react";
import Menu from "../Menu";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <IconButton colorScheme="teal" 
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon /> } 
            boxSize="3rem"
            size="2rem"
            onClick={() => setIsOpen(!isOpen)} 
            />
            <Box
            p="2rem 8rem"
            m="0 !important"
            bgColor="teal"
            position="absolute"
            top="100%"
            left="0"
            w="full"
            display={isOpen ? "flex" : "none"}
            >
                <Menu direction="column" />
            </Box>
        </div>
    )
}

export default MenuMobile;