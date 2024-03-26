import { FC } from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layuot from '../Layuot/Layuot';
import EmployeeSearchFormPage from '../../pages/EmployeeSearchFormPage/EmployeeSearchFormPage';
import SpecialistTypeFormPage from '../../pages/EmployeeSearchFormPage/SpecialistTypeFormPage/SpecialistTypeFormPage';
import WorkConditionsFormPage from '../../pages/EmployeeSearchFormPage/WorkConditionsFormPage/WorkConditionsFormPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import CandidateRequirementFormPage from '../../pages/EmployeeSearchFormPage/CandidateRequirementFormPage/CandidateRequirementFormPage';
import RecruiterRequirementFormPage from '../../pages/EmployeeSearchFormPage/RecruiterRequirementFormPage/RecruiterRequirementFormPage';
import PaymentFormPage from '../../pages/EmployeeSearchFormPage/PaymentFormPage/PaymentFormPage';
import TariffFormPage from '../../pages/EmployeeSearchFormPage/TariffFormPage/TariffFormPage';
import MainPage from '../../pages/MainPage/MainPage';
import SuccessSentPage from '../../pages/SuccessSentPage/SuccessSentPage';

const App: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Layuot />}>
				<Route path="/" element={<MainPage />} />
				<Route path="form" element={<EmployeeSearchFormPage />}>
					<Route index element={<Navigate replace to="step-1" />} />

					<Route path="step-1" element={<SpecialistTypeFormPage />} />
					<Route path="step-2" element={<WorkConditionsFormPage />} />
					<Route path="step-3" element={<CandidateRequirementFormPage />} />
					<Route path="step-4" element={<TariffFormPage />} />
					<Route path="step-5" element={<RecruiterRequirementFormPage />} />
					<Route path="step-6" element={<PaymentFormPage />} />
				</Route>
				<Route path="success-sent" element={<SuccessSentPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;
