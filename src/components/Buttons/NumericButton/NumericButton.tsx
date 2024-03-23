import { FC, ReactNode } from 'react';
import './NumericButton.scss';

type TNumericButtonProps = {
	children: ReactNode;
	position: 'right' | 'left';
	disabled?: boolean;
	onClick?: () => void;
};

const NumericButton: FC<TNumericButtonProps> = ({
	children,
	disabled,
	onClick,
	position,
}) => {
	return (
		<button
			className={`numeric-button numeric-button_${position}`}
			onClick={onClick}
			type="button"
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default NumericButton;
