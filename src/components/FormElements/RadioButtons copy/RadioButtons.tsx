import { FC } from 'react';
import './RadioButtons.scss';
import { Field } from 'formik';
import { TElementWithOptions } from '../../../types/formik-elements';
import Label from '../Label/Label';
import RadioButton from './RadioButton/RadioButton';

type TRadioSelectedField = {
	field: {
		name: string;
		value: number;
	};
};

const RadioButtons: FC<TElementWithOptions> = ({ label, name, options }) => {
	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<div className="rounded-input-row">
				<Field name={name}>
					{({ field }: TRadioSelectedField) => {
						return (
							options &&
							options.map((option) => {
								return (
									<RadioButton
										key={option.id}
										id={option.id}
										label={option.name}
										field={field}
										name={name}
									/>
								);
							})
						);
					}}
				</Field>
			</div>
		</div>
	);
};

export default RadioButtons;
