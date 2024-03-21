import { FC } from 'react';
import './ExtraConditionsInput.scss';

import Input from '../Input/Input';
import Label from '../Label/Label';
import Checkbox from '../CheckboxGroup/Checkbox/Checkbox';

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
			<Input placeholder={placeholder} name={name} type="text"  />
		</div>
	);
};

export default ExtraConditionsInput;
