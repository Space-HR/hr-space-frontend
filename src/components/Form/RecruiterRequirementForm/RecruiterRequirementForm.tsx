import { FC } from 'react';
import './RecruiterRequirementForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import DatePicker from '../../FormElements/DatePicker/DatePicker';
import MultiLineInput from '../../FormElements/MultiLineInput/MultiLineInput';

export type TFormModel = {
	employeeWillGoToWorkAt:  Date | null;
	recruiterTasks: number[];
	resumeAfterInterview: boolean;
	skillsRecruiter: string;
	stopList: string;
};

const RecruiterRequirementForm: FC = () => {
	const fieldNames = {
		employeeWillGoToWorkAt: 'employeeWillGoToWorkAt',
		recruiterTasks: 'recruiterTasks',
		resumeAfterInterview: 'resumeAfterInterview',
		skillsRecruiter: 'skillsRecruiter',
		stopList: 'stopList',
	};

	const navigate = useNavigate();

	const initialValues = {
		employeeWillGoToWorkAt: null,
		recruiterTasks: [],
		resumeAfterInterview: false,
		skillsRecruiter: '',
		stopList: '',
	};

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
							<DatePicker
								name={fieldNames.employeeWillGoToWorkAt}
								label="Желаемая дата выхода сотрудника"
								
							/>
							<MultiLineInput
								label="Требования"
								name={fieldNames.skillsRecruiter}
								placeholder="Введите требования к рекрутеру"
								isLabel
							/>
							<MultiLineInput
								label="Стоп-лист сотрудников"
								name={fieldNames.stopList}
								placeholder="Укажите, если есть, перечень компаний или сотрудников, которых вы не готовы рассматривать"
								isLabel
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

export default RecruiterRequirementForm;
