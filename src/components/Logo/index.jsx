import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

function Logo({ size, imagem }) {
    return (
        <Link to="/" display="block">
            <Image src={imagem} lt="Logo zozoz" width={size} />
        </Link>
    )
}

export default Logo;