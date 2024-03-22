import { FC } from 'react';
import './NumericInput.scss';

import { Field, useFormikContext } from 'formik';
import Label from '../Label/Label';
import { handleKeyDown } from '../../../utils/inputsRestrictions';
import NumericButton from '../../Buttons/NumericButton/NumericButton';
import Plus from '../../svg/Plus';
import Minus from '../../svg/Minus';

type TExtraConditionsInputProps = {
	label: string;
	name: string;
};

type TFormValues = {
	[key: string]: number;
};

const NumericInput: FC<TExtraConditionsInputProps> = ({ label, name }) => {

const { values, setFieldValue } = useFormikContext<TFormValues>(); 
const fieldValue = values[name];

	
const handleIncrement = () => {
	const currentValue = fieldValue + 1;
	setFieldValue(name, currentValue);
  };
  
  const handleDecrement = () => {
	const currentValue = fieldValue - 1;
	setFieldValue(name, currentValue);
  };

  const handleBlur = () => {
    if (fieldValue > 10) {
      setFieldValue(name, 10);
    }
  };

	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<div className='numeric-input'>
				<NumericButton position="right" disabled={fieldValue <= 1} onClick={handleDecrement} >
					<Minus />
				</NumericButton>
				<Field
					id={name}
					name={name}
					type="number"
					maxLength={2}
					min={1}
					max={10}
					step="1"
					className="numeric-input__field"
					onKeyDown={handleKeyDown}
					onBlur={handleBlur}
				/>
				<NumericButton position="left" disabled={fieldValue >= 10} onClick={handleIncrement}>
					<Plus />
				</NumericButton>
			</div>
		</div>
	);
};

export default NumericInput;
