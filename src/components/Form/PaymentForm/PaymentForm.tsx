import { FC } from 'react';
import './PaymentForm.scss';

import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Button from '../../Buttons/Button/Button';
import RadioButtonGroup from '../../FormElements/RadioButtons/RadioButtonGroup/RadioButtonGroup';
import { isDelayedPublicationOptions } from '../../../utils/fakeData';

export type TFormModel = {
	isDelayedPublication: boolean;
	publicationDate: Date | null;
	publicationTime: Date | null;
	paymentMethod: number;
};

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

	const onSubmit = (values: TFormModel) => {
		navigate('/success-sent');
		console.log('Form data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<Formik<TFormModel> initialValues={initialValues} onSubmit={onSubmit}>
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
