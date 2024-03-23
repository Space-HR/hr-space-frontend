import { FC, ChangeEvent, useState, useEffect } from 'react';
import './SelectWithSearch.scss';
import {
	// SelectProps,
	PropOption,
	PropOptions,
} from '../../../../types/formik-elements';
// import deleteIcon from '../../../../images/trash-icon.svg';

type SingleSelectProps = {
	value?: PropOption;
	isMulti?: false;
	// eslint-disable-next-line no-unused-vars
	onChange: (value: PropOption | undefined) => void;
};

type MultiSelectProps = {
	value: PropOptions;
	isMulti: true;
	// eslint-disable-next-line no-unused-vars
	onChange: (value: PropOptions) => void;
};

type SelectProps = {
	options: PropOptions;
	name: string;
	placeholder?: string;
	isTips?: boolean;
	countTips?: number;
} & (MultiSelectProps | SingleSelectProps);

const SelectWithSearch: FC<SelectProps> = ({
	options,
	value,
	name,
	placeholder,
	isMulti,
	isTips,
	countTips,
	onChange,
}) => {
	const [valueInput, setValueInput] = useState(isMulti ? '' : value?.name);
	const [openOptions, setOpenOptions] = useState(false);
	const [filterOptions, setFilterOptions] = useState(options);
	const [countTipsNew, setCountTipsNew] = useState<number | undefined>(
		countTips
	);

	useEffect(() => {
		if (!countTips && isTips) {
			setCountTipsNew(4);
		}

		if (Number(countTips) < 0 && countTips !== 0 && isTips) {
			setCountTipsNew(4);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function selectOption(option: PropOption) {
		if (isMulti) {
			setValueInput('');
			if (value.includes(option)) {
				onChange(value.filter((o) => o !== option));
			} else {
				onChange([...value, option]);
			}
		} else {
			setValueInput(option.name);
			onChange(option);
		}
	}

	function isOptionSelected(option: PropOption) {
		return isMulti ? value.includes(option) : option === value;
	}

	const filterData = (e: ChangeEvent<HTMLInputElement>) => {
		setOpenOptions(true);

		const filterValue = options?.filter((option) =>
			option.name.toLowerCase().includes(e.target.value.trim().toLowerCase())
		);

		// arr1.filter(item => !arr2.includes(item))
		//  .filter((o) => o !== value));
		if (isMulti) {
			setFilterOptions(filterValue.filter((item) => !value.includes(item)));
		} else {
			setFilterOptions(filterValue);
			// setFilterOptions(filterValue.filter((item) => value?.id !== item.id));
		}
	};

	// const handleClickOption = (e: ChangeEvent<HTMLLIElement>, option: PropOption | undefined) => {
	// 	e.stopPropagation();
	// 	selectOption(option);
	// 	setOpenOptions(false);
	// };

	const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
		e.stopPropagation();

		if (!isMulti) {
			if (value?.name.includes(e.target.value)) {
				setValueInput(value?.name);
			} else {
				setValueInput('');
			}
		}
		// setOpenOptions(false);
	};

	return (
		<div
			className="form-control"
			onBlur={() => setOpenOptions(false)}
			// onClick={() => setOpenOptions((prev) => !prev)}
			onKeyDown={() => {}}
			role="presentation"
		>
			<div className="form-control__container">
				{isMulti ? (
					<div className="selectedOptions">
						{value.map((v) => (
							<button
								className="selectedOptions__button"
								key={v.name}
								onClick={(e) => {
									e.stopPropagation();
									selectOption(v);
								}}
							>
								{v.name}
							</button>
						))}
					</div>
				) : (
					''
				)}
				<input
					type="text"
					name={name}
					className="form-control__input"
					placeholder={placeholder}
					onChange={(e) => {
						setValueInput(e.target.value);
						filterData(e);
					}}
					onBlur={handleBlur}
					value={valueInput}
				/>
				{isTips ? (
					<ul className="tips">
						{options.slice(0, countTipsNew).map((option) => (
							<li
								className={`tips__item ${isOptionSelected(option) ? 'tips__item-selected' : ''}`}
								key={option.id}
								onClick={(e) => {
									e.stopPropagation();
									selectOption(option);
									setOpenOptions(false);
								}}
								onKeyDown={() => {}}
								role="presentation"
							>
								{option.name}
							</li>
						))}
					</ul>
				) : null}
				<ul
					className={`options ${openOptions ? 'options_active' : ''} ${isTips ? 'options_tips' : ''}`}
				>
					{filterOptions.length === 0 ? (
						<li className="options__item options__item-none" key="none">
							Нет доступной опции. Введите другое значение.
						</li>
					) : (
						filterOptions.map((option) => (
							<li
								className={`options__item ${isOptionSelected(option) ? 'options__item-selected' : ''}`}
								key={option.id}
								onClick={(e) => {
									e.stopPropagation();
									selectOption(option);
									setOpenOptions(false);
								}}
								onKeyDown={() => {}}
								role="presentation"
							>
								{option.name}
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
};

export default SelectWithSearch;
