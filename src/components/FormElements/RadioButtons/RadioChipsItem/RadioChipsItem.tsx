import { FC, Fragment } from 'react';
import './RadioChipsItem.scss';

type RadioButtonProps = {
	field: {
	  name: string;
	  value: string;
	};
	id: string;
	label: string;
  };

const RadioChipsItem: FC <RadioButtonProps>= ({ field, id, label }) => {
	return (
		<Fragment key={id}>
			<input
				type="radio"
				id={id}
				{...field}
				value={id}
				checked={field.value === id}
			/>
			<label htmlFor={id}>{label}</label>
		</Fragment>
	);
};

export default RadioChipsItem;
