import { FC } from 'react';
import './FeeRadioButtons.scss';
import { ErrorMessage, useFormikContext } from 'formik';
import TextError from '../TextError/TextError';
import Label from '../Label/Label';
import Input from '../Input/Input';
// import FeeRadioButton from './FeeRadioButton/FeeRadioButton';

// type TRadioSelectedField = {
// 	field: {
// 		name: string;
// 		value: number;
// 	};
// };

// type TOption = {
// 	id: number;
// 	name: string;
// 	value: number | undefined;
// }[];

type TRadioButtonsProps = {
	label: string;
	nameLabel: string;
	name: string;
	medianSalary: number;
	placeholder?: string;
};

type TFormValues = {
	[key: string]: number;
};

const FeeRadioButtons: FC<TRadioButtonsProps> = ({
	label,
	name,
	nameLabel,
	// medianSalary,
	// ...rest
}) => {
	const { values } = useFormikContext<TFormValues>();
	console.log(values);

	const SelectId = values[nameLabel];

	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<div className="rounded-input-row">
				{/* <FeeRadioButton label={`${medianSalary * 1.5} ₽` }/> */}
			</div>
			{SelectId === 2 && (
				<Input
					placeholder="Дополнительный комментарий"
					name="scheduleComment"
					type="text"
				/>
			)}
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default FeeRadioButtons;
