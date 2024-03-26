import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dictionarySlice from "./slices/dictionarySlice"

const rootReducer = combineReducers({
	dictionary: dictionarySlice
});

export const store = configureStore({
	reducer: rootReducer,
});


// Тип для корневого состояния
export type RootState = ReturnType<typeof store.getState>;

// Тип для диспетчера
export type AppDispatch = typeof store.dispatch;