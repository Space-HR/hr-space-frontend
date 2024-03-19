/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import { TDatePicker, PropDatePicker } from '../../../types/formik-elements';

const DatePicker: FC<TDatePicker> = ({ label, name, ...rest }) => {
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field name={name}>
				{(props: PropDatePicker) => {
					const { setFieldValue } = props.form;
					const { value } = props.field;
					return (
						<DateView
							id={name}
							dateFormat="dd/MM/yyyy"
							{...props.field}
							{...rest}
							selected={value}
							onChange={(val: Date | null) => setFieldValue(name, val)}
						/>
					);
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default DatePicker;
