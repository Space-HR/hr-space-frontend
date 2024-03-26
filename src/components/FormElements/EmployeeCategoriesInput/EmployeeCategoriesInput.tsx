import { FC } from 'react';
import { Field, useFormikContext } from 'formik';
import { PropOptions } from '../../../types/formik-elements';
import Label from '../Label/Label';
import ChipCheckbox from '../CheckboxGroup/ChipCheckbox/ChipCheckbox';
import SimpleChipCheckbox from '../CheckboxGroup/SimpleChipCheckbox/SimpleChipCheckbox';
import InputWithSearch from '../InputWithSearch/InputWithSearch';

import { countries } from '../../../data/data-form';

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

type TFormValues = {
	[key: string]: boolean;
};

const EmployeeCategoriesInput: FC<TEmployeeCategoriesInputProps> = ({
	label,
	name,
	options,
	foreignCitizenName,
}) => {
	const { values } = useFormikContext<TFormValues>();
	const isForeignCitizenName = values[foreignCitizenName];
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
				{isForeignCitizenName ? (
					<InputWithSearch
						label=""
						name={`${foreignCitizenName}Countries`}
						options={countries}
						placeholder="Страны, из которых готовы рассмотреть специалистов"
						// eslint-disable-next-line react/jsx-boolean-value
						isMulti={true}
						// eslint-disable-next-line react/jsx-boolean-value
						isTips={false}
					/>
				) : null}
			</div>
		</div>
	);
};

export default EmployeeCategoriesInput;
