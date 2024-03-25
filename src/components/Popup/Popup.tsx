import './Popup.scss';
import { ReactComponent as IconClose } from '../../images/close.svg';
import IconPrint from '../../images/print.svg';

type TPopup = {
	isOpen: boolean;
	onClose: () => void;
};

function Popup({ isOpen, onClose }: TPopup) {
	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{isOpen && (
				<div className="popup">
					<button className="popup__close" type="button" onClick={onClose}>
						{' '}
						<IconClose />
					</button>
					<div className="popup-wrapper">
						<div className="popup-content">
							<div className="popup-top">
								<div className="popup-top__text">
									<h1 className="popup-top__job">UI UX Дизайнер senior</h1>
									<h2 className="popup-top__info">Заявка №53255</h2>
								</div>
								<img
									className="popup-top__img"
									src={IconPrint}
									alt="Распечатать"
								/>
							</div>
							<div className="info-wrapper">
								<ul className="info border">
									<li className="info__item">
										<p className="info__title">Зарплата специалисту</p>
										<p className="info__subtitle">от 120 000 ₽ до 150 000 ₽</p>
									</li>
									<li className="info__item">
										<p className="info__title">Необходимо сотрудников</p>
										<p className="info__subtitle">1</p>
									</li>
									<li className="info__item">
										<p className="info__title">Город</p>
										<p className="info__subtitle">Москва</p>
									</li>
									<li className="info__item">
										<p className="info__title">Необходимо рекрутеров </p>
										<p className="info__subtitle">1</p>
									</li>
								</ul>
								<ul className="info">
									<li className="info__item">
										<p className="info__title">Стоимость заявки</p>
										<p className="info__subtitle">150 000 ₽</p>
									</li>
									<li className="info__item">
										<p className="info__title">Оплата</p>
										<p className="info__subtitle">
											100% после гарантийного периода
										</p>
									</li>
									<li className="info__item">
										<p className="info__title">Вознаграждение за сотрудника</p>
										<p className="info__subtitle">120 000 ₽</p>
									</li>
									<li className="info__item">
										<p className="info__title">Тип исполнителя</p>
										<p className="info__subtitle">
											Только для юридических лиц, ИП и самозанятых
										</p>
									</li>
									<li className="info__item">
										<p className="info__title">
											Комиссия площадки за сотрудника
										</p>
										<p className="info__subtitle">30 000 ₽</p>
									</li>
									<li className="info__item">
										<p className="info__title">Дата публикации</p>
										<p className="info__subtitle">После модерации</p>
									</li>
								</ul>
							</div>
							<div className="job border">
								<h3 className="job__title title">Профессия по заявке</h3>
								<h4 className="job__subtitle subtitle">
									Информационные технологии
								</h4>
								<p className="job__text text">Дизайнер интерфейсов</p>
							</div>
							<div className="description-job">
								<h3 className="description-job__title title">
									Описание вакансии
								</h3>
								<h4 className="description-job__subtitle subtitle">
									Условия для сотрудника
								</h4>
								<ul className="description-job__list text">
									<li className="description-job__item text">
										Свободный график — работай, где и когда хочешь;
									</li>
									<li className="description-job__item text">
										Гибридный формат работы — в офисе, удаленно;
									</li>
									<li className="description-job__item text">
										Оформление: ТК РФ, самозанятые;
									</li>
									<li className="description-job__item text">Наличие ДМС;</li>
									<li className="description-job__item text">
										Удивительные проекты — вдохновляйся каждым дизайном;
									</li>
									<li className="description-job__item text">
										Супергеройская команда — коллеги всегда поддержат;
									</li>
									<li className="description-job__item text">
										Новые друзья, приключения. Добро пожаловать в команду
										счастья!
									</li>
								</ul>
								<h4 className="description-job__subtitle subtitle">
									Обязанности
								</h4>
								<ul className="description-job__list text">
									<li className="description-job__item text">
										Изучать потребности пользователей;
									</li>
									<li className="description-job__item text">
										Осуществлять ревью своего дизайна;
									</li>
									<li className="description-job__item text">
										Разрабатывать дизайн интерфейсов сайта и мобильных
										приложений (Android и IOS);
									</li>
									<li className="description-job__item text">
										Создавать кликабельные прототипы;
									</li>
									<li className="description-job__item text">
										Участвовать в генерации идей.
									</li>
								</ul>
								<h4 className="description-job__subtitle subtitle">
									Требования
								</h4>
								<div className="border">
									<ul className="description-job__list text">
										<li className="description-job__item text">
											Опыт работы: от 1 года до 3 лет;
										</li>
										<li className="description-job__item text">
											Владение основными инструментами дизайна;
										</li>
										<li className="description-job__item text">
											Создание интуитивных пользовательских интерфейсов;
										</li>
										<li className="description-job__item text">
											Желание постоянного профессионального роста;
										</li>
										<li className="description-job__item text">
											Креативность и поиск инновационных решений.
										</li>
									</ul>
								</div>
							</div>

							<div className="description-job">
								<h3 className="description-job__title title">
									Что входит в работу рекрутера?
								</h3>
								<h4 className="description-job__subtitle subtitle">
									Требования
								</h4>
								<ul className="description-job__list text">
									<li className="description-job__item text">
										Поиск и предоставление релевантных резюме;
									</li>
									<li className="description-job__item text">
										Отправка кандидату тестового задания;
									</li>
									<li className="description-job__item text">
										Отправка финалисту приглашения на работу.
									</li>
								</ul>
								<h4 className="description-job__subtitle subtitle">
									Навыки рекрутера
								</h4>
								<ul className="description-job__list text">
									<li className="description-job__item text">
										Оценка мотивации кандидата;
									</li>
									<li className="description-job__item text">
										Знание норм этики делового общения;
									</li>
									<li className="description-job__item text">
										Знание основ психологии и социологии труда;
									</li>
									<li className="description-job__item text">
										Оценка профессиональных и личных качеств кандидата.
									</li>
								</ul>
								<h4 className="description-job__subtitle subtitle">
									В каком виде нужно предоставить резюме кандидатов?
								</h4>
								<p className="description-job__text text">
									Дизайнер интерфейсов
								</p>

								<h4 className="description-job__subtitle subtitle">
									Желаемая дата получения первых резюме
								</h4>
								<p className="description-job__text text">12 марта 2024 г.</p>

								<h4 className="description-job__subtitle subtitle">
									Желаемая дата выхода сотрудника на работу
								</h4>
								<p className="description-job__text text">30 марта 2024 г.</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Popup;
