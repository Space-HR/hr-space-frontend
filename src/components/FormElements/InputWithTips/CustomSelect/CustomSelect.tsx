// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';
import { FieldProps } from 'formik';
import { TOption, TOptions } from '../../../../types/formik-elements';
// import { OptionsType, ValueType } from "react-select/lib/types";

interface CustomSelectProps extends FieldProps {
	options: TOptions;
	isMulti?: boolean;
	className?: string;
	placeholder?: string;
}

const CustomSelect = ({
	className,
	placeholder,
	field,
	form,
	options,
	isMulti = false,
}: CustomSelectProps) => {
	const onChange = (option: TOption | TOptions) => {
		form.setFieldValue(
			field.name,
			isMulti
				? (option as TOptions).map((item: TOption) => item.value)
				: (option as TOption).value
		);
	};
	const getValue = () => {
		if (options) {
			return isMulti
				? options.filter((option) => field.value?.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value);
		}
		return isMulti ? [] : ('' as any);
	};

	return (
		<Select
			className={className}
			name={field.name}
			value={getValue()}
			onChange={onChange}
			placeholder={placeholder}
			options={options}
			isMulti={isMulti}
		/>
	);
};

export default CustomSelect;
