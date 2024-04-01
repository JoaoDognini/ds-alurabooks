import type { Meta, StoryObj } from '@storybook/react';
import AbCampoTexto from '../components/AbCampoTexto';

const meta: Meta<typeof AbCampoTexto> = {
	component: AbCampoTexto,
	title: 'AbCampoTexto'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Email: Story = {
	args: {
		nomeCampo: 'E-mail',
		tipo: 'email'
	}
}

export const Senha: Story = {
	args: {
		nomeCampo: 'Senha',
		tipo: 'password'
	}
}