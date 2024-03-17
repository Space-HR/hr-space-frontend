import { FC } from 'react';
import { Formik, Form } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup';
import FormikControl from '../FormikControl/FormikControl';

const FormikContainer: FC = () => {
	const initialValues = {
		textT: '',
		date: undefined,
		radioOptions: [],
	};

	const validationSchema = Yup.object({
		textT: Yup.string(),
		date: Yup.date().nullable(),
		radioOptions: Yup.array(),
	});

	type FormModel = {
		textT: string;
		radioOptions: string[];
		date: Date | undefined;
	};

	const onSubmit = (values: FormModel) =>
		console.log('Form data', JSON.parse(JSON.stringify(values)));

	const radioOptions = [
		{ key: '1', value: '11' },
		{ key: '2', value: '22' },
		{ key: '3', value: '33' },
	];

	return (
		<Formik<FormModel>
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{/* {formik} */}
			{() => (
				<Form>
					<FormikControl control="date" label="Date" name="date" />
					<FormikControl
						control="input"
						label="Input"
						name="textT"
						type="text"
					/>
					<FormikControl
						control="checkbox"
						options={radioOptions}
						label="Select checkbox"
						name="radioOptions"
					/>
					<button type="submit">Нажми</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;
