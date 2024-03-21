import { FC } from 'react';
import './TariffFormPage.scss';
import FormWrapper from '../../../components/Form/FormWrapper/FormWrapper';
import TariffForm from '../../../components/Form/TariffForm/TariffForm';

const TariffFormPage: FC = () => {
	return (
		<FormWrapper title="Что вы можете предложить рекрутеру?">
			<TariffForm/>
		</FormWrapper>
	);
};

export default TariffFormPage;
