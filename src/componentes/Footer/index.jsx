import React from "react";
import { PhoneIcon } from "@chakra-ui/icons";
import Instagram from "../../imagens/instagram.png"

function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="contato-footer">
                    <h1>Contato</h1>
                    <PhoneIcon />
                    <h4>(11)97421-0911</h4>
                </div>

                <div className="localização-footer">
                    <h1>Localização</h1>
                    <h4>Rua: Bernardino de Sena , 107
                        Casa Verde
                        São Paulo</h4>
                </div>

                <div className="social-footer">
                    <h1>Social</h1>
                    <h4>
                        Siga nosso perfil nas redes sociais
                    </h4>
                    <img src={Instagram} width="20px" />
                </div>

                <hr />

                <p>Desenvolvido por : Amanda Araújo | Maila Ferreira | Myllena Miranda Martins</p>
            </footer>
        </div>
    )
}

export default Footer