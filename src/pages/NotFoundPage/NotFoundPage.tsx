import { FC } from 'react';
import './NotFoundPage.scss';

const NotFoundPage: FC = () => {
	return (
		<main className="not-found-page">
			<p>Упс! Такой страницы не существует..</p>
			<p>Мы проверили каждый уголок, но не смогли найти то, что вы искали.</p>
		</main>
	);
};

export default NotFoundPage;
