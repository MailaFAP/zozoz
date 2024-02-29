import { IconButton, Box } from "@chakra-ui/react";
import { useState } from "react";
import Menu from "../Menu";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <IconButton colorScheme="transparent"
                icon={isOpen ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={10} />}
                boxSize={12}
                onClick={() => setIsOpen(!isOpen)}
            />
            <Box
                p="2rem 8rem"
                m="0 !important"
                bgColor="#D8B192"
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
