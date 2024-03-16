import { FC } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import BellButton from '../Buttons/BellButton/BellButton';

const Header: FC = () => {
	return (
		<header className="header">
			<nav className="header__navigation">
				<NavLink to="/">
					<Logo />
				</NavLink>
				<div className="header__link-container">
					<NavLink to="/" className="header__link-text">
						Главная
					</NavLink>
					<NavLink to="/" className="header__link-text">
						Мои заявки
					</NavLink>
					<NavLink to="/" className="header__link-text">
						Поиск по рынку
					</NavLink>
					<NavLink to="/" className="header__link-text">
						Счёт
					</NavLink>
					<NavLink to="/" className="header__link-text">
						Помощь
					</NavLink>
				</div>
			</nav>
			<BellButton />
			<HeaderProfile />
		</header>
	);
};

export default Header;