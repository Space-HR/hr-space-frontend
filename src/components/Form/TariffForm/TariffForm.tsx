import { FC } from 'react';
import './TariffForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import NumericInput from '../../FormElements/NumericInput/NumericInput';
import TariffRadioButtons from '../../FormElements/TariffRadioButtons/TariffRadioButtons';
// import { calculateMediaSalary } from '../../../utils/calculateMediaSalary';
// import FeeRadioButtons from '../../FormElements/FeeRadioButtons/FeeRadioButtons';

export type TFormModel = {
	qtyEmployees: number;
	paymentForEmployee: number | undefined;
	tariffId: number;
	qtyRecruiters: number;
	labelForChoose: number | undefined;
};


type TtariffIdOption =  {
	id: number;
	name: string;
	payment_for_employee_start_working: number;
	payment_for_employee_after_guarantee: number;
	guarantee_period: number;
	units_of_measurement_warranty_period: string;
	description: string;
};

const tariffIdOptions: TtariffIdOption[] = [
	{
		id: 0,
		name: '100% за выход сотрудника',
		payment_for_employee_start_working: 100,
		payment_for_employee_after_guarantee: 0,
		guarantee_period: 1,
		units_of_measurement_warranty_period: 'month',
		description:
			'Отличный вариант, чтобы на заявку откликнулись «звездные» рекрутеры с опытом.',
	},
	{
		id: 1,
		name: '50% - после выхода, 50% - после гарантийного периода',
		payment_for_employee_start_working: 50,
		payment_for_employee_after_guarantee: 50,
		guarantee_period: 1,
		units_of_measurement_warranty_period: 'month',
		description:
			'Гарантийный период — испытательный срок. 1 месяц после выхода сотрудника.',
	},
	{
		id: 2,
		name: '100% - после гарантийного периода',
		payment_for_employee_start_working: 0,
		payment_for_employee_after_guarantee: 100,
		guarantee_period: 1,
		units_of_measurement_warranty_period: 'month',
		description:
			'Это 1 месяц после выхода сотрудника. Доступен выбор одного рекрутера.',
	},
];

// const minSalary = 0;
// const maxSalary = 200000;

const TariffForm: FC = () => {
	const fieldNames = {
		qtyEmployees: 'qtyEmployees',
		paymentForEmployee: 'paymentForEmployee',
		tariffId: 'tariffId',
		qtyRecruiters: 'qtyRecruiters',
		labelForChoose: 'labelForChoose',
	};

	const navigate = useNavigate();

	const initialValues = {
		qtyEmployees: 1,
		paymentForEmployee: undefined,
		tariffId: 0,
		qtyRecruiters: 1,
		labelForChoose: undefined,
	};

	// const medianSalary = calculateMediaSalary({ minSalary, maxSalary });
	// const options: TOption[] = [
	// 	{ id: 0, name: `${medianSalary * 1.5} ₽`, value: medianSalary * 1.5 },
	// 	{ id: 1, name: `${medianSalary * 2} ₽`, value: medianSalary * 2 },
	// 	{ id: 2, name: 'Назначить самостоятельно', value: undefined },
	// ];

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
							{/* <FeeRadioButtons
								label="Вознаграждение за сотрудника"
								nameLabel="labelForChoose"
								name={fieldNames.paymentForEmployee}
								placeholder="Введите вознаграждение в рублях"
								medianSalary={medianSalary}
							/> */}
							<TariffRadioButtons
								label="Модель оплаты"
								name={fieldNames.tariffId}
								options={tariffIdOptions}
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
