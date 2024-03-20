import { FC } from 'react';
import './WorkConditionsFormPage.scss';
import FormWrapper from '../../../components/Form/FormWrapper/FormWrapper';
import WorkConditionsForm from '../../../components/Form/WorkConditionsForm/WorkConditionsForm';

const WorkConditionsFormPage: FC = () => {
	return (
		<FormWrapper title="Что вы можете предложить специалисту?">
			<WorkConditionsForm/>
		</FormWrapper>
	
	);
};

export default WorkConditionsFormPage;
