import { FC } from 'react';
import './Layuot.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layuot: FC = () => {
	return (
		<div className="layuot">
			<div className="layuot__container">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layuot;
