import { Flex } from "@chakra-ui/react";
import NavLink from "../NavLink";

function Menu( {direction} ) {
    return (
        <Flex gap="5rem" flexDir={direction}>
            <NavLink href="/home" text="Home" />
            <NavLink href="/sobre" text="Sobre" />
            <NavLink href="/servicos" text="Serviços" />
            <NavLink href="/contato" text="Contato" />
        </Flex>
    )
}

export default Menu;