import { Field, useField } from 'formik';
import { FC } from 'react';

type TRadioButtonProps = {
	name: string;
	label: string;
};

const SimpleChipCheckbox: FC<TRadioButtonProps> = ({ name, label }) => {
	const [field] = useField(name);
	return (
		<label
			htmlFor={name}
			className={
				field.value ? 'rounded-input rounded-input_checked' : 'rounded-input'
			}
		>
			<Field
				id={name}
				type="checkbox"
				name={name}
				className="rounded-input__hidden-block"
			/>
			{label}
		</label>
	);
};

export default SimpleChipCheckbox;
