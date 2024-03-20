import { FC } from 'react';
import './TextError.scss';
import { PropTextError } from '../../../types/formik-elements';

const TextError: FC<PropTextError> = ({ children }) => {
	return <div className="error">{children}</div>;
};

export default TextError;
