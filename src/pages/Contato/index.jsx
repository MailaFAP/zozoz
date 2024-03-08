import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";
import Manicure from "../../assets/unha.png";
import Follow from "../../assets/follow.png";
import "./Contato.css";
import IconFollwow from "../../assets/social.jpg";
import Pontilhado from "../../assets/pontilhado01-contato.png";
import P02 from "../../assets/pontilhado02-contato.png";
import Traco from "../../assets/traco-contato.png";

function Contato() {
	return (
		<div className="contato-container">
			<Header />
			<Flex className="follow" justifyContent="center">
				<Box position={"relative"} m="112px 0 0 0">
					<Box w="100vw">
						<AspectRatio maxW="100vw" ratio={90 / 30} h="400px">
							<Image src={Follow} />
						</AspectRatio>
					</Box>
					<Box className="box-follow" w={{ base: "270px", md: "500px" }} h={{ base: "180px", md: "200px" }}>
						<Box className="box-icon">
							<Image src={IconFollwow} />
							<Text className="text"> Follow us</Text>
						</Box>
					</Box>
				</Box>
			</Flex>
			<Flex
				className="contato-loc"
				justifyContent="center"
				alignItems="center"
				height="60vh"
				font-family="Montserrat', sans-serif"
			>
				<Flex direction="column" align="center" gap="50px">
					<Flex>
						<Box className="img" w="40vw" m="2">
							<AspectRatio ratio={16 / 9}>
								<Image src={Manicure} />
							</AspectRatio>
						</Box>
						<Box
							className="contate"
							w="45vw"
							h="100px"
							m="1"
							display="flex"
							flexDirection="column"
							justifyContent="center"
							color={"#767676"}
						>
							<h2>CONTATE NOSSO SALÃO</h2>
							<h3>
								{" "}
								Entre em contato e marque um horário <br />
								(011)97481-0911
							</h3>
						</Box>
					</Flex>
					<Flex>
						<Box className="img" w="40vw" m="2" >
							<AspectRatio ratio={16 / 9}>

								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8866540139525!2d-46.646878225790026!3d-23.500591759360294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7c4495dce11%3A0xba43c9689c77c332!2sR.%20Bernardino%20de%20Sena%2C%20107%20-%20Vila%20Ester%20(Zona%20Norte)%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002452-050!5e0!3m2!1spt-BR!2sbr!4v1709327388228!5m2!1spt-BR!2sbr" className="mapa" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

							</AspectRatio>
						</Box>
						<Box
							className="localizacao"
							w="45vw"
							h="100px"
							m="1"
							display="flex"
							flexDirection="column"
							justifyContent="center"
							color={"#767676"}
						>
							<h2>LOCALIZAÇÃO</h2>
							<h3>
								{" "}
								Rua Brenardino de Sena, 107 <br />
								Casa Verde - SP
							</h3>
						</Box>
					</Flex>
				</Flex>
			</Flex>
			<Box className="pontilhado">
				<Image src={Pontilhado} h={"400px"} zIndex={-1} />
			</Box>
			<Box className="pontilhado02">
				<Image src={P02} h={"400px"} zIndex={-1} />
			</Box>
			<Box className="traco">
				<Image src={Traco} h={"300px"} zIndex={-1} />
			</Box>
			<Footer />
		</div>
	);
}

export default Contato;
