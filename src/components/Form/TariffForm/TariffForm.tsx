import { FC } from 'react';
import './TariffForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import NumericInput from '../../FormElements/NumericInput/NumericInput';

export type TFormModel = {
	qtyEmployees: number;
	paymentForEmployee: number | undefined;
	tariffId: number;
	qtyRecruiters: number;
};



// type TtariffIdOption = PropOption & {
// 	payment_for_employee_start_working: number;
// 	payment_for_employee_after_guarantee: number;
// 	guarantee_period: number;
// 	units_of_measurement_warranty_period: string;
// };

// const tariffIdOptions: TtariffIdOption[] = [
// 	{
// 		id: 0,
// 		name: '100% за выход сотрудника',
// 		payment_for_employee_start_working: 100,
// 		payment_for_employee_after_guarantee: 0,
// 		guarantee_period: 1,
// 		units_of_measurement_warranty_period: 'month',
// 	},
// 	{
// 		id: 0,
// 		name: '50% - после выхода, 50% - после гарантийного периода',
// 		payment_for_employee_start_working: 50,
// 		payment_for_employee_after_guarantee: 50,
// 		guarantee_period: 1,
// 		units_of_measurement_warranty_period: 'month',
// 	},
// 	{
// 		id: 0,
// 		name: '100% - после гарантийного периода',
// 		payment_for_employee_start_working: 0,
// 		payment_for_employee_after_guarantee: 100,
// 		guarantee_period: 1,
// 		units_of_measurement_warranty_period: 'month',
// 	},
// ];
// const minSalary = 0;
// const maxSalary = 200000;

const TariffForm: FC = () => {
	const fieldNames = {
		qtyEmployees: 'qtyEmployees',
		paymentForEmployee: 'paymentForEmployee',
		tariffId: 'tariffId',
		qtyRecruiters: 'qtyRecruiters',
	};

	const navigate = useNavigate();

	const initialValues = {
		qtyEmployees: 1,
		paymentForEmployee: undefined,
		tariffId: 0,
		qtyRecruiters: 1,
	};

	// const validateRegisterAsSet = (value: Yup.AnyObject) => {
	// 	const { registerAsSet } = value || {};
	// 	if (registerAsSet && registerAsSet.length > 0) {
	// 		return true;
	// 	}
	// 	return new Yup.ValidationError(
	// 		'Выберите способ оформления сотрудников',
	// 		value,
	// 		fieldNames.registerAsSet
	// 	);
	// };

	const validationSchema = Yup.object();
	// 	.test(
	// 		'registerAsSet-required',
	// 		'Выберите способ оформления сотрудников',
	// 		validateRegisterAsSet
	// 	);

	const onSubmit = (values: TFormModel) => {
		navigate('/form/step-5');
		console.log('Form data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<Formik<TFormModel>
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{() => (
				<div className="form">
					<Form>
						<div className="input-container">
							<NumericInput
								label="Количество сотрудников"
								name={fieldNames.qtyEmployees}
							/>
						</div>
						<div className="two-btn-disposition">
							<Button
								type="button"
								styleType="secondary"
								label="Назад"
								onClick={() => navigate('/form/step-3')}
							/>

							<Button
								type="submit"
								styleType="primary"
								label="Сохранить и продолжить"
							/>
						</div>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default TariffForm;
