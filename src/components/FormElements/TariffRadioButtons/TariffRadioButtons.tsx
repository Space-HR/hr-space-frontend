import { FC } from 'react';
import './TariffRadioButtons.scss';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import Label from '../Label/Label';
import TariffRadioButton from './TariffRadioButton/TariffRadioButton';
// import Input from '../Input/Input';

type TRadioSelectedField = {
	field: {
		name: string;
		value: number;
	};
};

type TtariffIdOption = {
	id: number;
	name: string;
	payment_for_employee_start_working: number;
	payment_for_employee_after_guarantee: number;
	guarantee_period: number;
	units_of_measurement_warranty_period: string;
	description: string;
};

type TRadioButtonsProps = {
	label: string;
	name: string;
	placeholder?: string;
	// currentValues: number | undefined;
	options: TtariffIdOption[];
};

const TariffRadioButtons: FC<TRadioButtonsProps> = ({
	label,
	name,
	options,
	// currentValues,
	...rest
}) => {
	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<div className="rounded-input-row">
				<Field name={name} {...rest}>
					{({ field }: TRadioSelectedField) => {
						return (
							options &&
							options.map((option) => {
								return (
									<TariffRadioButton
										key={option.id}
										id={option.id}
										label={option.name}
										field={field}
										name={name}
										description={option.description}
									/>
								);
							})
						);
					}}
				</Field>
			</div>
			{/* {currentValues !== undefined && (
				<Input
					placeholder="Дополнительный комментарий"
					name="scheduleComment"
					type="text"
				/>
			)} */}
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default TariffRadioButtons;
