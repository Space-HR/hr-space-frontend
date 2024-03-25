import { FC } from 'react';
import './SimpleCheckbox.scss';
import { Field } from 'formik';

type TRadioButtonProps = {
	label: string;
	name: string;
};

const SimpleCheckbox: FC<TRadioButtonProps> = ({ label, name }) => {
	return (
		<label className="checkbox" htmlFor={name}>
			{label}
			<Field
				id={name}
				type="checkbox"
				name={name}
				className="checkbox__input"
			/>
			<span className="checkbox__custom" />
		</label>
	);
};

export default SimpleCheckbox;
