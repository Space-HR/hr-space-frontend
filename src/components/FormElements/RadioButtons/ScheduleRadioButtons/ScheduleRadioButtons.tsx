import { FC } from 'react';
import './ScheduleRadioButtons.scss';
import { Field, ErrorMessage } from 'formik';
import TextError from '../../TextError/TextError';
import { TElementWithOptions } from '../../../../types/formik-elements';
import Label from '../../Label/Label';
import RadioButton from '../RadioButton/RadioButton';
import Input from '../../Input/Input';

type TRadioSelectedField = {
	field: {
		name: string;
		value: number;
	};
};

type TRadioButtonsProps = TElementWithOptions & {
	currentValues: number | null;
};

const ScheduleRadioButtons: FC<TRadioButtonsProps> = ({
	label,
	name,
	options,
	currentValues,
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
									<RadioButton
										key={option.id}
										id={option.id}
										label={option.name}
										field={field}
										name={name}
									/>
								);
							})
						);
					}}
				</Field>
			</div>
			{currentValues !== null && currentValues !== undefined && (
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

export default ScheduleRadioButtons;
