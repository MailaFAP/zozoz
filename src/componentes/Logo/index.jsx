import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import logoMenu from "../../imagens/logo.jpeg"

function Logo({ size }){
    return (
        <Link to="/" display="block">
            <Image src={logoMenu} lt="Logo zozoz" width={size} />
        </Link>
    )
}

export default Logo;