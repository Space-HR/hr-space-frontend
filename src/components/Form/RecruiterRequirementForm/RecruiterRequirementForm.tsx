import { FC, useState } from 'react';
import './RecruiterRequirementForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import DatePicker from '../../FormElements/DatePicker/DatePicker';
import MultiLineInput from '../../FormElements/MultiLineInput/MultiLineInput';
import CheckboxGroup from '../../FormElements/CheckboxGroup/CheckboxGroup/CheckboxGroup';
import Popup from '../../Popup/Popup';
import RadioButtonGroup from '../../FormElements/RadioButtons/RadioButtonGroup/RadioButtonGroup';
import SimpleCheckbox from '../../FormElements/CheckboxGroup/SimpleCheckbox/SimpleCheckbox';
import {
	recruiterTasksOptions,
	resumeAfterInterviewOptions,
} from '../../../utils/fakeData';

export type TRadioFormModel = {
	employeeWillGoToWorkAt: Date | null;
	recruiterTasks: number[];
	resumeAfterInterview: boolean | undefined;
	skillsRecruiter: string;
	stopList: string;
	notPrivatePerson: boolean;
};

const fieldNames = {
	employeeWillGoToWorkAt: 'employeeWillGoToWorkAt',
	recruiterTasks: 'recruiterTasks',
	resumeAfterInterview: 'resumeAfterInterview',
	skillsRecruiter: 'skillsRecruiter',
	stopList: 'stopList',
	notPrivatePerson: 'notPrivatePerson',
};

const RecruiterRequirementForm: FC = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const navigate = useNavigate();

	const initialValues = {
		employeeWillGoToWorkAt: null,
		recruiterTasks: [],
		resumeAfterInterview: undefined,
		skillsRecruiter: '',
		stopList: '',
		notPrivatePerson: false,
	};

	const validationSchema = Yup.object({
		recruiterTasks: Yup.array()
			.of(Yup.number())
			.min(1, 'Отметьте, что входит в обязанности рекрутера'),
		resumeAfterInterview: Yup.boolean().required('Выберите один из вариантов'),
	});

	const onSubmit = (values: TRadioFormModel) => {
		setIsPopupOpen(true);
		console.log('Form data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<>
			<Formik<TRadioFormModel>
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
								<CheckboxGroup
									label="Что входит в работу рекрутера?"
									name={fieldNames.recruiterTasks}
									options={recruiterTasksOptions}
								/>
								<RadioButtonGroup
									label="В каком виде нужно предоставить резюме кандидатов?"
									name={fieldNames.resumeAfterInterview}
									options={resumeAfterInterviewOptions}
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
								<SimpleCheckbox
									name={fieldNames.notPrivatePerson}
									label="Я принимаю условия «Оферты назаключение договора о использовании   веб-сервиса HR-Space»"
									labelPosition="left"
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
									label="Сохранить и просмотреть заявку"
								/>
							</div>
						</Form>
					</div>
				)}
			</Formik>
			<Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
		</>
	);
};

export default RecruiterRequirementForm;
