import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

function NavLink({ href, text }) {
    return (
        <Box>
            <Link to={href}>
            <Text color="gray.800">{text}</Text>
            </Link>
        </Box>
    )
}

export default NavLink;