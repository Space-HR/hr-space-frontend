import { FC } from 'react';
import './PaymentForm.scss';

import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import RadioButtonGroup from '../../FormElements/RadioButtons/RadioButtonGroup/RadioButtonGroup';

export type TFormModel = {
	isDelayedPublication: boolean;
	publicationDate: Date | null;
	publicationTime: Date | null;
	paymentMethod: number;
};

type TPropRadioOption = {
	id: number;
	booleanValue: boolean;
	label: string;
};

const isDelayedPublicationOptions: TPropRadioOption[] = [
	{
		id: 0,
		booleanValue: false,
		label: 'Опубликовать сейчас',
	},
	{
		id: 1,
		booleanValue: true,
		label:
			'Опубликовать по расписанию',
	},
];

const PaymentForm: FC = () => {
	const fieldNames = {
		isDelayedPublication: 'isDelayedPublication',
		publicationDate: 'publicationDate',
		publicationTime: 'publicationTime',
		paymentMethod: 'paymentMethod',
	};

	const navigate = useNavigate();

	const initialValues = {
		isDelayedPublication: false,
		publicationDate: null,
		publicationTime: null,
		paymentMethod: 1,
	};

	const validationSchema = Yup.object();
	// 	.test(
	// 		'registerAsSet-required',
	// 		'Выберите способ оформления сотрудников',
	// 		validateRegisterAsSet
	// 	);

	const onSubmit = (values: TFormModel) => {
		navigate('/success-sent');
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
						<RadioButtonGroup
									label="Когда вы хотите опубликовать вашу заявку?"
									name={fieldNames.isDelayedPublication}
									options={isDelayedPublicationOptions}
								/>
						</div>
						<div className="two-btn-disposition">
							<Button
								type="button"
								styleType="secondary"
								label="Назад"
								onClick={() => navigate('/form/step-5')}
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

export default PaymentForm;
