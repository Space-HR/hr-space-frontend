import { FC } from 'react';
import './WorkConditionsForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import SalaryInput from '../../FormElements/SalaryInput/SalaryInput';
import { PropOption } from '../../../types/formik-elements';
import ScheduleRadioButtons from '../../FormElements/RadioButtons/ScheduleRadioButtons/ScheduleRadioButtons';
import CheckboxGroup from '../../FormElements/CheckboxGroup/CheckboxGroup';
import ExtraConditionsInput from '../../FormElements/ExtraConditionsInput/ExtraConditionsInput';
import EmployeeCategoriesInput from '../../FormElements/EmployeeCategoriesInput/EmployeeCategoriesInput';

export type TFormModel = {
	minSalary: number | undefined;
	maxSalary: number | undefined;
	scheduleId: number | undefined;
	scheduleComment: string;
	workFormats: number[];
	workingConditions: string;
	vhl: boolean;
	employeeCategories: number[];
	foreignCitizen: boolean;
	foreignCountries: number[];
};

const scheduleOptions: PropOption[] = [
	{ id: 0, name: '5/2 пн – пт' },
	{ id: 1, name: 'Свободный' },
	{ id: 2, name: 'Сменный' },
	{ id: 3, name: 'Вахтовый' },
	{ id: 4, name: 'Другой' },
];

const workFormatsOptions: PropOption[] = [
	{ id: 0, name: 'В офисе' },
	{ id: 1, name: 'Удаленно' },
	{ id: 2, name: 'Гибрид' },
];

const registerAsSetOptions: PropOption[] = [
	{ id: 0, name: 'ТК РФ' },
	{ id: 1, name: 'Самозанятые' },
	{ id: 2, name: 'ИП' },
	{ id: 3, name: 'ГПХ' },
];

const employeeCategoriesOptions: PropOption[] = [
	{ id: 0, name: 'Студентов' },
	{ id: 1, name: 'От 14 лет' },
	{ id: 2, name: 'От 16 лет' },
	{ id: 3, name: 'С нарушением здоровья' },
];

const WorkConditionsForm: FC = () => {
	const navigate = useNavigate();

	const initialValues = {
		minSalary: undefined,
		maxSalary: undefined,
		scheduleId: undefined,
		scheduleComment: '',
		workFormats: [],
		registerAsSet: [],
		workingConditions: '',
		vhl: false,
		employeeCategories: [],
		foreignCitizen: false,
		foreignCountries: [],
	};

	const validateMinOrMaxSalary = (value: Yup.AnyObject) => {
		const { minSalary, maxSalary } = value || {};

		if (minSalary && maxSalary && maxSalary < minSalary) {
			return new Yup.ValidationError(
			  'Максимальная зарплата не может быть меньше минимальной',
			  value,
			  'minSalary'
			);
		  }

		if (minSalary || maxSalary) {
			return true;
		}
		return new Yup.ValidationError(
			'Укажите зарплату специалиста',
			value,
			'minSalary'
		);
	};

	const validateRegisterAsSet = (value: Yup.AnyObject) => {
		const { registerAsSet } = value || {};
		if (registerAsSet && registerAsSet.length > 0) {
			return true;
		}
		return new Yup.ValidationError(
			'Выберите способ оформления сотрудников',
			value,
			'registerAsSet'
		);
	};

	const validationSchema = Yup.object({
		minSalary: Yup.number(),
		maxSalary: Yup.number(),
	})
		.test(
			'minOrMaxSalary-required',
			'Укажите зарплату специалиста',
			validateMinOrMaxSalary
		)
		.test(
			'registerAsSet-required',
			'Выберите способ оформления сотрудников',
			validateRegisterAsSet
		);

	const onSubmit = (values: TFormModel) => {
		// navigate('/form/step-3');

		console.log('Form data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<Formik<TFormModel>
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formikProps) => (
				<div className="form">
					<Form>
						<div className="input-container">
							<SalaryInput />
							<ScheduleRadioButtons
								label="График работы"
								name="scheduleId"
								options={scheduleOptions}
								currentValues={formikProps.values.scheduleId}
							/>

							<CheckboxGroup
								label="Формат работы"
								name="workFormats"
								options={workFormatsOptions}
							/>
							<CheckboxGroup
								label="Способ оформления"
								name="registerAsSet"
								options={registerAsSetOptions}
							/>
							<ExtraConditionsInput
								label="Дополнительные условия"
								name="workingConditions"
								checkboxName="vhl"
								checkboxLabel="Наличие ДМС"
								placeholder="Например, развитая корпоративная культура"
							/>
							<EmployeeCategoriesInput
								label="Готовы рассмотреть"
								name="employeeCategories"
								options={employeeCategoriesOptions}
								foreignCitizenName="foreignCitizen"
							/>
						</div>
						<div className="two-btn-disposition">
							<Button
								type="button"
								styleType="secondary"
								label="Назад"
								onClick={() => navigate('/form/step-1')}
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

export default WorkConditionsForm;
