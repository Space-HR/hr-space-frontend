import { Field } from 'formik';
import { FC } from 'react';

type TRadioButtonProps = {
	name: string;
	label: string;
};

const SimpleChipCheckbox: FC<TRadioButtonProps> = ({ name, label }) => {
	return (
		<label htmlFor={name} className='rounded-input'>
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
