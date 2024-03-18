import { FC, useState } from 'react';
import './FormikContainer.scss';
// import { useMultistepForm } from '../../../hooks/useMultistepForm';
import SpecialistTypeForm from '../../Form/SpecialistTypeForm/SpecialistTypeForm';

const FormikContainer: FC = () => {
	const [step, setStep] = useState<number>(0);
	const stepElement = [
		<SpecialistTypeForm setStep={setStep} />,
		<div>Два</div>,
		<div>Три</div>,
	];

	// const { step, steps, currentStepIndex, isFirstStep, back, next, isLastStep } =
	// 	useMultistepForm([<SpecialistTypeForm />, <div>Два</div>, <div>Три</div>]);

	// const onSubmit = () => {
	// 	// if (!isLastStep) return next();

	// 	next();

	// 	// console.log('Form data', JSON.parse(JSON.stringify(values)));
	// };

	return (
		<div className="form">
			{stepElement[step]}

			{/* <div>
				{currentStepIndex + 1} / {steps.length}
			</div>
			{step}
			{!isFirstStep && (
				<button type="button" onClick={back}>
					Назад
				</button>
			)}
			<button type="submit" onClick={onSubmit}>
				{isLastStep ? 'Оплатить' : 'Сохранить и продолжить'}
			</button> */}
		</div>
	);
};

export default FormikContainer;
