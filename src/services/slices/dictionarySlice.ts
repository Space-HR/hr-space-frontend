import { createSlice } from '@reduxjs/toolkit';
import { fetchJobVacancy } from '../thunks/dictionaryThunk';

type TDictionary = {
	id: number;
	name: string;
};

type TDictionarySlice = {
	jobVacancy: TDictionary[] ;
	isLoadingJobVacancy: boolean;
	errorJobVacancy: boolean;
	errorMessageJobVacancy: string;
};

export const initialState: TDictionarySlice = {
	jobVacancy: [],
	isLoadingJobVacancy: false,
	errorJobVacancy: false,
	errorMessageJobVacancy: '',
};

const dictionarySlice = createSlice({
	name: 'dictionary',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			// авторизация
			.addCase(fetchJobVacancy.fulfilled, (state, action) => {
				state.jobVacancy = action.payload;
				state.isLoadingJobVacancy = false;
				state.errorJobVacancy = false;
			})
			.addCase(fetchJobVacancy.pending, (state) => {
				state.isLoadingJobVacancy = true;
				state.errorJobVacancy = false;
			})
			.addCase(fetchJobVacancy.rejected, (state, action) => {
				state.isLoadingJobVacancy = false;
				state.errorJobVacancy = true;
				state.errorMessageJobVacancy =
					action.error.message || 'Произошла неизвестная ошибка';
			});
	},
});

export default dictionarySlice.reducer;
