import { FC } from 'react';
import { Field } from 'formik';
import { PropOptions } from '../../../types/formik-elements';
import Label from '../Label/Label';
import ChipCheckbox from '../CheckboxGroup/ChipCheckbox/ChipCheckbox';
import SimpleChipCheckbox from '../CheckboxGroup/SimpleChipCheckbox/SimpleChipCheckbox';

type TCheckboxGroupField = {
	field: {
		name: string;
		value: number[];
	};
};

export type TEmployeeCategoriesInputProps = {
	label: string;
	name: string;
	options: PropOptions;
	foreignCitizenName: string;
};

const EmployeeCategoriesInput: FC<TEmployeeCategoriesInputProps> = ({
	label,
	name,
	options,
	foreignCitizenName,
}) => {
	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<div className="rounded-input-row">
				<Field name={name}>
					{({ field }: TCheckboxGroupField) => {
						return (
							options &&
							options.map((option) => {
								return (
									<ChipCheckbox
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
				<SimpleChipCheckbox
					name={foreignCitizenName}
					label="Иностранных граждан"
				/>
			</div>
		</div>
	);
};

export default EmployeeCategoriesInput;
