import { FC } from 'react';
import './FormStep.scss';

type TFormStepsProps = {
	imgLink: string;
	title: string;
	isFilled?: boolean;
	isFinalStep?: boolean;
};

const FormStep: FC<TFormStepsProps> = ({
	title,
	isFilled,
	isFinalStep,
	imgLink,
}) => {
	return (
		<li className="form-step">
			<div className="form-step__conteiner-img-title">
				<div
					className={`form-step__img-conteiner ${isFilled ? 'form-step__img-conteiner_active' : ''}`}
				>
					{imgLink && (
						<img className="form-step__img" src={imgLink} alt={title} />
					)}
				</div>
				<p className="form-step__title">{title}</p>
			</div>
			{isFinalStep || (
				<div
					className={`form-step__line ${isFilled ? 'form-step__line_active' : ''}`}
				/>
			)}
		</li>
	);
};

export default FormStep;
