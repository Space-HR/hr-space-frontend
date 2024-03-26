import { FC } from 'react';
import './CandidateRequirementFormPage.scss';
import CandidateRequirementForm from '../../../components/Form/CandidateRequirementForm/CandidateRequirementForm';
import FormWrapper from '../../../components/Form/FormWrapper/FormWrapper';

const CandidateRequirementFormPage: FC = () => {
	return (
		<FormWrapper title="Публикация и оплата">
			<CandidateRequirementForm />
		</FormWrapper>

	);
};

export default CandidateRequirementFormPage;
