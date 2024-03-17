import { FC } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import ImageButton from '../Buttons/ImageButton/ImageButton';
import BellIcon from '../svg/BellIcon';
import ChatIcon from '../svg/ChatIcon';

const Header: FC = () => {
	return (
		<header className="header">
			<nav className="header__navigation">
				<NavLink to="/">
					<Logo />
				</NavLink>
				<div className="header__link-container">
					<NavLink to="/" className="header__link-text">
						Заявки
					</NavLink>
					<NavLink to="/" className="header__link-text">
						Исполнители
					</NavLink>
					<NavLink to="/" className="header__link-text">
						Вопросы и ответы
					</NavLink>
				</div>
			</nav>
			<ImageButton>
				<BellIcon />
			</ImageButton>
			<ImageButton isFilled>
				<ChatIcon />
			</ImageButton>
			<HeaderProfile />
		</header>
	);
};

export default Header;
