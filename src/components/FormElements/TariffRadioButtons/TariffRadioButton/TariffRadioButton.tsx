import { FC } from 'react';
import { useFormikContext } from 'formik';
import './TariffRadioButton.scss';

type TRadioButtonProps = {
	field: {
		value: number;
		name: string;
	};
	id: number;
	label: string;
	name: string;
	description: string;
};

const TariffRadioButton: FC<TRadioButtonProps> = ({
	field,
	id,
	label,
	name,
	description,
}) => {
	const { setFieldValue } = useFormikContext();

	const stringId = `${name}-${id}`;
	const handleChange = () => setFieldValue(name, id);

	return (
		<div>
			<label
				htmlFor={stringId}
				className={
					field.value === id
						? 'tariff-input tariff-input_checked'
						: 'tariff-input'
				}
			>
				<input
					type="radio"
					id={stringId}
					value={id}
					checked={field.value === id}
					className="tariff-input__hidden-block"
					onChange={handleChange}
				/>
				<div
					className={
						field.value === id
							? 'tariff-input__line tariff-input__line_checked'
							: 'tariff-input__line'
					}
				>
					<p className="tariff-input__description">{description}</p>
				</div>
				{label}
			</label>
		</div>
	);
};

export default TariffRadioButton;
