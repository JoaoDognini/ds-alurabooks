import React from 'react';
import styled from "styled-components";

type AbTagProps = {
	tags: string[];
	onClick?: () => void;
}

const StyledTag = styled.div`
	color: #FFF;
	padding: 1.5rem 2rem;
	background-color: #EB9B00;
	font-weight: 700;
    font-size: 24px;
`

const StyledBackground = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 3rem;
	justify-content: center;
	gap: 12px;
	background-color: #002F52;
`

const AbTag = ({ tags }: AbTagProps) => {
	return (
		<StyledBackground>
			{tags.map(tag => <StyledTag>{tag}</StyledTag>)}
		</StyledBackground>
	)
}

export default AbTag