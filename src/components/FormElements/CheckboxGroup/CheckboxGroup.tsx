import { Fragment, FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import {
	TElementWithOptions,
	selectedField,
} from '../../../types/formik-elements';

const CheckboxGroup: FC<TElementWithOptions> = ({
	label,
	name,
	options,
	...rest
}) => {
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
										type="checkbox"
										id={option.id}
										{...field}
										value={option.id}
										checked={
											field.value ? field.value.includes(option.id) : false
										}
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

export default CheckboxGroup;
