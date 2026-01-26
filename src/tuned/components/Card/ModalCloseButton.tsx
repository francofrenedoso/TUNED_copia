import React, { Dispatch, FC, SetStateAction } from 'react';
import classNames from 'classnames';
import Button, { IButtonProps } from '../../../components/ui/Button';
import '../../style/tuned_colors.css';

interface ICloseButtonProps extends IButtonProps {
	className?: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalCloseButton: FC<ICloseButtonProps> = (props) => {
	const { className, setIsOpen, ...rest } = props;

	const classes = classNames(className);

	return (
		<Button
			data-component-name='CloseButton'
			className={`${classes} transition-all duration-150 hover:brightness-200`}
			color='amber'
			colorIntensity='200'
			size='sm'
			isActive={true}
			icon='HeroXMark'
			onClick={() => (setIsOpen ? setIsOpen(false) : undefined)}
			{...rest}></Button>
	);
};
ModalCloseButton.displayName = 'CloseButton';

export default ModalCloseButton;
