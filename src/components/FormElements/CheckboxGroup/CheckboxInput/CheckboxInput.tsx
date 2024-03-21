import { FC } from 'react';
import { useFormikContext } from 'formik';
import './CheckboxInput.scss';
import { TFormModel } from '../../../Form/WorkConditionsForm/WorkConditionsForm';

type TRadioButtonProps = {
	field: {
		value: number[];
		name: string;
	};
	id: number;
	label: string;
	name: string;
};

const CheckboxInput: FC<TRadioButtonProps> = ({ field, id, label, name }) => {
	const { setFieldValue } = useFormikContext<TFormModel>();
	const stringId = `${name}-${id}`;
	const isChecked = field.value.includes(id);

	const handleChange = () => {
		const newValue = isChecked
			? field.value.filter((valueId) => valueId !== id)
			: [...field.value, id];

		setFieldValue(name, newValue);
	};

	return (
		<label
			htmlFor={stringId}
			className={
				isChecked ? 'rounded-input rounded-input_checked' : 'rounded-input'
			}
		>
			<input
				type="checkbox"
				id={stringId}
				value={id}
				checked={isChecked}
				className="rounded-input__hidden-block"
				onChange={handleChange}
			/>

			{label}
		</label>
	);
};

export default CheckboxInput;
