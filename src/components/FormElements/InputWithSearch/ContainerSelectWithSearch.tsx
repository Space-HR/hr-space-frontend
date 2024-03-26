// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldProps } from 'formik';
import SelectWithSearch from './SelectWithSearch/SelectWithSearch';
import { PropOption, PropOptions } from '../../../types/formik-elements';

interface CustomSelectProps extends FieldProps {
	options: PropOptions;
	isMulti?: boolean;
	isTips?: boolean;
	placeholder?: string;
	countTips?: number;
}

const ContainerSelectWithSearch = ({
	placeholder,
	field,
	form,
	options,
	isMulti,
	isTips,
	countTips,
}: CustomSelectProps) => {
	const onChange = (option: PropOption | PropOptions | undefined) => {
		form.setFieldValue(
			field.name,
			isMulti
				? (option as PropOptions).map((item: PropOption) => item.id)
				: (option as PropOption).id
		);
	};
	const getValue = () => {
		if (options) {
			return isMulti
				? options.filter((option) => field.value?.indexOf(option.id) >= 0)
				: options.find((option) => option.id === field.value);
		}
		return isMulti ? [] : ('' as any);
	};

	return (
		<SelectWithSearch
			name={field.name}
			value={getValue()}
			onChange={onChange}
			placeholder={placeholder}
			options={options}
			isMulti={isMulti}
			isTips={isTips}
			countTips={countTips}
		/>
	);
};

export default ContainerSelectWithSearch;
