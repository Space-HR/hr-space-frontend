import { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import { TElementWithOptions } from '../../../types/formik-elements';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import Label from '../Label/Label';

type TCheckboxGroupField = {
	field: {
		name: string;
		value: number[];
	};
};

const CheckboxGroup: FC<TElementWithOptions> = ({ label, name, options }) => {
	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<div className="rounded-input-row">
				<Field name={name}>
					{({ field }: TCheckboxGroupField) => {
						return (
							options &&
							options.map((option) => {
								return (
									<CheckboxInput
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

export default CheckboxGroup;
