import { FC, ReactNode } from 'react';
import './FormWrapper.scss';

type FormWrapperProps = {
	title: string;
	children: ReactNode;
};

const FormWrapper: FC<FormWrapperProps> = ({ title, children }) => {
	return (
		<div className="form-wrapper">
			<h1 className="form-wrapper__title">{title}</h1>
			{children}
		</div>
	);
};

export default FormWrapper;
