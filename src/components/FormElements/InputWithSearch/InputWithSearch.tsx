import { FC, FormEvent, useState } from 'react';
import './InputWithSearch.scss';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import { PropElement } from '../../../types/formik-elements';

const InputWithSearch: FC<PropElement> = ({
	label,
	name,
	options,
	placeholder,
	...rest
}) => {
	const [activeList, setActiveList] = useState<boolean>(false);

	const handleChange = (e: FormEvent) => {
		if (options?.length !== 0) setActiveList(true);

		console.log(e);
	};

	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<div className="form-control__container">
				<Field
					id={name}
					name={name}
					{...rest}
					placeholder={placeholder}
					type="text"
					onChange={handleChange}
					className="form-control__input"
				/>
				<ul className={`options ${activeList ? 'options_active' : ''}`}>
					{options &&
						options.map((option) => {
							return (
								<li className="options__item" key={option.id}>
									{option.value}
								</li>
							);
						})}
				</ul>
			</div>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default InputWithSearch;
