import { FC } from 'react';
import './Logo.scss';
import logo from '../../images/hh-logo.svg';
import сaption from '../../images/сaption.svg';

const Logo: FC = () => {
	return (
		<div className="logo">
			<img src={logo} alt="logo" />
			<img src={сaption} alt="сaption" />
		</div>
	);
};

export default Logo;
