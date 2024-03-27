import type { Meta, StoryObj } from '@storybook/react';
import AbBotao from '../components/AbBotao';

const meta: Meta<typeof AbBotao> = {
	component: AbBotao,
	title: 'AbBotao'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Primario: Story = {
	args: {
		texto: 'Clicar',
		tipo: 'primario'
	}
}

export const Secundario: Story = {
	args: {
		texto: 'Clicar',
		tipo: 'secundario'
	}
}