import type { Meta, StoryObj } from '@storybook/react';
import ImageButton from './ImageButton';

const meta: Meta<typeof ImageButton> = {
	component: ImageButton,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		isFilled: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ImageButton>;

export const Bell: Story = {
	args: {
		children: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
			>
				<g clipPath="url(#clip0_756_11349)">
					<path
						d="M13.334 6.66667C13.334 5.95942 13.6149 5.28115 14.115 4.78105C14.6151 4.28095 15.2934 4 16.0007 4C16.7079 4 17.3862 4.28095 17.8863 4.78105C18.3864 5.28115 18.6673 5.95942 18.6673 6.66667C20.1985 7.3907 21.5039 8.51777 22.4434 9.92707C23.3829 11.3364 23.9212 12.9748 24.0007 14.6667V18.6667C24.101 19.4956 24.3946 20.2894 24.8577 20.9842C25.3209 21.6789 25.9407 22.2552 26.6673 22.6667H5.33398C6.06057 22.2552 6.6804 21.6789 7.14357 20.9842C7.60674 20.2894 7.90031 19.4956 8.00065 18.6667V14.6667C8.08006 12.9748 8.61839 11.3364 9.55792 9.92707C10.4974 8.51777 11.8028 7.3907 13.334 6.66667Z"
						stroke="#6E7070"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12 22.666V23.9993C12 25.0602 12.4214 26.0776 13.1716 26.8278C13.9217 27.5779 14.9391 27.9993 16 27.9993C17.0609 27.9993 18.0783 27.5779 18.8284 26.8278C19.5786 26.0776 20 25.0602 20 23.9993V22.666"
						stroke="#6E7070"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_756_11349">
						<rect width="32" height="32" fill="white" />
					</clipPath>
				</defs>
			</svg>
		),
	},
};

export const Chat: Story = {
	args: {
		children: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
			>
				<g clipPath="url(#clip0_756_11342)">
					<path
						d="M4 26.6642L5.73333 21.4642C4.23526 19.2485 3.69332 16.6247 4.20829 14.0806C4.72326 11.5364 6.26008 9.24506 8.53302 7.63253C10.806 6.02 13.6603 5.19603 16.5655 5.31382C19.4706 5.43161 22.2287 6.48315 24.327 8.27291C26.4254 10.0627 27.7212 12.4689 27.9734 15.0441C28.2257 17.6194 27.4173 20.1885 25.6985 22.2737C23.9797 24.3589 21.4675 25.8183 18.6291 26.3806C15.7906 26.943 12.8189 26.5699 10.2667 25.3308L4 26.6642Z"
						stroke="#6E7070"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_756_11342">
						<rect width="32" height="32" fill="white" />
					</clipPath>
				</defs>
			</svg>
		),
	},
};
