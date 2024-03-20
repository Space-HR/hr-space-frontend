import { FC } from 'react';
import './Button.scss';

type TButtonProps = {
	label: string;
	styleType: 'primary' | 'secondary';
	type: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	onClick?: () => void;
};

const Button: FC<TButtonProps> = ({
	label,
	styleType,
	type,
	disabled,
	onClick,
}) => {
	return (
		<button
			className={`button button_${styleType}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default Button;
