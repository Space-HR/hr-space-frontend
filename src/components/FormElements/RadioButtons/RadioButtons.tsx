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

type TRadioButtonsProps = TElementWithOptions & {
	setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  };

const RadioButtons: FC<TRadioButtonsProps> = ({
	label,
	name,
	options,
	setFieldValue,
	...rest
}) => {
	return (
		<div className="radio-buttons">
			<Label name={name} label={label} />
			<div className="radio-buttons__row-comtainer">
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
										setFieldValue={setFieldValue} 
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
