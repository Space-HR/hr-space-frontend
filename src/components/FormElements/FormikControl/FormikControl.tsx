import { FC } from 'react';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Select from '../Select/Select';
import RadioButtons from '../RadioButtons/RadioButtons';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import DatePicker from '../DatePicker/DatePicker';
import { PropFormikControl } from '../../../types/formik-elements';

const FormikControl: FC<PropFormikControl> = ({ control, ...rest }) => {
	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'textarea':
			return <Textarea {...rest} />;
		case 'select':
			return <Select {...rest} />;
		case 'radio':
			return <RadioButtons {...rest} />;
		case 'checkbox':
			return <CheckboxGroup {...rest} />;
		case 'date':
			return <DatePicker {...rest} />;
		default:
			return null;
	}
};

export default FormikControl;
