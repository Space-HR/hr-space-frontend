import { FC } from 'react';
import './HeaderProfile.scss';

const HeaderProfile: FC = () => {
	const user = {
		id: '45732',
		name: 'Виталий Крымов',
	};
	return (
		<div className="header-profile">
			<div className="header-profile__avatar" />
			<div className="header-profile__info">
				<p className="header-profile__username">{user.name}</p>
				<p className="header-profile__id">#{user.id}</p>
			</div>
		</div>
	);
};

export default HeaderProfile;
