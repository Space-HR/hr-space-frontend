import { FC, useState } from 'react';
import './RecruiterRequirementForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import DatePicker from '../../FormElements/DatePicker/DatePicker';
import MultiLineInput from '../../FormElements/MultiLineInput/MultiLineInput';
import CheckboxGroup from '../../FormElements/CheckboxGroup/CheckboxGroup/CheckboxGroup';
import { PropOption } from '../../../types/formik-elements';
import Popup from '../../Popup/Popup';

export type TFormModel = {
	employeeWillGoToWorkAt: Date | null;
	recruiterTasks: number[];
	resumeAfterInterview: boolean;
	skillsRecruiter: string;
	stopList: string;
};

const recruiterTasksOptions: PropOption[] = [
	{ id: 0, name: 'Поиск и предоставление релевантных резюме' },
	{
		id: 1,
		name: 'Организация собеседований с заказчиком, синхронизация по времени соискателя и заказчика',
	},
	{ id: 2, name: 'Запрос рекомендаций с предыдущих мест работы' },
	{ id: 3, name: 'Отправка кандидату тестового задания' },
	{
		id: 4,
		name: 'Отправка кандидату анкеты службы безопасности вашей компании',
	},
	{ id: 5, name: 'Отправка финалисту приглашения на работу' },
];

const RecruiterRequirementForm: FC = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

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
		// navigate('/form/step-5');
		setIsPopupOpen(true);
		console.log('Form data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<>
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
