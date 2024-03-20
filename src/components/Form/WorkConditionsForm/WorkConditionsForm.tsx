import { FC } from 'react';
import './WorkConditionsForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import SalaryInput from '../../FormElements/SalaryInput/SalaryInput';
import { PropOption } from '../../../types/formik-elements';
import ScheduleRadioButtons from '../../FormElements/RadioButtons/ScheduleRadioButtons/ScheduleRadioButtons';

export type TFormModel = {
	minSalary: number | null;
	maxSalary: number | null;
	scheduleId: number | null;
	scheduleComment: string;
};

const scheduleOptions: PropOption[] = [
	{ id: 0, name: 'Свободный' },
	{ id: 1, name: 'Сменный' },
	{ id: 2, name: 'Вахтовый' },
	{ id: 3, name: '5/2 пн – пт' },
	// { id: 4, name: 'Сменный' },
	// { id: 5, name: 'Вахтовый' },
	// { id: 6, name: 'Сменный' },
	// { id: 7, name: 'Вахтовый' },
];

const WorkConditionsForm: FC = () => {
	const navigate = useNavigate();

	const initialValues = {
		minSalary: null,
		maxSalary: null,
		scheduleId: null,
		scheduleComment: '',
	};

	const validationSchema = Yup.object({
		minSalary: Yup.number()
			.nullable()
			.min(0, 'Минимальная зарплата должна быть больше или равна 0')
			.required('Обязательное поле'),
		maxSalary: Yup.number()
			.nullable()
			.moreThan(
				Yup.ref('minSalary'),
				'Максимальная зарплата должна быть больше минимальной зарплаты'
			)
			.required('Обязательное поле'),
	});

	const onSubmit = (values: TFormModel) => {
		navigate('/form/step-3');

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
							
						</div>
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
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default WorkConditionsForm;
