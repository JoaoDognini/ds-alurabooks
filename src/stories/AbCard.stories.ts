import type { Meta, StoryObj } from '@storybook/react';
import AbCard from '../components/AbCard';

const meta: Meta<typeof AbCard> = {
	component: AbCard,
	title: 'AbCard'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		autor: 'Vitor Zanini',
		preco: '29,90',
		subtitulo: 'Habilidades de gestão para alavancar sua carreira',
		titulo: 'Liderança em Design'
	}
}