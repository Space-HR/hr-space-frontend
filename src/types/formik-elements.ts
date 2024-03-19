import { ReactNode } from 'react';

export type PropOption = {
	id: string;
	value: string;
};

export type PropOptions = PropOption[];

export type TElementWithOptions = {
	label: string;
	name: string;
	options: PropOptions;
	placeholder?: string;
};

export type PropInput = {
	label: string;
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
	children?: ReactNode;
};
