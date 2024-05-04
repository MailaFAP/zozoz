import React from "react";
import Header from "../../components/Header";
import {
	Box,
	Flex,
	Image,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import "./Servicos.css";
import Cutilagem from "../../assets/cutilagem.png";
import Esmaltacao from "../../assets/esmaltacao.png";
import Esmaltes from "../../assets/esmaltes.png";
import BoxServices from "../../components/BoxServices";
import UnhasAmarelo from "../../assets/unhas-amarelo.png";
import salao01 from "../../assets/imagem-salao01.jpg";
import salao02 from "../../assets/imagem-salao02.jpg";
import salao03 from "../../assets/imagem-salao03.jpg";
import Table_services from "../../components/Table";
import Shedule from "../../components/ButtonShedule";
import Manicure from "../../assets/manicure.jpg"

function Servicos() {
	const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

	return (
		<div>
			<Header />
			<Flex
				p={{ base: "60px 0 10px 0", md: "80px 100px 20px 470px" }}
				flexDir={{ base: "column", md: "row" }}
				gap={{ base: "50px", md: "100px" }}
				alignItems={"center"}
				backgroundColor={"#e5faf0"}
			>
				<Box >
					<Table_services />
					<Shedule />
				</Box>						
			</Flex>
			
			<Flex justifyContent={"center"} gap={"18px"} backgroundColor={"#e5faf0"} p={"50px"}>
				<BoxServices
					imagem={Cutilagem}
					titulo="Cutilagem"
					descricao="Remove com precisão o excesso de cutículas, proporcionando uma aparência de unha limpa e bem cuidada."
				/>
				<BoxServices
					imagem={Esmaltacao}
					titulo="Esmaltação"
					descricao="Esmaltação com foco em unhas naturais"
				/>
				<BoxServices
					imagem={Esmaltes}
					titulo="Esmaltes"
					descricao="Utilizamos esmaltes diferenciados de ótima qualidade para um melhor resultado"
				/>
			</Flex>
			{isLargerThanMD ? (
				<Flex flexDir={"column"} p={"80px 0"}backgroundColor={"#e5faf0"}>
					<Text
						fontSize={{ base: "x-large", md: "xx-large" }}
						color={"#d8b192"}
						fontWeight={"600"}
						textAlign={"center"}
					>
						PRODUTOS
					</Text>
					<Box display={"flex"} m={"50px 0"} gap={"20px"}>
						<Box w={"50vw"} display={"flex"} justifyContent={"end"}>
							<Image src={UnhasAmarelo} height={"400px"} />
						</Box>

						<Box display={"flex"} flexDir={"column"} gap={"20px"}>
							<Box
								w={"50vw"}
								display={"flex"}
								gap={"20px"}
								justifyContent={"start"}
								alignItems={"center"}
							>
								<Image src={salao01} height={"190px"} />
								<Image src={salao02} height={"190px"} />
							</Box>
							<Box
								w={"50vw"}
								display={"flex"}
								gap={"20px"}
								justifyContent={"start"}
								alignItems={"center"}
							>
								<Image src={salao03} height={"190px"} />
								<Image src={Manicure} height={"190px"} width={"140px"}/>
							</Box>
						</Box>
					</Box>
				</Flex>
			) : (
				<Flex flexDir={"column"} backgroundColor={"#e5faf0"} p={"50px 0"}>
					<Text
						fontSize={{ base: "24px", md: "40px" }}
						color={"#d8b192"}
						fontWeight={"600"}
						textAlign={"center"}
						mb={"30px"}
					>
						PRODUTOS
					</Text>
					<Box
						justifyContent={"center"}
						display={"flex"}
						flexDir={"row"}
						flexWrap={"wrap"}
						gap={"20px"}
					>
						<Image src={salao01} height={"200px"} />
						<Image src={salao02} height={"200px"} />
						<Image src={salao03} height={"200px"} />
						<Image src={UnhasAmarelo} height={"200px"} />
						<Image src={Manicure} height={"200px"} />
					</Box>
				</Flex>
			)}
		</div>
	);
}
export default Servicos;
