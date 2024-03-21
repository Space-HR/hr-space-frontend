import { FC } from 'react';
import './InputWithTips.scss';
import { Field, ErrorMessage } from 'formik';
import CustomSelect from './CustomSelect/CustomSelect';
import TextError from '../TextError/TextError';

import { TElementWithSelect } from '../../../types/formik-elements';

const InputWithTips: FC<TElementWithSelect> = ({
	label,
	name,
	options,
	placeholder,
	isMulti,
	...rest
}) => {
	return (
		<div className="form-control">
			<label className="form-control__title" htmlFor={name}>
				{label}
			</label>
			<Field
				className="custom-select"
				name={name}
				options={options}
				component={CustomSelect}
				{...rest}
				placeholder={placeholder}
				isMulti={isMulti}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default InputWithTips;
