import { FC } from 'react';
import './SpecialistTypeForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormWrapper from '../FormWrapper/FormWrapper';
import { jobTitleServer } from '../../../data/data-form';
import Input from '../../FormElements/Input/Input';
import InputWithSearch from '../../FormElements/InputWithSearch/InputWithSearch';

const SpecialistTypeForm: FC = () => {
	const navigate = useNavigate();

	const initialValues = {
		vacancy: '',
		jobTitle: '',
	};

	const validationSchema = Yup.object({
		vacancy: Yup.string().required('Поле обязателье для заполнения'),
		jobTitle: Yup.string().required('Поле обязателье для заполнения'),
	});

	type FormModel = {
		vacancy: string;
		jobTitle: string;
	};

	// eslint-disable-next-line consistent-return
	const onSubmit = (values: FormModel) => {
		navigate('/form/step-2', { replace: true });

		console.log('Form data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<FormWrapper title="Какого специалиста ищете?">
			<p>Шаг 1</p>
			<Formik<FormModel>
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{/* {formik} */}
				{() => (
					<div className="form">
						<Form>
							<Input
								label="Название вакансии"
								placeholder="Например, контент–менеджер"
								name="vacancy"
								type="text"
							/>
							<InputWithSearch
								label="Должность"
								placeholder="Начните вводить и выберите должность из списка"
								name="jobTitle"
								options={jobTitleServer}
							/>

							<button type="submit">Сохранить и продолжить</button>
						</Form>
					</div>
				)}
			</Formik>
		</FormWrapper>
	);
};

export default SpecialistTypeForm;
