import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
	component: Button,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		styleType: {
			options: ['primary', 'secondary'],
			control: { type: 'radio' },
		},
		type: {
			options: ['button', 'submit', 'reset'],
			control: { type: 'select' },
		},
		disabled: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		label: 'Primary Button',
		type: 'button',
		styleType: 'primary',
		disabled: false,
	},
};

export const Secondary: Story = {
	args: {
		label: 'Secondary Button',
		type: 'button',
		styleType: 'secondary',
		disabled: false,
	},
};
