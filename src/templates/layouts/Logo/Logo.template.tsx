import React, { FC, ImgHTMLAttributes } from 'react';

type ILogoTemplateProps = ImgHTMLAttributes<HTMLImageElement>;

const LogoTemplate: FC<ILogoTemplateProps> = (props) => {
	const { ...rest } = props;
	return (
		<img
			src="/tuned/Logo-TUNED.svg" 
			alt="Logo"
			{...rest}
		/>
	);
};

export default LogoTemplate;
