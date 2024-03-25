import { FC } from 'react';
import './SimpleCheckbox.scss';
import { Field } from 'formik';

type TRadioButtonProps = {
	label: string;
	name: string;
	labelPosition?: 'left' | 'right';

};

const SimpleCheckbox: FC<TRadioButtonProps> = ({ label, name, labelPosition = 'right'}) => {
	return (
		<label className={labelPosition === 'right' ? "checkbox" : "checkbox  checkbox_reverse"} htmlFor={label}>
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
