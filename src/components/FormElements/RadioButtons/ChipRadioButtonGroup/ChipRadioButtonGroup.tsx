import { FC } from 'react';
import '../ChipRadioButtonGroup/ChipRadioButtonGroup.scss';
import { Field } from 'formik';
import { TElementWithOptions } from '../../../../types/formik-elements';
import Label from '../../Label/Label';
import ChipRadioButton from '../ChipRadioButton/ChipRadioButton';

type TRadioSelectedField = {
	field: {
		name: string;
		value: number;
	};
};

const ChipRadioButtonGroup: FC<TElementWithOptions> = ({ label, name, options }) => {
	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<div className="rounded-input-row">
				<Field name={name}>
					{({ field }: TRadioSelectedField) => {
						return (
							options &&
							options.map((option) => {
								return (
									<ChipRadioButton
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
		</div>
	);
};

export default ChipRadioButtonGroup;
