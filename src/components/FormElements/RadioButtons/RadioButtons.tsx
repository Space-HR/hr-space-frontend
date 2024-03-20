import { FC } from 'react';
import './RadioButtons.scss';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import {
	TElementWithOptions,
	selectedField,
} from '../../../types/formik-elements';
import RadioChipsItem from './RadioChipsItem/RadioChipsItem';
import Label from '../Label/Label';

const RadioButtons: FC<TElementWithOptions> = ({
	label,
	name,
	options,
	...rest
}) => {
	return (
		<div className="radio-buttons">
			<Label name={name} label={label}/>

			<Field name={name} {...rest} className="radio-buttons__chips-item-container">
				{({ field }: selectedField) => {
					return (
						options &&
						options.map((option) => {
							return (
								<RadioChipsItem
									key={option.id}
									id={option.id}
									label={option.value}
									field={field}
								/>
							);
						})
					);
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default RadioButtons;
