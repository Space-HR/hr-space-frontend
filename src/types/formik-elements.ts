export type PropOption = {
	id: string;
	value: string;
};

export type PropOptions = {
	id: string;
	value: string;
}[];

export type PropFormikControl = {
	control: string;
	label: string;
	name: string;
	options?: PropOptions;
	type?: string;
	placeholder?: string;
};

export type PropElement = Omit<PropFormikControl, 'control'>;

export type PropInput = Pick<PropFormikControl, 'name' | 'label'>;

export type selectedField = {
	field: {
		name: string;
		value: string;
	};
};

export type PropDatePicker = {
	form: any;
	field: any;
};
