import { Fragment, FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import { PropElement, selectedField } from '../../../types/formik-elements';

const RadioButtons: FC<PropElement> = ({ label, name, options, ...rest }) => {
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field name={name} {...rest}>
				{({ field }: selectedField) => {
					return (
						options &&
						options.map((option) => {
							return (
								<Fragment key={option.id}>
									<input
										type="radio"
										id={option.id}
										{...field}
										value={option.id}
										checked={field.value === option.id}
									/>
									<label htmlFor={option.id}>{option.value}</label>
								</Fragment>
							);
						})
					);
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default RadioButtons;
