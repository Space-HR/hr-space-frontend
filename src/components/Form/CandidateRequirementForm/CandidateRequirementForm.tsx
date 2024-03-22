import { FC } from 'react';
import './CandidateRequirementForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import { PropOption } from '../../../types/formik-elements';
import RadioButtons from '../../FormElements/RadioButtons/RadioButtons';
// import InputWithTips from '../../FormElements/InputWithTips/InputWithTips';
import FormikSelectWithSearch from '../../FormElements/InputWithSearch_/FormikSelectWithSearch';

import { city } from '../../../data/data-form';

// const cityN = city.map((n) => ({
// 	value: n.id,
// 	label: n.name,
// }));

export type TFormModel = {
	employeeExperienceId: number | null;
	employeeEducationId: number | null;
	cityOrganization: number | number[] | null;
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
		cityOrganization: null,
	};

	const validationSchema = Yup.object({
		// cityOrganization: Yup.string().required(
		// 	'Укажите город, где находится организация'
		// ),
	});

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
								name="employeeExperienceId"
								options={employeeExperience}
							/>
							<RadioButtons
								label="Образование"
								name="employeeEducationId"
								options={employeeEducation}
							/>
							{/* <FormikSelectWithSearch
								options={city}
								label="Город организации"
								name="cityOrganization"
								placeholder="Начните вводить и выберите, где находится ваша организация"
								isMulti={false}
							/> */}
							<FormikSelectWithSearch
								options={city}
								label="Город организации"
								name="cityOrganization"
								placeholder="Начните вводить и выберите, где находится ваша организация"
								// eslint-disable-next-line react/jsx-boolean-value
								isMulti={false}
							/>
							{/* <div className="form__elements">
								<InputWithChips
									label="Город организации"
									placeholder="Начните вводить и выберите, где находится ваша организация"
									name="cityOrganization"
									options={city}
								/>
							</div> */}
							{/* <div className="form__elements">
								<InputWithTips
									label="Город организации"
									placeholder="Начните вводить и выберите, где находится ваша организация"
									name="cityOrganization"
									options={cityN}
									// eslint-disable-next-line react/jsx-boolean-value
									isMulti={false}
								/>
							</div> */}
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
