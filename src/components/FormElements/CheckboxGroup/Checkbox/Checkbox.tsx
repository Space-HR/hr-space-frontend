import { FC } from 'react';
import './Checkbox.scss';
import { Field } from 'formik';

type TRadioButtonProps = {
	label: string;
	name: string;
};

const Checkbox: FC<TRadioButtonProps> = ({ label, name }) => {
	return (
		<label className="checkbox" htmlFor={name}>
			{label}
			<Field
				id={name}
				type="checkbox"
				name={name}
				className="checkbox__input"
			/>
			<span className="checkbox__сustom" />
		</label>
	);
};

export default Checkbox;
