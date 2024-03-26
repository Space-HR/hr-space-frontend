/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';
import DateView, { registerLocale } from 'react-datepicker';

import { ru } from 'date-fns/locale';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import { TDatePicker, PropDatePicker } from '../../../types/formik-elements';
import Label from '../Label/Label';
// import calendar from '../../../images/ic-calendar.svg';
// import arrow from '../../../images/ic-arrow.svg';

registerLocale('ru', ru);

const DatePicker: FC<TDatePicker> = ({ label, name, ...rest }) => {
	return (
		<div className="input-conainer">
			<Label name={name} label={label} />

			<Field name={name}>
				{(props: PropDatePicker) => {
					const { setFieldValue } = props.form;
					const { value } = props.field;

					return (
						<DateView
							locale="ru"
							id={name}
							dateFormat="d MMMM, EEEE"
							{...props.field}
							{...rest}
							selected={value}
							onChange={(val: Date | null) => setFieldValue(name, val)}
							className="date-picker"
						/>
					);
				}}
			</Field>

			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default DatePicker;

