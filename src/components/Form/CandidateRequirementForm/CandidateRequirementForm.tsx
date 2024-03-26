import { FC } from 'react';
import './CandidateRequirementForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import ChipRadioButtonGroup from '../../FormElements/RadioButtons/ChipRadioButtonGroup/ChipRadioButtonGroup';
import MultiLineInput from '../../FormElements/MultiLineInput/MultiLineInput';
import InputWithSearch from '../../FormElements/InputWithSearch/InputWithSearch';
import { requirements } from '../../../data/data-form';
import {
	employeeEducationOptions,
	employeeExperienceOptions,
} from '../../../utils/fakeData';

export type TFormModel = {
	employeeExperienceId: number | undefined;
	employeeEducationId: number | undefined;
	employeeSkills: number[];
	employeeAddSkills: string[];
	responsibilitiesEmployee: string;
	requirements: number | number[] | undefined;
};
const fieldNames = {
	employeeExperienceId: 'employeeExperienceId',
	employeeEducationId: 'employeeEducationId',
	employeeSkills: 'employeeSkills',
	employeeAddSkills: 'employeeAddSkills',
	responsibilitiesEmployee: 'responsibilitiesEmployee',
	requirements: 'requirements',
};

const CandidateRequirementForm: FC = () => {
	const initialValues = {
		employeeExperienceId: undefined,
		employeeEducationId: undefined,
		employeeSkills: [],
		employeeAddSkills: [],
		responsibilitiesEmployee: '',
		requirements: undefined,
	};
	const navigate = useNavigate();

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
							<ChipRadioButtonGroup
								label="Опыт работы"
								name={fieldNames.employeeExperienceId}
								options={employeeExperienceOptions}
							/>
							<ChipRadioButtonGroup
								label="Образование"
								name={fieldNames.employeeEducationId}
								options={employeeEducationOptions}
							/>
							<InputWithSearch
								label="Требования"
								name={fieldNames.requirements}
								options={requirements}
								placeholder="Начните вводить и выберите требования"
								// eslint-disable-next-line react/jsx-boolean-value
								isMulti={true}
								// eslint-disable-next-line react/jsx-boolean-value
								isTips={false}
							/>
							<MultiLineInput
								label="Обязанности"
								name={fieldNames.responsibilitiesEmployee}
								placeholder="Введите обязанности сотрудника"
								isLabel
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
