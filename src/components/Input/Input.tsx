import { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import { PropInput } from '../../types/formik-elements';

const Input: FC<PropInput> = ({ label, name, ...rest }) => {
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field id={name} name={name} {...rest} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default Input;
