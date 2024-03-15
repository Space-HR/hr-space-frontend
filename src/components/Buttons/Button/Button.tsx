import { FC } from 'react';
import './Button.scss';

type TButtonProps = {
	className?: string;
	onClick?: () => void;
	type: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	label: string;
};

const Button: FC<TButtonProps> = ({
	className,
	onClick,
	type,
	disabled,
	label,
}) => {
	return (
		<button
			className={`button ${className}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default Button;
