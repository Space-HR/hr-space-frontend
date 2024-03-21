import { FC } from 'react';
import './Footer.scss';

const Footer: FC = () => {
	return (
		<footer className="footer">
			<div>
				<p className="footer__question">
					Если остались вопросы, у нас уже готовы ответы в разделе{' '}
					<a className="footer__link" href="/">
						«Вопрос — ответ»
					</a>
				</p>
				<p className="footer__copyright">© 2024 Группа компаний HeadHunter</p>
			</div>

			<ul className="footer__contact">
				<h3 className="footer__contact-title">Всегда поддержим и поможем:</h3>
				<li className="footer__contact-value">
					по России{' '}
					<span className="footer__contact-number">8 800 100-64-27</span>
				</li>
				<li className="footer__contact-value">
					в Москве{' '}
					<span className="footer__contact-number">+7 495 974-64-27</span>
				</li>
				<li className="footer__contact-value">
					в Санкт-Петербурге{' '}
					<span className="footer__contact-number">+7 812 458-45-45</span>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
