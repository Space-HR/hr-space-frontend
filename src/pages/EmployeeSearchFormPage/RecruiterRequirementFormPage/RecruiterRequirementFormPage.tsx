import { FC } from 'react';
import './RecruiterRequirementFormPage.scss';
import FormWrapper from '../../../components/Form/FormWrapper/FormWrapper';
import RecruiterRequirementForm from '../../../components/Form/RecruiterRequirementForm/RecruiterRequirementForm';

const RecruiterRequirementFormPage: FC = () => {
	return (
		<FormWrapper title="Что вы ожидаете от рекрутера?">
			<RecruiterRequirementForm />
		</FormWrapper>
	);
};

export default RecruiterRequirementFormPage;
