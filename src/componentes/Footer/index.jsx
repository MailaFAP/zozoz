import React from "react";
import { PhoneIcon } from "@chakra-ui/icons";
import Instagram from "../../imagens/insta.png"
import "./Footer.css"
import Logo from "../Logo";
import LogoFooter from "../../imagens/logofooter.jpg"

function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="logoFooter">
                    <Logo imagem={LogoFooter} size="8rem" />
                </div>
                <div className="contato-footer">
                    <h2>Contato</h2>
                    <PhoneIcon />
                    <h4>(11)97421-0911</h4>
                </div>

                <div className="localização-footer">
                    <h2>Localização</h2>
                    <h4>Rua: Bernardino de Sena , 107<br />
                        Casa Verde<br />
                        São Paulo
                    </h4>
                </div>

                <div className="social-footer">
                    <h2>Social</h2>
                    <div className="circulo">
                        <img src={Instagram} width="15px" />
                    </div>
                </div>
                <div className="devs">
                    <hr />
                    <p>Desenvolvido por : Amanda Araújo | Maila Ferreira | Myllena Miranda Martins</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer