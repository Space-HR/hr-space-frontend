import { FC } from 'react';
import './RadioButtonGroup.scss';
import { ErrorMessage } from 'formik';
import Label from '../../Label/Label';
import RadioButton from '../RadioButton/RadioButton';
import TextError from '../../TextError/TextError';

type TPropRadioOption = {
	id: number;
	booleanValue: boolean;
	label: string;
};

export type TElementWithOptions = {
	label: string;
	name: string;
	options: TPropRadioOption[];
};

const RadioButtonGroup: FC<TElementWithOptions> = ({
	label,
	name,
	options,
}) => {

	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			
			<div className="rounded-input-row">
				{options.map((option) => (
				<RadioButton
					key={option.id}
					name={name}
					label={option.label}
					booleanValue={option.booleanValue}
				/>
			))}
			</div>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default RadioButtonGroup;
