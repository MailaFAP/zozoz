import { PhoneIcon } from "@chakra-ui/icons";
import Instagram from "../../assets/insta.png";
import "./Footer.css";
import Logo from "../Logo";
import LogoFooter from "../../assets/logofooter.jpg";
import { Link } from "react-router-dom";
import { Circle, HStack, Image } from "@chakra-ui/react";

function Footer() {
	return (
		<div className="footer">
			<footer>
				<div className="logoFooter">
					<Logo imagem={LogoFooter} size="8rem" />
				</div>
				<div className="contato-footer">
					<h2>Contato</h2>
					<HStack>
						<Circle size="30px" bg="white" color="#92d8b6">
							 <a href="https://api.whatsapp.com/send?phone=5511974810911" target="_blank" rel="noreferrer"><PhoneIcon /></a>
						</Circle>
					</HStack>
					<h4>(011)97481-0911</h4>
				</div>

				<div className="localização-footer">
					<h2>Localização</h2>
					<h4>
					<a href="https://maps.app.goo.gl/v17zcuiM36RxPFEt6" target="_blank">
						Rua: Bernardino de Sena, 107
						<br />
						Casa Verde
						<br />
						São Paulo </a>
					</h4>
				</div>

				<div className="social-footer">
					<h2>Social</h2>
					<HStack>
						<Link
							to="https://www.instagram.com/estudio_zozoz?igsh=ZjRiYnZrdDB3YjBn"
							isExternal
						>
							<Circle size="30px" bg="white">
								<Image src={Instagram} />
							</Circle>
						</Link>
					</HStack>
				</div>
				<div className="devs">
					<hr />
					<p>
						Desenvolvido por : Amanda Araújo | Maila Ferreira | Myllena Miranda
						Martins <br />
						<a href="https://www.flaticon.com/br/icones-gratis/whatsapp"
                    title="whatsapp ícones" className="dir-autorais">Whatsapp ícones criados por Fathema Khanom - Flaticon</a>
					</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
