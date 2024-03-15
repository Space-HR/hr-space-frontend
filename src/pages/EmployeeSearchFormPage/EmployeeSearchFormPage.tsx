import { FC } from 'react';
import './EmployeeSearchFormPage.scss';
import { Outlet } from 'react-router-dom';
import FormStepList from '../../components/FormStepList/FormStepList';

const EmployeeSearchFormPage: FC = () => {
	return (
		<main className="employee-search-form-page">
			<FormStepList />
			<Outlet />
		</main>
	);
};

export default EmployeeSearchFormPage;
