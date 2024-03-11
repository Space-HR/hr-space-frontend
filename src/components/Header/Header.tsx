import { FC } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
	return (
		<header>
			<nav>
				<NavLink to="/">Link1</NavLink>
			</nav>
		</header>
	);
};

export default Header;
