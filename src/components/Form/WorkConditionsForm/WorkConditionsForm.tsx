import { FC } from 'react';
import './WorkConditionsForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import SalaryInput from '../../FormElements/SalaryInput/SalaryInput';
import RadioButtons from '../../FormElements/RadioButtons/RadioButtons';
import { PropOption } from '../../../types/formik-elements';

const WorkConditionsForm: FC = () => {
	const navigate = useNavigate();

	const initialValues = {
		minSalary: null,
		maxSalary: null,
		scheduleId: "0",
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

	type FormModel = {
		minSalary: number | null;
		maxSalary: number | null;
		scheduleId: string | null;
	};

	// eslint-disable-next-line consistent-return
	const onSubmit = (values: FormModel) => {
		navigate('/form/step-3');

		console.log('Form data', JSON.parse(JSON.stringify(values)));
	};

	const scheduleOptions: PropOption[] = [{ id: "0", value: 'Свободный' }, { id: "2", value: 'Сменный' }, { id: "3", value: 'Вахтовый' }];

	return (
		<Formik<FormModel>
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{() => (
				<div className="form">
					<Form>
						<div className="input-container">
							<SalaryInput />

							<RadioButtons
								label="График работы"
								name="scheduleId"
								options={scheduleOptions}
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
