import { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import { TElementWithOptions } from '../../../types/formik-elements';

const Select: FC<TElementWithOptions> = ({ label, name, options, ...rest }) => {
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field as="select" id={name} name={name} {...rest}>
				{options &&
					options.map((option) => {
						return (
							<option key={option.id} value={option.id}>
								{option.name}
							</option>
						);
					})}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default Select;
