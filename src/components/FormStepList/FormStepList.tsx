import { FC } from 'react';
import './FormStepList.scss';
import FormStep from '../FormStep/FormStep';

const FormStepList: FC = () => {
	return (
		<section className="form-steps">
			<h1 className="form-steps__title">Создание заявки</h1>
			<ul className="form-steps__list">
				<FormStep title="Выбор специалиста" isFilled />
				<FormStep title="Условия работы" isFilled />
				<FormStep title="Обязанности и требования к&nbsp;специалисту" />
				<FormStep title="Условия сотрудничества" />
				<FormStep title="Требования к рекрутеру" />
				<FormStep title="Оплата и добавление заявки" isFinalStep />
			</ul>
		</section>
	);
};

export default FormStepList;
