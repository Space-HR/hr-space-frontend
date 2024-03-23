import { ReactNode } from 'react';

export type PropOption = {
	id: number;
	name: string;
};

export type PropOptions = PropOption[];

export type TElementWithOptions = {
	label: string;
	name: string;
	options: PropOptions;
	placeholder?: string;
};

export type TElementWithSelect = {
	label: string;
	name: string;
	options: PropOptions;
	placeholder?: string;
	isMulti: boolean;
	isTips: boolean;
	countTips?: number;
};

export type SelectProps = {
	options: PropOptions;
	value?: PropOption;
	name: string;
	placeholder?: string;
	isMulti?: boolean;
	// eslint-disable-next-line no-unused-vars
	onChange: (value: PropOption | PropOptions | undefined) => void;
};

export type PropInput = {
	label?: string;
	name: string;
	placeholder: string;
	type: string;
};

export type selectedField = {
	field: {
		name: string;
		value: string;
	};
};

export type TDatePicker = {
	label: string;
	name: string;
};

export type PropDatePicker = {
	form: any;
	field: any;
};

export type PropTextError = {
	children?: ReactNode | string;
};
