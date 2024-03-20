import { FC } from 'react';
import './Label.scss';

type TLabelProps = {
	name: string;
	label: string;
};

const Label: FC<TLabelProps> = ({ name, label }) => {
	return (
		<label htmlFor={name} className="label">
			{label}
		</label>
	);
};

export default Label;
