import { FC } from 'react';
import './CandidateRequirementForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import { PropOption } from '../../../types/formik-elements';
import RadioButtons from '../../FormElements/RadioButtons/RadioButtons';
import MultiLineInput from '../../FormElements/MultiLineInput/MultiLineInput';
import FormikSelectWithSearch from '../../FormElements/InputWithSearch_/FormikSelectWithSearch';

import { city } from '../../../data/data-form';

export type TFormModel = {
	employeeExperienceId: number | undefined;
	employeeEducationId: number | undefined;
	employeeSkills: number[];
	employeeAddSkills: string[];
	responsibilitiesEmployee: string;
};

const employeeExperience: PropOption[] = [
	{ id: 0, name: 'Без опыта' },
	{ id: 1, name: 'От 1 года до 3 лет' },
	{ id: 2, name: 'От 3 до 6 лет' },
	{ id: 3, name: 'Более 6 лет' },
];
const employeeEducation: PropOption[] = [
	{ id: 0, name: 'Высшее' },
	{ id: 1, name: 'Незаконченное высшее' },
	{ id: 2, name: 'Среднее' },
	{ id: 3, name: 'Среднее специальное' },
];

const CandidateRequirementForm: FC = () => {
	const fieldNames = {
		employeeExperienceId: 'employeeExperienceId',
		employeeEducationId: 'employeeEducationId',
		employeeSkills: 'employeeSkills',
		employeeAddSkills: 'employeeAddSkills',
		responsibilitiesEmployee: 'responsibilitiesEmployee',
		cityOrganization: 'cityOrganization',
	};

	const navigate = useNavigate();

	const initialValues = {
		employeeExperienceId: undefined,
		employeeEducationId: undefined,
		employeeSkills: [],
		employeeAddSkills: [],
		responsibilitiesEmployee: '',
		cityOrganization: '',
	};

	const validateResponsibilitiesEmployee = (value: Yup.AnyObject) => {
		const { responsibilitiesEmployee } = value || {};
		if (responsibilitiesEmployee) {
			return true;
		}
		return new Yup.ValidationError(
			'Укажите обязанности',
			value,
			fieldNames.responsibilitiesEmployee
		);
	};

	const validationSchema = Yup.object({
		minSalary: Yup.number(),
		maxSalary: Yup.number(),
	}).test(
		'responsibilitiesEmployee-required',
		'Укажите обязанности',
		validateResponsibilitiesEmployee
	);

	const onSubmit = (values: TFormModel) => {
		navigate('/form/step-4', { replace: true });
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
							<RadioButtons
								label="Опыт работы"
								name={fieldNames.employeeExperienceId}
								options={employeeExperience}
							/>
							<RadioButtons
								label="Образование"
								name={fieldNames.employeeEducationId}
								options={employeeEducation}
							/>
							<MultiLineInput
								label="Обязанности"
								name={fieldNames.responsibilitiesEmployee}
								placeholder="Введите обязанности сотрудника"
								isLabel
							/>
							<FormikSelectWithSearch
								label="Город организации"
								name={fieldNames.cityOrganization}
								options={city}
								placeholder="Начните вводить и выберите, где находится ваша организация"
								// eslint-disable-next-line react/jsx-boolean-value
								isMulti={false}
								// eslint-disable-next-line react/jsx-boolean-value
								isTips={false}
								// countTips={0}
							/>
						</div>
						<div className="two-btn-disposition">
							<Button
								type="button"
								styleType="secondary"
								label="Назад"
								onClick={() => navigate('/form/step-2')}
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

export default CandidateRequirementForm;
