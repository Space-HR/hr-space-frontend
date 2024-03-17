import { FC, ReactNode } from 'react';

type PropTextError = {
  children?: ReactNode;
};

const TextError: FC<PropTextError> = ({ children }) => {
	return (
		<div className="error">
			{children}
		</div>
	)
}

export default TextError
