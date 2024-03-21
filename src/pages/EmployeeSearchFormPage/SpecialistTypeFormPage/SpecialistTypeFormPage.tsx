import { FC } from 'react';
import './SpecialistTypeFormPage.scss';
import FormWrapper from '../../../components/Form/FormWrapper/FormWrapper';
import SpecialistTypeForm from '../../../components/Form/SpecialistTypeForm/SpecialistTypeForm';

const SpecialistTypeFormPage: FC = () => {
	return (
		<FormWrapper title="Какого специалиста ищете?">
			<SpecialistTypeForm />
		</FormWrapper>
	);
};

export default SpecialistTypeFormPage;
