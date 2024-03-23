import { FC } from 'react';
import { useFormikContext } from 'formik';
import './QtyRecruitersRadioButton.scss';
import { TFormModel } from '../../../Form/WorkConditionsForm/WorkConditionsForm';

type TRadioButtonProps = {
	field: {
		value: number;
	};
	id: number;
	label: string;
	name: string;
};

const QtyRecruitersRadioButton: FC<TRadioButtonProps> = ({ field, id, label, name }) => {
	const { setFieldValue } = useFormikContext<TFormModel>();

	const stringId = `${name}-${id}`;
	const handleChange = () => setFieldValue(name, id);

	return (
		<label
			htmlFor={stringId}
			className={
				field.value === id
					? 'qty-recruiters-input qty-recruiters-input_checked'
					: 'qty-recruiters-input'
			}
		>
			<input
				type="radio"
				id={stringId}
				value={id}
				checked={field.value === id}
				className="qty-recruiters-input__hidden-block"
				onChange={handleChange}
			/>

			{label}
		</label>
	);
};

export default QtyRecruitersRadioButton;
