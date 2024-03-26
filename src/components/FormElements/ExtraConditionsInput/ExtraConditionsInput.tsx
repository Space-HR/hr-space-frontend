import { FC } from 'react';
import './ExtraConditionsInput.scss';
import Label from '../Label/Label';
import MultiLineInput from '../MultiLineInput/MultiLineInput';
import SimpleCheckbox from '../CheckboxGroup/SimpleCheckbox/SimpleCheckbox';

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
			<MultiLineInput name={name} placeholder={placeholder} />
			<SimpleCheckbox name={checkboxName} label={checkboxLabel} />
		</div>
	);
};

export default ExtraConditionsInput;
