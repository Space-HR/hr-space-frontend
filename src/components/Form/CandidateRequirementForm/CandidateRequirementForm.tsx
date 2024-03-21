import { FC } from 'react';
import './CandidateRequirementForm.scss';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormWrapper from '../FormWrapper/FormWrapper';
import { city } from '../../../data/data-form';
import InputWithChips from '../../FormElements/InputWithChips/InputWithChips';
import Button from '../../Buttons/Button/Button';

const CandidateRequirementForm: FC = () => {
	const navigate = useNavigate();

	const initialValues = {
		cityOrganization: '',
	};

	const validationSchema = Yup.object({
		cityOrganization: Yup.string().required(
			'Укажите город, где находится организация'
		),
	});

	type FormModel = {
		cityOrganization: string;
	};

	// eslint-disable-next-line consistent-return
	const onSubmit = (values: FormModel) => {
		navigate('/form/step-4', { replace: true });

		console.log('Form data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<FormWrapper title="Какого специалиста ищете?">
			<Formik<FormModel>
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{() => (
					<Form className="form">
						<div className="form__elements">
							<InputWithChips
								label="Город организации"
								placeholder="Начните вводить и выберите, где находится ваша организация"
								name="cityOrganization"
								options={city}
							/>
						</div>
						<div className="form__buttons">
							<Button type="button" styleType="secondary" label="Назад" />

							<Button
								type="submit"
								styleType="primary"
								label="Сохранить и продолжить"
							/>
						</div>
					</Form>
				)}
			</Formik>
		</FormWrapper>
	);
};

export default CandidateRequirementForm;
