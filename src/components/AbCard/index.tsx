import React from 'react';
import styled from 'styled-components';
import AbBotao from '../AbBotao';
import Sacola from './imagens/Sacola.png';
import Favorito from './imagens/Favoritos.png';
import '@fontsource/poppins';

const StyledCard = styled.div`
	* {
		margin: 0;
	}
	display: flex;
	padding: 3rem;
	max-width: fit-content;
	font-family: 'Poppins', sans-serif;
	border-radius: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledCardInformacoes = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h1 {
		color: #EB9B00;
		font-size: 32px;
		padding-bottom: 1rem;
	}

	h2 {
		font-size: 18px;
		color: #002F52;
		padding-bottom: 1.5rem;
	}
`;

const StyledCardSubtitulo = styled.div`
	p {
		font-size: 14px;
		opacity: 85%;
	}
`;

const StyledCardPreco = styled.div`
	padding-top: 2.5rem;
	p {
		font-size: 14px;
		opacity: 54%;
	}

	h1 {
		font-size: 36px;
		color: #002F52;
		font-weight: 900;
		padding: 0;
	}
`;

const StyledCardAcoes = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const StyledCardIcones = styled.div`
	display: flex;
	justify-content: flex-end;
`;

type AbCardProps = {
	titulo: string;
	subtitulo: string;
	autor: string;
	preco: string;
}

const AbCard = ({titulo, subtitulo, autor, preco}: AbCardProps) => {
	return (
		<StyledCard>
			<StyledCardInformacoes>
				<h1>Sobre o livro:</h1>
				<h2>{titulo}</h2>
				<StyledCardSubtitulo>
					<p>{subtitulo}</p>
					<p>Por: {autor}</p>
				</StyledCardSubtitulo>
				<StyledCardPreco>
					<p>A partir de:</p>
					<h1>R${preco}</h1>
				</StyledCardPreco>
			</StyledCardInformacoes>

			<StyledCardAcoes>
				<StyledCardIcones>
					<img src={Sacola} alt='Cesta' />
					<img src={Favorito} alt='Favorito' />
				</StyledCardIcones>
				<AbBotao texto='Comprar'></AbBotao>
			</StyledCardAcoes>
		</StyledCard>
	)
}

export default AbCard