import { FC } from 'react';
import './SpecialistTypeForm.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../FormElements/FormikControl/FormikControl';
import FormWrapper from '../FormWrapper/FormWrapper';
import { jobTitleServer } from '../../../data/data-form';

type SpecialistTypeFormProp = {
	// eslint-disable-next-line no-unused-vars
	setStep: (value: number) => any;
};

const SpecialistTypeForm: FC<SpecialistTypeFormProp> = ({ setStep }) => {
	const initialValues = {
		vacancy: '',
		jobTitle: '',
		date: undefined,
		// radioOptions: [],
	};

	const validationSchema = Yup.object({
		vacancy: Yup.string(),
		jobTitle: Yup.string(),
		date: Yup.date().nullable(),
		// radioOptions: Yup.array(),
	});

	type FormModel = {
		vacancy: string;
		jobTitle: string;
		// radioOptions: string[];
		date: Date | undefined;
	};

	// eslint-disable-next-line consistent-return
	const onSubmit = (values: FormModel) => {
		setStep(1);
		// if (!isLastStep) return next();

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
							<FormikControl
								control="input"
								label="Название вакансии"
								placeholder="Например, контент–менеджер"
								name="vacancy"
								type="text"
							/>
							<FormikControl
								control="input-search"
								label="Должность"
								placeholder="Начните вводить и выберите должность из списка"
								name="jobTitle"
								options={jobTitleServer}
							/>
							<FormikControl control="date" label="Укажите дату" name="date" />

							<button type="submit">Сохранить и продолжить</button>
						</Form>
					</div>
				)}
			</Formik>
		</FormWrapper>
	);
};

export default SpecialistTypeForm;
