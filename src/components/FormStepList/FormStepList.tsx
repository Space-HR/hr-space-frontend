import { FC } from 'react';
import './FormStepList.scss';
import { useLocation } from 'react-router-dom';
import FormStep from '../FormStep/FormStep';
import stepIcon1 from '../../images/steps/step-1.svg';
import stepIcon2 from '../../images/steps/step-2.svg';
import stepIcon3 from '../../images/steps/step-3.svg';
import stepIcon4 from '../../images/steps/step-4.svg';
import stepIcon5 from '../../images/steps/step-5.svg';
import stepIcon6 from '../../images/steps/step-6.svg';

const FormStepList: FC = () => {
	const { pathname } = useLocation();
	const step1 =
		pathname.includes('step-1') ||
		pathname.includes('step-2') ||
		pathname.includes('step-3') ||
		pathname.includes('step-4') ||
		pathname.includes('step-5') ||
		pathname.includes('step-6');

	const step2 =
		!pathname.includes('step-1') &&
		(pathname.includes('step-2') ||
			pathname.includes('step-3') ||
			pathname.includes('step-4') ||
			pathname.includes('step-5') ||
			pathname.includes('step-6'));
	const step3 =
		(!pathname.includes('step-1') || !pathname.includes('step-2')) &&
		(pathname.includes('step-3') ||
			pathname.includes('step-4') ||
			pathname.includes('step-5') ||
			pathname.includes('step-6'));

	const step4 =
		(!pathname.includes('step-1') ||
			!pathname.includes('step-2') ||
			!pathname.includes('step-3')) &&
		(pathname.includes('step-4') ||
			pathname.includes('step-5') ||
			pathname.includes('step-6'));

	const step5 =
		(!pathname.includes('step-1') ||
			!pathname.includes('step-2') ||
			!pathname.includes('step-3') ||
			!pathname.includes('step-4')) &&
		(pathname.includes('step-5') || pathname.includes('step-6'));

	const step6 =
		(!pathname.includes('step-1') ||
			!pathname.includes('step-2') ||
			!pathname.includes('step-3') ||
			!pathname.includes('step-4') ||
			!pathname.includes('step-5')) &&
		pathname.includes('step-6');

	return (
		<section className="form-steps">
			<h1 className="form-steps__title">Создание заявки</h1>
			<ul className="form-steps__list">
				<FormStep
					title="Выбор специалиста"
					isFilled={step1}
					imgLink={stepIcon1}
				/>
				<FormStep title="Условия работы" isFilled={step2} imgLink={stepIcon2} />
				<FormStep
					title="Обязанности и требования к&nbsp;специалисту"
					imgLink={stepIcon3}
					isFilled={step3}
				/>
				<FormStep
					title="Условия сотрудничества"
					imgLink={stepIcon4}
					isFilled={step4}
				/>
				<FormStep
					title="Требования к рекрутеру"
					imgLink={stepIcon5}
					isFilled={step5}
				/>
				<FormStep
					title="Оплата и добавление заявки"
					isFinalStep
					imgLink={stepIcon6}
					isFilled={step6}
				/>
			</ul>
		</section>
	);
};

export default FormStepList;
