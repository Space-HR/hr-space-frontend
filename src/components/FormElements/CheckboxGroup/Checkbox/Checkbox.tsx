import { FC } from 'react';
import { Field, useFormikContext } from 'formik';
import './Checkbox.scss';
import { TFormModel } from '../../../Form/WorkConditionsForm/WorkConditionsForm';

type TCheckboxProps = {
	field: {
		value: number[];
		name: string;
	};
	id: number;
	label: string;
	name: string;
};

const Checkbox: FC<TCheckboxProps> = ({ field, id, label, name }) => {
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
		<label htmlFor={stringId} className="checkbox">
			<Field
				type="checkbox"
				id={stringId}
				value={id}
				checked={isChecked}
				className="checkbox__input"
				onChange={handleChange}
			/>
			<span className="checkbox__custom" />
			{label}
		</label>
	);
};

export default Checkbox;


