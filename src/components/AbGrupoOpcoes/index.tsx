import React, { useState } from 'react';
import '@fontsource/poppins';
import styled from "styled-components";

const StyledSection = styled.section<{ selecionado: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: center;
	background: ${props => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFF'};
	border: ${props => props.selecionado ? 'none' : '1px solid'};
	border-color: #EB9B00;
	width: 194px;
	height: 88px;
	border-radius: 8px;
	margin: 10px;
	padding: 0.5rem;
	font-family: 'Poppins', sans-serif;
	header {
		color: ${props => props.selecionado ? '#FFF' : '#EB9B00;'};
		font-size: 12px;
		font-weight: 400;
	}
	div {
		color: ${props => props.selecionado ? '#FFF' : '#EB9B00;'};
		font-weight: 700;
		font-size: 16px;
	}
	footer {
		color: ${props => props.selecionado ? '#FFF' : 'rgba(0, 0, 0, 0.54);'};
	}
`

export interface AbGrupoOpcoesProps {
	opcoes: AbGrupoOpcao[]
	valorPadrao?: AbGrupoOpcao | null
	onChange?: (opcao: AbGrupoOpcao) => void
}

export interface AbGrupoOpcao {
	id: number,
	titulo: string,
	corpo: string,
	rodape: string
}

const AbGrupoOpcoes = ({ opcoes, valorPadrao, onChange }: AbGrupoOpcoesProps) => {
	const [selecionado, setSelecionado] = useState<AbGrupoOpcao | null>(valorPadrao ?? null);

	const aoSelecionar = (opcao: AbGrupoOpcao): void => {
		setSelecionado(opcao)
		if (onChange) { onChange(opcao) };
	}

	return (
		<>
			{opcoes.map(opcao =>
				<StyledSection
					key={opcao.id}
					onClick={() => aoSelecionar(opcao)}
					selecionado={selecionado?.id == opcao.id}
				>
					<header>
						{opcao.titulo}
					</header>
					<div>
						<b>{opcao.corpo}</b>
					</div>
					<footer>
						{opcao.rodape}
					</footer>
				</StyledSection>
			)}
		</>
	)
}

export default AbGrupoOpcoes