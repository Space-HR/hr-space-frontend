import { FC, ChangeEvent, useState } from 'react';
import './InputWithSearch.scss';
import { Field, ErrorMessage, FieldProps } from 'formik';
import TextError from '../TextError/TextError';
import {
	TElementWithOptions,
	PropOptions,
} from '../../../types/formik-elements';

const InputWithSearch: FC<TElementWithOptions> = ({
	label,
	name,
	options,
	placeholder,
	...rest
}) => {
	const [activeList, setActiveList] = useState<boolean>(false);
	const [activeOption, setActiveOption] = useState<PropOptions>(options);

	const search = (e: ChangeEvent<HTMLInputElement>) => {
		if (options?.length !== 0 && e.target.value.trim().length > 0) {
			const filterValue = options?.filter((option) =>
				option.value.toLowerCase().includes(e.target.value.trim().toLowerCase())
			);
			setActiveOption(filterValue);

			setActiveList(true);
		} else {
			setActiveList(false);
		}
	};

	// const myClick = (value: string) => {
	// 	setActiveOption(value);

	// 	console.log(activeOption);
	// };

	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<div className="form-control__container">
				<Field name={name} className="form-control__input">
					{({ field }: FieldProps) => (
						<>
							<input
								type="text"
								{...field}
								{...rest}
								placeholder={placeholder}
								onChange={(e) => {
									field.onChange(e);
									search(e);
								}}
							/>
							<ul className={`options ${activeList ? 'options_active' : ''}`}>
								{activeOption &&
									activeOption.map((option) => {
										return (
											<li className="options__item" key={option.id}>
												{option.value}
											</li>
										);
									})}
							</ul>
						</>
					)}
				</Field>
			</div>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default InputWithSearch;
