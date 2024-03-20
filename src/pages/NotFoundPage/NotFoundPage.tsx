import { FC } from 'react';
import './NotFoundPage.scss';
import { useNavigate } from 'react-router-dom';
import notFound from '../../images/not-found.png';
import Button from '../../components/Buttons/Button/Button';

const NotFoundPage: FC = () => {
	const navigate = useNavigate();

	return (
		<main className="not-found-page">
			<img src={notFound} alt="not found page" />
			<h1 className="not-found-page__title">Страница не найдена</h1>
			<p className="not-found-page__text">
				Извините, мы не можем найти страницу, которую вы ищете
			</p>
			<Button
				type="button"
				styleType="primary"
				label="Вернуться назад"
				onClick={() => navigate(-1)}
			/>
		</main>
	);
};

export default NotFoundPage;
