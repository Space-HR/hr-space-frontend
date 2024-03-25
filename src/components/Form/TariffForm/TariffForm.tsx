import { FC } from 'react';
import './TariffForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import NumericInput from '../../FormElements/NumericInput/NumericInput';
import TariffRadioButtons from '../../FormElements/TariffRadioButtons/TariffRadioButtons';
import QtyRecruitersRadioButtons from '../../FormElements/QtyRecruitersRadioButtons/QtyRecruitersRadioButtons';
import FeeRadioButtons from '../../FormElements/FeeRadioButtons/FeeRadioButtons';
import { calculateMediaSalary } from '../../../utils/calculateMediaSalary';

export type TFormModel = {
	qtyEmployees: number;
	paymentForEmployee: number | undefined;
	tariffId: number | undefined;
	qtyRecruiters: number;
	labelForChoose: number | undefined;
	feeName: number | undefined;
};

type TtariffIdOption = {
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

const options = [1, 2, 3];

const minSalary = 0;
const maxSalary = 200000;

const TariffForm: FC = () => {
	const fieldNames = {
		qtyEmployees: 'qtyEmployees',
		paymentForEmployee: 'paymentForEmployee',
		tariffId: 'tariffId',
		qtyRecruiters: 'qtyRecruiters',
		labelForChoose: 'labelForChoose',
		feeName: "feeName",
	};

	const navigate = useNavigate();

	const initialValues = {
		qtyEmployees: 1,
		paymentForEmployee: undefined,
		tariffId: 0,
		qtyRecruiters: 1,
		labelForChoose: undefined,
		feeName: undefined,
	};

	const medianSalary = calculateMediaSalary({ minSalary, maxSalary });

	type TFeeOption = {
		id: number;
		name: string;
		fee: number | undefined
	}

	const feeOptions: TFeeOption[] = [
		{ id: 0, name: `${medianSalary * 1.5} ₽`, fee: medianSalary * 1.5 },
		{ id: 1, name: `${medianSalary * 2} ₽`, fee: medianSalary * 2 },
		{ id: 2, name: 'Назначить самостоятельно', fee: undefined },
	];


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
							<FeeRadioButtons
								label="Вознаграждение за сотрудника"
								name={fieldNames.paymentForEmployee}
								options={feeOptions}
								placeholder="Введите вознаграждение в рублях"
								feeName={fieldNames.feeName}
							/>
							<TariffRadioButtons
								label="Модель оплаты"
								name={fieldNames.tariffId}
								options={tariffIdOptions}
							/>
							<QtyRecruitersRadioButtons
								label="Количество рекрутеров"
								name={fieldNames.qtyRecruiters}
								options={options}
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
