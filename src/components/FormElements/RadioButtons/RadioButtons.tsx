import { FC } from 'react';
import './RadioButtons.scss';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import { TElementWithOptions } from '../../../types/formik-elements';
import Label from '../Label/Label';
import RadioButton from './RadioButton/RadioButton';

type TRadioSelectedField = {
	field: {
		name: string;
		value: number;
	};
};

const RadioButtons: FC<TElementWithOptions> = ({
	label,
	name,
	options,
	...rest
}) => {
	return (
		<div className="rounded-input-conainer">
			<Label name={name} label={label} />
			<div className="rounded-input-conainer__input-row">
				<Field name={name} {...rest}>
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

			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default RadioButtons;
