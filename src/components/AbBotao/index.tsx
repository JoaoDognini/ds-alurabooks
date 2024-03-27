import React from 'react';
import styled, { css } from "styled-components";

const StyledBotao = styled.button<AbBotaoProps>`
  color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#FFF' : '#eb9b00'};
  background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#eb9b00' : '#FFF'};
  border: 2px solid #eb9b00;
  padding: 1rem 2rem;
  font-size: 20px;
  cursor: pointer;
  ${(props: AbBotaoProps) => props.tipo === 'primario'
    ? css`
      &:hover {
        background: #b87900;
        border: 2px solid #b87900;
      }`
    : css`
      &:hover {
        background: #FFF;
        border: 2px solid #b87900;
        color: #b87900;
      } 
    `
  }
`

type AbBotaoProps = {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const AbBotao = ({ texto, tipo = 'primario', onClick }: AbBotaoProps) => {
  return (
    <StyledBotao onClick={onClick} tipo={tipo}>
      {texto}
    </StyledBotao>
  )
}

export default AbBotao