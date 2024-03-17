import { FC, ReactNode } from 'react';
import './ImageButton.scss';

export type TImageButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
	children: ReactNode;
	isFilled?: boolean;
};

const ImageButton: FC<TImageButtonProps> = ({
	onClick,
	disabled,
	children,
	isFilled,
}) => {
	return (
		<button
			className="button"
			onClick={onClick}
			type="button"
			disabled={disabled}
		>
			{children}
			{isFilled && <div className="button__active" />}
		</button>
	);
};

export default ImageButton;
