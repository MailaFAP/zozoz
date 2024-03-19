import React from "react";
import Header from "../../components/Header";
import { Box, Image, Flex } from "@chakra-ui/react";
import Home01 from "../../assets/imagem-home01.png";
import LogoZO from "../../assets/logoZO.png";
import Sobre from "../Sobre";
import Servicos from "../Servicos";
import Contato from "../Contato";
import WhatsApp from "../../components/whatsapp-link";

function Home() {
	const mainImageProps = {
		src: Home01,
		boxSize: "100%",
		/*max*/height: "100vh",
		alt: "mulher com a mão na frente do rosto",
		objectFit: "cover",
		filter: { base: "blur(3px)", md: "none" }
	};
	const logoImageProps = {
		position:"absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		boxSize: { base: "200px", md: "300px" },
		src: LogoZO ,
		alt: "logo do salão zozoz"
	};

	return (
		<div>
			<div className="container-home">
				<Header />
				<Flex flexDirection={{ base: "column", md: "row" }} justify="space-between">
					<Box position="relative" width="100%">
						<Image
							display={{ base: "block", md: "none" }}
							{...mainImageProps}
						/>
						<Image
							display={{ base: "block", md: "none" }}
							{...logoImageProps}
						/>

						<Image
							display={{ base: "none", md: "block" }}
							{...mainImageProps}
						/>
						<Image
							display={{ base: "none", md: "block" }}
							{...logoImageProps}
						/>
					</Box>
				</Flex>
			</div>
			<Sobre />
			<Servicos />
			<Contato />
			<WhatsApp />
		</div>
	);
}


export default Home;
