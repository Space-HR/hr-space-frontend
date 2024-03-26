import { FC } from 'react';
import './SuccessSentPage.scss';
import { useNavigate } from 'react-router-dom';
import successSent from '../../images/success-sent.png';
import Button from '../../components/Buttons/Button/Button';

const SuccessSentPage: FC = () => {
	const navigate = useNavigate();

	return (
		<main className="success-sent-form">
			<h1 className="success-sent-form__title">Всё готово!</h1>
			<p className="success-sent-form__text">
			Мы опубликуем вашу заявку в течение 3 дней,<br /> сразу после успешной модерации.
			</p>
			<img src={successSent} alt="success sent" className="success-sent-form__img"/>
			<Button
				type="button"
				styleType="primary"
				label="Просмотреть заявки"
				onClick={() => navigate("/")}
			/>
		</main>
	);
};

export default SuccessSentPage;
