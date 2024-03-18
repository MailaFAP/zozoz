import React from "react"
import LinkWhats from "../../assets/whatsapp-link.png"
import { Image } from "@chakra-ui/react"


    function WhatsApp() {
        return(
        <div>
            <a href="https://api.whatsapp.com/send?phone=511974810911" target="_blank">
            <a href="https://www.flaticon.com/br/icones-gratis/whatsapp" title="whatsapp ícones">Whatsapp ícones criados por Fathema Khanom - Flaticon</a>
                <Image src= {LinkWhats} alt="WhatsApp"
                boxSize= {{base: "55px" , md: "70px"}}
                position = "fixed"
                bottom = "20px"
                right = "20px"
                />
            </a>

            
        </div>
        )
    }

export default WhatsApp