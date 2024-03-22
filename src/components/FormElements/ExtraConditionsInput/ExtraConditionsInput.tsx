import { FC } from 'react';
import './ExtraConditionsInput.scss';

import Label from '../Label/Label';
import Checkbox from '../CheckboxGroup/Checkbox/Checkbox';
import MultiLineInput from '../MultiLineInput/MultiLineInput';

type TExtraConditionsInputProps = {
	label: string;
	name: string;
	checkboxName: string;
	checkboxLabel: string;
	placeholder: string;
};

const ExtraConditionsInput: FC<TExtraConditionsInputProps> = ({
	label,
	name,
	checkboxName,
	checkboxLabel,
	placeholder,
}) => {
	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<Checkbox name={checkboxName} label={checkboxLabel} />
			<MultiLineInput name={name} placeholder={placeholder} />
		</div>
	);
};

export default ExtraConditionsInput;
