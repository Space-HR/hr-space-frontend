import { FC } from 'react';
import { useFormikContext } from 'formik';
import './FeeRadioButton.scss';
import { TFormModel } from '../../../Form/WorkConditionsForm/WorkConditionsForm';

type TRadioButtonProps = {
	field: {
		value: number;
		name: string;
	};
	id: number;
	label: string;
	name: string;
};

const FeeRadioButton: FC<TRadioButtonProps> = ({ field, id, label, name }) => {
	const { setFieldValue } = useFormikContext<TFormModel>();

	const stringId = `${name}-${id}`;
	const handleChange = () => setFieldValue(name, id);

	return (
		<label
			htmlFor={stringId}
			className={
				field.value === id
					? 'rounded-input rounded-input_checked'
					: 'rounded-input'
			}
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

export default FeeRadioButton;
