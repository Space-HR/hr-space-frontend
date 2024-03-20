import { FC } from 'react';
import './Input.scss';
import { Field, ErrorMessage, FieldProps } from 'formik';
import TextError from '../TextError/TextError';
import { PropInput } from '../../../types/formik-elements';

const Input: FC<PropInput> = ({ label, name, ...rest }) => {
	return (
		<div className="form-control">
			<label className="form-control__title" htmlFor={name}>
				{label}
			</label>
			<Field name={name}>
				{({ field, form }: FieldProps) => (
					<input
						className={`form-control__input ${form.errors[name] && form.touched[name] ? 'form-control__error' : ''}`}
						{...field}
						{...rest}
					/>
				)}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default Input;
