import { FC } from 'react';
import './QtyRecruitersRadioButtons.scss';
import { Field } from 'formik';
import Label from '../Label/Label';
import QtyRecruitersRadioButton from './QtyRecruitersRadioButton/QtyRecruitersRadioButton';

type TRadioSelectedField = {
	field: {
		value: number;
	};
};

type TElementWithOptions = {
    label: string;
    name: string;
    options: number[];
}


const QtyRecruitersRadioButtons: FC<TElementWithOptions> = ({ label, name, options }) => {

	

	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<div className="rounded-input-row">
				<Field name={name}>
					{({ field }: TRadioSelectedField) => {
						return (
							options &&
							options.map((option) => {
								return (
									<QtyRecruitersRadioButton
										key={option}
										id={option}
										label={option.toString()}
										field={field}
										name={name}
									/>
								);
							})
						);
					}}
				</Field>
			</div>
		</div>
	);
};

export default QtyRecruitersRadioButtons;
