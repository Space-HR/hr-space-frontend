import { FC } from 'react';
import './SalaryInput.scss';
import { ErrorMessage, Field } from 'formik';
import currency from '../../../images/currency.svg';
import TextError from '../TextError/TextError';
import Label from '../Label/Label';
import { handleKeyDown } from '../../../utils/inputsRestrictions';

const SalaryInput: FC = () => {
	

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
