import { FC } from 'react';
import './CandidateRequirementForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import { PropOption } from '../../../types/formik-elements';
import RadioButtons from '../../FormElements/RadioButtons/RadioButtons';

export type TFormModel = {
	employeeExperienceId: number | null;
	employeeEducationId: number | null;
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
	const navigate = useNavigate();

	const initialValues = {
		employeeExperienceId: null,
		employeeEducationId: null,
	};

	const validationSchema = Yup.object({});

	const onSubmit = (values: TFormModel) => {
		navigate('/form/step-4');

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
								name="employeeExperienceId"
								options={employeeExperience}
							/>
							<RadioButtons
								label="Образование"
								name="employeeEducationId"
								options={employeeEducation}
							/>
						</div>
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
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default CandidateRequirementForm;
