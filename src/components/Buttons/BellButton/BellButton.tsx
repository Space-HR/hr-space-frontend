import { FC } from 'react';
import './BellButton.scss';
import bell from '../../../images/bell.svg';

const BellButton: FC = () => {
	return (
		<button type="button" className="bell-button">
			<img src={bell} alt="notification" />
		</button>
	);
};

export default BellButton;
