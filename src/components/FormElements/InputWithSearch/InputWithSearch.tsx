import { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import ContainerSelectWithSearch from './ContainerSelectWithSearch';
import TextError from '../TextError/TextError';

import { TElementWithSelect } from '../../../types/formik-elements';

const FormikSelectWithSearch: FC<TElementWithSelect> = ({
	label,
	name,
	options,
	placeholder,
	isMulti,
	isTips,
	countTips,
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
				component={ContainerSelectWithSearch}
				{...rest}
				placeholder={placeholder}
				isMulti={isMulti}
				isTips={isTips}
				countTips={countTips}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default FormikSelectWithSearch;
