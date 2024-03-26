import { FC } from 'react';
import './PaymentFormPage.scss';
import PaymentForm from '../../../components/Form/PaymentForm/PaymentForm';
import FormWrapper from '../../../components/Form/FormWrapper/FormWrapper';

const PaymentFormPage: FC = () => {
	return (
		<FormWrapper title="Публикация и оплата">
			<PaymentForm />
		</FormWrapper>
	);
};

export default PaymentFormPage;
