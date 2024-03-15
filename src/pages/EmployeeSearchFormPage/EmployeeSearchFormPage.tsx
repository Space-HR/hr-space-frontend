import { FC } from 'react';
import './EmployeeSearchFormPage.scss';
import { Outlet } from 'react-router-dom';
import FormStepList from '../../components/FormStepList/FormStepList';

const EmployeeSearchFormPage: FC = () => {
	return (
		<main className="form-page">
			<FormStepList />
			<div className="form-page__form-container">
				<Outlet />
			</div>
		</main>
	);
};

export default EmployeeSearchFormPage;
