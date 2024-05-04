import React from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import "./Table.css";

function Table_services() {
	return (
		<div>
			<Table variant="simple" marginTop={"30px"}>
				<Thead>
					<Tr>
						<Th
							colSpan={"2"}
							fontSize={{ base: "x-large", md: "xx-large" }}
							color={"#d8b192"}
							fontWeight={"600"}
							textAlign={"center"}
						>
							SERVIÇOS & PREÇOS
						</Th>
					</Tr>
				</Thead>
				<Tbody color={"#767676"}>
					<Tr>
						<Td className="td-precos" textAlign={"center"}>Esmaltação</Td>
						<Td className="td-precos" textAlign={"center"}>$18,00</Td>
					</Tr>
					<Tr>
						<Td className="td-precos" textAlign={"center"}>Cutilagem</Td>
						<Td className="td-precos" textAlign={"center"}>$50,00</Td>
					</Tr>
					<Tr>
						<Td className="td-precos" textAlign={"center"}>Spa dos pés</Td>
						<Td className="td-precos" textAlign={"center"}>$20,00</Td>
					</Tr>					
				</Tbody>
			</Table>
		</div>
	);
}

export default Table_services;
