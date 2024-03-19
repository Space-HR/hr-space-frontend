import { FC } from 'react';
import './SalaryInput.scss';
import { ErrorMessage, Field } from 'formik';
import currency from '../../../images/currency.svg';
import TextError from '../TextError/TextError';

/* eslint-disable jsx-a11y/label-has-associated-control */

const SalaryInput: FC = () => {
	return (
		<div className="salary-input">
			<label htmlFor="salaryInput" className="salary-input__label">
				Зарплата
			</label>
			<p className="salary-input__comment">Gross - до вычета НДФЛ</p>

			<div className="salary-input__field-container">
				<Field
					placeholder="От"
					id="minSalary"
					name="minSalary"
					type="number"
					min={0}
					step="1"
					className="salary-input__field"
				/>
				<Field
					placeholder="До"
					id="maxSalary"
					name="maxSalary"
					type="number"
					min={0}
					step="1"
					className="salary-input__field"
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
	);
};

export default SalaryInput;
