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
								<Fragment key={option.key}>
									<input
										type="radio"
										id={option.key}
										{...field}
										value={option.key}
										checked={field.value === option.key}
									/>
									<label htmlFor={option.key}>{option.value}</label>
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
