import { FC } from 'react';
import './HeaderProfile.scss';
import profilePhoto from '../../images/profile.png';

const HeaderProfile: FC = () => {
	const user = {
		id: '45732',
		name: 'Виталий Крымов',
		photo: profilePhoto,
	};
	return (
		<div className="header-profile">
			<div className="header-profile__avatar">
				<img src={user.photo} alt="Аватар пользователя" />
			</div>
			<div className="header-profile__info">
				<p className="header-profile__username">{user.name}</p>
				<p className="header-profile__id">Клиент {user.id}</p>
			</div>
		</div>
	);
};

export default HeaderProfile;
