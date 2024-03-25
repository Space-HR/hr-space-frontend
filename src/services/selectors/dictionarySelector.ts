import { RootState } from "../store";

export const jobVacancySelector = (state: RootState) => state.dictionary.jobVacancy

export const errorMessageJobVacancySelector = (state: RootState) => state.dictionary.errorMessageJobVacancy