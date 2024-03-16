import { FC } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layuot from '../Layuot/Layuot';
import EmployeeSearchFormPage from '../../pages/EmployeeSearchFormPage/EmployeeSearchFormPage';
import SpecialistTypeFormPege from '../../pages/EmployeeSearchFormPage/SpecialistTypeFormPage/SpecialistTypeFormPage';
import WorkConditionsFormPage from '../../pages/EmployeeSearchFormPage/WorkConditionsFormPage/WorkConditionsFormPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import CandidateRequirementFormPage from '../../pages/EmployeeSearchFormPage/CandidateRequirementFormPage/CandidateRequirementFormPage';
import RecruiterRequirementFormPage from '../../pages/EmployeeSearchFormPage/RecruiterRequirementFormPage/RecruiterRequirementFormPage';
import PaymentFormPage from '../../pages/EmployeeSearchFormPage/PaymentFormPage/PaymentFormPage';
import TariffFormPage from '../../pages/EmployeeSearchFormPage/TariffFormPage/TariffFormPage';

const App: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Layuot />}>
				<Route path="form" element={<EmployeeSearchFormPage />}>
					<Route path="step-1" element={<SpecialistTypeFormPege />} />
					<Route path="step-2" element={<WorkConditionsFormPage />} />
					<Route path="step-3" element={<CandidateRequirementFormPage />} />
					<Route path="step-4" element={<TariffFormPage />} />
					<Route path="step-5" element={<RecruiterRequirementFormPage />} />
					<Route path="step-6" element={<PaymentFormPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;