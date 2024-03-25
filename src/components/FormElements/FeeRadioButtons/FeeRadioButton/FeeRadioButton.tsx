import { FC } from 'react';
import { useField, useFormikContext } from 'formik';
import './FeeRadioButton.scss';
import { TFormModel } from '../../../Form/WorkConditionsForm/WorkConditionsForm';

type TRadioButtonProps = {
	id: number;
	label: string;
	name: string;
	fee: number | undefined;
	feeName: string;
};

const FeeRadioButton: FC<TRadioButtonProps> = ({
	id,
	label,
	name,
	fee,
	feeName,
}) => {
	const [field] = useField(name);
	const { setFieldValue } = useFormikContext<TFormModel>();

	const handleChange = () => {
		setFieldValue(name, fee);
		setFieldValue(feeName, id);

	};

	return (
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		<label className="rounded-input">
			<input
				type="radio"
				name={feeName}
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
