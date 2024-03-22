import { FC } from 'react';
import './MultiLineInput.scss';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import TextError from '../TextError/TextError';
import Label from '../Label/Label';

type TMultiLineInputProps = {
	label?: string ;
	name: string;
	placeholder: string;
	isLabel?: boolean;
};

type TFormValues = {
	[key: string]: string;
};

const MultiLineInput: FC<TMultiLineInputProps> = ({
	label,
	name,
	placeholder,
	isLabel,
}) => {
	const { errors } = useFormikContext<TFormValues>();

	const inputClassName = errors[name]
		? 'textarea-input error'
		: 'textarea-input';

	return (
		<div className="input-conainer">
			{isLabel && label && <Label label={label} name={name} />}

			<Field
				as="textarea"
				id={name}
				name={name}
				placeholder={placeholder}
				className={inputClassName}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default MultiLineInput;
