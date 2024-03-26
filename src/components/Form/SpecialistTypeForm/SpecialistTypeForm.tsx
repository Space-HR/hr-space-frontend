import { FC } from 'react';
import './SpecialistTypeForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { jobTitleServer, sphereTitleServer } from '../../../data/data-form';
import Input from '../../FormElements/Input/Input';
import InputWithSearch from '../../FormElements/InputWithSearch/InputWithSearch';
import Button from '../../Buttons/Button/Button';

const SpecialistTypeForm: FC = () => {
	const navigate = useNavigate();

	const initialValues = {
		vacancy: '',
		jobTitle: '',
		sphere: '',
	};

	const validationSchema = Yup.object({
		vacancy: Yup.string().required('Укажите название вакансии'),
		jobTitle: Yup.string().required('Укажите название должности'),
		sphere: Yup.string().required('Укажите сферу деятельности'),
	});

	type FormModel = {
		vacancy: string;
		jobTitle: string;
		sphere: string;
	};

	// eslint-disable-next-line consistent-return
	const onSubmit = (values: FormModel) => {
		navigate('/form/step-2', { replace: true });
		console.log('Form data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<Formik<FormModel>
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{() => (
				<Form className="form">
					<div className=" input-container">
						<Input
							label="Название вакансии"
							placeholder="Например, контент–менеджер"
							name="vacancy"
							type="text"
						/>
						<InputWithSearch
							label="Должность"
							name="jobTitle"
							options={jobTitleServer}
							placeholder="Начните вводить и выберите должность из списка"
							// eslint-disable-next-line react/jsx-boolean-value
							isMulti={false}
							// eslint-disable-next-line react/jsx-boolean-value
							isTips={false}
						/>
						<InputWithSearch
							label="Сфера деятельности"
							name="sphere"
							options={sphereTitleServer}
							placeholder="Например, маркетинг"
							// eslint-disable-next-line react/jsx-boolean-value
							isMulti={false}
							// eslint-disable-next-line react/jsx-boolean-value
							isTips={false}
						/>
					</div>
					<div className="form__buttons">
						{/* <Button type="button" styleType="secondary" label="Назад" /> */}

						<Button
							type="submit"
							styleType="primary"
							label="Сохранить и продолжить"
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default SpecialistTypeForm;
