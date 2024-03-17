import { FC } from 'react';
import './App.scss';
import FormikContainer from '../FormikContainer/FormikContainer';

const App: FC = () => {
	return (
		<div className="App">
			<h1>Title</h1>
			<FormikContainer />
		</div>
	);
};

export default App;
