import { FC, ChangeEvent, useState } from 'react';
import './InputWithChips.scss';
import { Field, ErrorMessage, FieldProps } from 'formik';
import TextError from '../TextError/TextError';
import {
	TElementWithOptions,
	PropOptions,
	PropOption,
} from '../../../types/formik-elements';

const InputWithChips: FC<TElementWithOptions> = ({
	label,
	name,
	options,
	placeholder,
	...rest
}) => {
	const [input, setInput] = useState('');
	const [activeList, setActiveList] = useState<boolean>(false);
	const [activeOptions, setActiveOptions] = useState<PropOptions>(options);
	const [selectedList, setSelectedList] = useState<PropOptions>([]);

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

	const setTextInput = (option: PropOption) => {
		setInput(option.name);
		setActiveList(false);
		setSelectedList([...selectedList, option]);
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
							<ul
								className={`options-selected ${selectedList ? 'options-selected_active' : ''}`}
							>
								{selectedList &&
									selectedList.map((option) => {
										return (
											<li
												className="options__item"
												key={option.id}
												onClick={() => setTextInput(option)}
												onKeyDown={() => {}}
												role="presentation"
											>
												{option.name}
											</li>
										);
									})}
							</ul>
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
							<ul className={`options ${activeList ? 'options_active' : ''}`}>
								{activeOptions &&
									activeOptions.map((option) => {
										return (
											<li
												className="options__item"
												key={option.id}
												onClick={() => setTextInput(option)}
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

export default InputWithChips;
