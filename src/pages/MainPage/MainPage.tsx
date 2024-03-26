import { FC } from 'react';
import './MainPage.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Buttons/Button/Button';

const MainPage: FC = () => {
	const navigate = useNavigate();

	return (
		<main className="main-page">
			<h1 className="main-page__title">Главная страница</h1>
			
			<Button
				type="button"
				styleType="primary"
				label="Создать заявку"
				onClick={() => navigate("/form")}
			/>
		</main>
	);
};

export default MainPage;
