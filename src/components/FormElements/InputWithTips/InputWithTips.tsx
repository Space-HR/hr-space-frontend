import { FC, ChangeEvent, useState, useEffect } from 'react';
import './InputWithTips.scss';
import { Field, FieldProps } from 'formik';
import TextError from '../TextError/TextError';
import {
	TElementWithOptions,
	PropOptions,
	PropOption,
} from '../../../types/formik-elements';

const InputWithTips: FC<TElementWithOptions> = ({
	label,
	name,
	options,
	placeholder,
	...rest
}) => {
	const [input, setInput] = useState('');
	const [id, setId] = useState<number>();
	const [activeList, setActiveList] = useState<boolean>(false);
	const [activeOptions, setActiveOptions] = useState<PropOptions>(options);
	const [topCity, setTopCity] = useState<PropOptions>();

	useEffect(() => {
		if (!topCity) {
			const newArCity = options
				.sort((a, b) => {
					return a.id - b.id;
				})
				.slice(0, 4);

			setTopCity(newArCity);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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

	const setTextInput = (value: PropOption) => {
		setInput(value.name);
		setId(value.id);
		setActiveList(false);
	};

	return (
		<div className="form-control">
			<label className="form-control__title" htmlFor={name}>
				{label}
			</label>
			<div className="form-control__container">
				<Field name={name}>
					{({ field, form }: FieldProps) => {
						const isErrorText =
							form.errors[name] && form.touched[name] && !input.trim();
						return (
							<>
								<input
									style={{ display: 'flex' }}
									type="number"
									name={name}
									value={id}
									onChange={(e) => {
										field.onChange(e);
									}}
								/>
								<input
									type="text"
									className={`form-control__input ${isErrorText ? 'form-control__error' : ''}`}
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
								{isErrorText && (
									<TextError>{form.errors[name]?.toString()}</TextError>
								)}
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
								<ul className="tips">
									{topCity &&
										topCity.map((option) => {
											return (
												<li
													className="tips__item"
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
						);
					}}
				</Field>
			</div>
		</div>
	);
};

export default InputWithTips;
