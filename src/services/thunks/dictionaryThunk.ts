import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, request } from '../../utils/api';

const requestOptions = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
};

// Получение справочника job_vacancy
const urlJobVacancy: Readonly<string> = `${baseURL}/api/v1/jobvacancy/`;

export const fetchJobVacancy = createAsyncThunk('jobVacancy/get', async () => {
	const data = await request(urlJobVacancy, requestOptions);
	return data;
});
