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
			className="img-button"
			onClick={onClick}
			type="button"
			disabled={disabled}
		>
			{children}
			{isFilled && <div className="img-button__active" />}
		</button>
	);
};

export default ImageButton;
