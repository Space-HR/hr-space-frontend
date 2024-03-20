import { FC } from 'react';
import { FormikHelpers } from 'formik';

import './RadioButton.scss';

type TFormValues = {
	scheduleId: number;
};

type TRadioButtonProps = {
	field: {
		value: number;
		name: string;
	};
	id: number;
	label: string;
	setFieldValue: FormikHelpers<TFormValues>['setFieldValue'];
	name: string;
};

const RadioButton: FC<TRadioButtonProps> = ({
	field,
	id,
	label,
	setFieldValue,
	name,
}) => {
	const stringId = id.toString();

	const handleChange = () => setFieldValue(name, id);

	return (
		<label
			htmlFor={stringId}
			className={
				field.value === id
					? 'rounded-input rounded-input_checked'
					: 'rounded-input'
			}
			key={id}
		>
			<input
				type="radio"
				id={stringId}
				value={id}
				checked={field.value === id}
				className="rounded-input__hidden-block"
				onChange={handleChange}
			/>

			{label}
		</label>
	);
};

export default RadioButton;
