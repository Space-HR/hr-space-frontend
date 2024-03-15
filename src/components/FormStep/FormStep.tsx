import { FC } from 'react';
import './FormStep.scss';

type TFormStepsProps = {
	// imgLink: string;
	title: string;
	isFilled?: boolean;
	isFinalStep?: boolean;
};

const FormStep: FC<TFormStepsProps> = ({ title, isFilled, isFinalStep }) => {
	return (
		<li
			className={
				isFilled ? 'form-step form-step_active' : 'form-step form-step_inactive'
			}
		>
			<div className="form-step__conteiner">
				<div className="form-step__img-conteiner" />
				<p className="form-step__title">{title}</p>
			</div>
			{isFinalStep || <div className="form-step__line" />}
		</li>
	);
};

export default FormStep;
