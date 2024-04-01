import type { Meta, StoryObj } from '@storybook/react';
import AbGrupoOpcoes from '../components/AbGrupoOpcoes';

const meta: Meta<typeof AbGrupoOpcoes> = {
	component: AbGrupoOpcoes,
	title: 'AbGrupoOpcoes',
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		opcoes: [
			{
				id: 1,
				titulo: 'E-book',
				corpo: 'R$00,00',
				rodape: '.pdf, .epub, .mob'
			},
			{
				id: 2,
				titulo: 'E-book',
				corpo: 'R$00,00',
				rodape: '.pdf, .epub, .mob'
			}
		]
	}
}
