import { FC } from 'react';
import './WorkConditionsFormPage.scss';
import WorkConditionsForm from '../../../components/Form/WorkConditionsForm/WorkConditionsForm';

const WorkConditionsFormPage: FC = () => {
	return (
		<>
			<h2 className='form-title'>Что вы можете предложить специалисту?</h2>
			<WorkConditionsForm/>
		</>
	);
};

export default WorkConditionsFormPage;
