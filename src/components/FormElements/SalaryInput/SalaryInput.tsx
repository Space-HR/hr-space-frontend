import React, { FC } from 'react';
import './SalaryInput.scss';
import { ErrorMessage, Field } from 'formik';
import currency from '../../../images/currency.svg';
import TextError from '../TextError/TextError';
import Label from '../Label/Label';

const c: FC = () => {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const allowedKeys = [
			'Backspace',
			'Delete',
			'Tab',
			'Escape',
			'Enter',
			'ArrowLeft',
			'ArrowRight',
			'ArrowUp',
			'ArrowDown',
			'Home',
			'End',
		];

		// Разрешаем: Ctrl+A, Command+A
		if (e.key === 'a' && (e.ctrlKey === true || e.metaKey === true)) {
			return;
		}

		// Разрешаем: backspace, delete, tab, escape, enter, стрелки, home, end
		if (allowedKeys.includes(e.key)) {
			return;
		}

		// Разрешаем: цифры на основной клавиатуре и на дополнительной (numpad)
		const isNumberKey =
			(e.key >= '0' && e.key <= '9') ||
			(e.key >= 'Numpad0' && e.key <= 'Numpad9');

		// Убеждаемся, что это число и останавливаем событие keypress, если это не так
		if (!isNumberKey && !e.ctrlKey && !e.metaKey) {
			e.preventDefault();
		}
	};

	return (
		<div className="salary-input">
			<div className="salary-input__label-container">
				<Label name="salaryInput" label="Зарплата" />
				<p className="salary-input__comment">Gross - до вычета НДФЛ</p>
			</div>
			<div>
				<div className="salary-input__field-container">
					<Field
						placeholder="От"
						id="minSalary"
						name="minSalary"
						type="number"
						min={0}
						step="1"
						className="salary-input__field"
						onKeyDown={handleKeyDown}
					/>
					<Field
						placeholder="До"
						id="maxSalary"
						name="maxSalary"
						type="number"
						min={0}
						step="1"
						className="salary-input__field"
						onKeyDown={handleKeyDown}
					/>
					<div className="salary-input__img-container">
						<img
							className="salary-input__currency-img"
							src={currency}
							alt="currency"
						/>
					</div>
				</div>

				<ErrorMessage name="minSalary" component={TextError} />
			</div>
		</div>
	);
};

export default SalaryInput;
