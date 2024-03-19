import { FC } from 'react';
import { PropTextError } from '../../../types/formik-elements';

const TextError: FC<PropTextError> = ({ children }) => {
	return <div className="error">{children}</div>;
};

export default TextError;
