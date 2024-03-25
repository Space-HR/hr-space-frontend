import { FC, useEffect } from 'react';
import './SpecialistTypeFormPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import FormWrapper from '../../../components/Form/FormWrapper/FormWrapper';
import SpecialistTypeForm from '../../../components/Form/SpecialistTypeForm/SpecialistTypeForm';
import { fetchJobVacancy } from '../../../services/thunks/dictionaryThunk';
import { AppDispatch } from '../../../services/store';
// import { errorMessageJobVacancySelector, jobVacancySelector } from '../../../services/selectors/dictionarySelector';


const SpecialistTypeFormPage: FC = () => {
	const dispatch = useDispatch<AppDispatch>();
    // const jobVacancy = useSelector(jobVacancySelector)
	// const errorMessageJobVacancy = useSelector(errorMessageJobVacancySelector)
	
	useEffect(() => {
		dispatch(fetchJobVacancy());

	}, [dispatch]);


	return (
		<FormWrapper title="Какого специалиста ищете?">
			<SpecialistTypeForm />
		</FormWrapper>
	);
};

export default SpecialistTypeFormPage;
