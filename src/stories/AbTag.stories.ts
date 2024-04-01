import type { Meta, StoryObj } from '@storybook/react';
import AbTag from '../components/AbTag';

const meta: Meta<typeof AbTag> = {
	component: AbTag,
	title: 'AbTag',
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Tags: Story = {
	args: {
		tags: ['Android', 'OO', 'Marketing Digital', 'Agile', 'Startups', 'HTML & CSS', 'Java', 'Python']
	}
}