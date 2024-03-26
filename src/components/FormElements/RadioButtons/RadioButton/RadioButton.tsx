import { FC } from 'react';
import { useField, useFormikContext } from 'formik';
import './RadioButton.scss';

type TRadioButtonProps = {
	name: string;
	label: string;
	booleanValue: boolean;
};

const RadioButton: FC<TRadioButtonProps> = ({ name, label, booleanValue }) => {
	const [field] = useField(name);
	const { setFieldValue } = useFormikContext();

	const handleChange = () => {
		setFieldValue(name, booleanValue);
	};

	return (
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		<label className="radio">
			<input
				type="radio"
				{...field}
				value={booleanValue.toString()}
				checked={field.value === booleanValue}
				className="radio__input"
				onChange={handleChange}
			/>

			<span className="radio__custom" />
			{label}
		</label>
	);
};

export default RadioButton;
