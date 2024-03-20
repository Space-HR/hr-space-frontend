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
	const [input, setInput] = useState('');
	const [activeList, setActiveList] = useState<boolean>(false);
	const [activeOptions, setActiveOptions] = useState<PropOptions>(options);

	const setFilterData = (e: ChangeEvent<HTMLInputElement>) => {
		setActiveList(true);

		const filterValue = options?.filter((option) =>
			option.name.toLowerCase().includes(e.target.value.trim().toLowerCase())
		);

		setActiveOptions(filterValue);

		return filterValue;
	};

	const search = (e: ChangeEvent<HTMLInputElement>) => {
		if (activeOptions?.length !== 0 && e.target.value.trim().length > 0) {
			const filterValue = setFilterData(e);
			if (filterValue?.length === 0) setActiveList(false);
		} else if (
			activeOptions?.length === 0 &&
			e.target.value.trim().length > 0
		) {
			setFilterData(e);
		} else {
			setActiveList(false);
			setActiveOptions(options);
		}
	};

	const setTextInput = (value: string) => {
		setInput(value);
		setActiveList(false);
	};

	return (
		<div className="form-control">
			<label className="form-control__title" htmlFor={name}>
				{label}
			</label>
			<div className="form-control__container">
				<Field name={name}>
					{({ field, form }: FieldProps) => (
						<>
							<input
								type="text"
								className={`form-control__input ${form.errors[name] && form.touched[name] ? 'form-control__error' : ''}`}
								{...field}
								{...rest}
								placeholder={placeholder}
								onChange={(e) => {
									field.onChange(e);
									setInput(e.currentTarget.value);
									search(e);
								}}
								value={input}
							/>
							<ul
								className={`options ${activeList ? 'options_active' : ''}`}
								id="style-2"
							>
								{activeOptions &&
									activeOptions.map((option) => {
										return (
											<li
												className="options__item"
												key={option.id}
												onClick={() => setTextInput(option.name)}
												onKeyDown={() => {}}
												role="presentation"
											>
												{option.name}
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
