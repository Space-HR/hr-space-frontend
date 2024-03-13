import { FC } from 'react';
import './EmployeeSearchFormPage.scss';
import { Outlet } from 'react-router-dom';

const EmployeeSearchFormPage: FC = () => {
	return (
		<main>
			<Outlet />
		</main>
	);
};

export default EmployeeSearchFormPage;
