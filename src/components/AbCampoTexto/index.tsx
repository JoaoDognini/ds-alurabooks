import React from 'react';
import '@fontsource/poppins';
import styled from "styled-components";

const StyledCampoTexto = styled.div`
	font-family: 'Poppins', sans-serif;
	h1 {
		padding-left: 16px;
		font-size: 16px;
		font-weight: 700;
		color: #002F52;
	}
	input {
		border: 1px solid #002F52;
		border-radius: 24px;
		width: 509px;
		font-size: 16px;
		height: 44px;
		padding: 0 1rem;
	}
`

type AbCampoTextoProps = {
	nomeCampo: string;
	tipo: 'password' | 'email';
}

const AbCampoTexto = ({ nomeCampo, tipo }: AbCampoTextoProps) => {
	const placeholder = tipo === 'password' ? '********' : 'seuemail@email.com';

	return (
		<StyledCampoTexto>
			<h1>{nomeCampo}</h1>
			<input type={tipo} placeholder={placeholder} />
		</StyledCampoTexto>
	)
}

export default AbCampoTexto