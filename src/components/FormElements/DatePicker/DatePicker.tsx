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


registerLocale('ru', ru);

const DatePicker: FC<TDatePicker> = ({ label, name, ...rest }) => {
	return (
		<div className="input-conainer">
			<Label name={name} label={label} />
			<Field name={name}>
				{(props: PropDatePicker) => {
					const { setFieldValue } = props.form;
					const { value } = props.field;
					console.log(props);
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


// import calendar from '../../../images/ic-calendar.svg';
// import arrow from '../../../images/ic-arrow.svg';
// const DatePickerUnfilled: FC = () => {
// 	return (
// 		<div className="date-picker-unfilled">
// 			<img
// 				src={calendar}
// 				alt="calendar"
// 				className="date-picker__image date-picker__image_right"
// 			/>
// 			<p>Выберите дату</p>
// 			<img
// 				src={arrow}
// 				alt="arrow"
// 				className="date-picker__image date-picker__image_left"
// 			/>
// 		</div>
// 	);
// };
