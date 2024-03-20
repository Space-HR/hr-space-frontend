import { FC } from 'react';
import './RadioButton.scss';

type TRadioButtonProps = {
	field: {
		value: number;
		name: string;
	};
	id: number;
	label: string;
	setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void; 
	name: string;

};

const RadioButton: FC<TRadioButtonProps> = ({ field, id, label, setFieldValue, name }) => {
	const stringId = id.toString();
	const stringValue = field.value.toString();

	const handleChange = () => setFieldValue(name, id);

	return (
		<label
			htmlFor={stringId}
			className={
				stringId === stringValue
					? 'rounded-input rounded-input_checked'
					: 'rounded-input'
			}
			key={id}
		>
			<input
				type="radio"
				id={stringId}
				{...field}
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
