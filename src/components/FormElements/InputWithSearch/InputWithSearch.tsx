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

	const search = (e: ChangeEvent<HTMLInputElement>) => {
		if (options?.length !== 0 && e.target.value.trim().length > 0) {
			const filterValue = options?.filter((option) =>
				option.value.toLowerCase().includes(e.target.value.trim().toLowerCase())
			);
			setActiveOptions(filterValue);

			setActiveList(true);
		} else {
			setActiveList(false);
		}
	};

	const setTextInput = (value: string) => {
		setInput(value);
		setActiveList(false);
	};

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
												onClick={() => setTextInput(option.value)}
												onKeyDown={() => {}}
												role="presentation"
											>
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
