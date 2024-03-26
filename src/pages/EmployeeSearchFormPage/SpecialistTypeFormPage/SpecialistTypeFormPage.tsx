import { FC, useEffect } from 'react';
import './SpecialistTypeFormPage.scss';
import { useDispatch } from 'react-redux';
import FormWrapper from '../../../components/Form/FormWrapper/FormWrapper';
import SpecialistTypeForm from '../../../components/Form/SpecialistTypeForm/SpecialistTypeForm';
import { fetchJobVacancy } from '../../../services/thunks/dictionaryThunk';
import { AppDispatch } from '../../../services/store';

const SpecialistTypeFormPage: FC = () => {
	const dispatch = useDispatch<AppDispatch>();

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
