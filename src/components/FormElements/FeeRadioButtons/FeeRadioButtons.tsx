import { FC } from 'react';
import './FeeRadioButtons.scss';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import TextError from '../TextError/TextError';
import Label from '../Label/Label';
import FeeRadioButton from './FeeRadioButton/FeeRadioButton';
import { handleKeyDown } from '../../../utils/inputsRestrictions';

// import Input from '../Input/Input';

type TFeeOption = {
	id: number;
	name: string;
	fee: number | undefined;
};
type TFeeRadioButtonsProps = {
	label: string;
	name: string;
	options: TFeeOption[];
	placeholder: string;
	feeName: string;
};

type TFormValues = { [key: string]: number };

const FeeRadioButtons: FC<TFeeRadioButtonsProps> = ({
	label,
	name,
	options,
	placeholder,
	feeName,
}) => {
	const { values } = useFormikContext<TFormValues>();

	const idFee = values[feeName];

	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<div className="rounded-input-row">
				{options.map((option) => (
					<FeeRadioButton
						key={option.id}
						label={option.name}
						name={name}
						id={option.id}
						fee={option.fee}
						feeName={feeName}
					/>
				))}
				{idFee === 2 && (
					<Field
						placeholder={placeholder}
						id={name}
						name={name}
						type="number"
						min={0}
						max={10000000000}
						step="1"
						className="input-self-fee"
						onKeyDown={handleKeyDown}
					/>
				)}
			</div>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default FeeRadioButtons;
