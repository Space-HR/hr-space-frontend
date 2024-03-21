import { FC } from 'react';
import './Layuot.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layuot: FC = () => {
	return (
		<div className="layuot">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layuot;
