import '../../style/tuned_colors.css';

import { ReactNode } from 'react';

function TextChatBody({
	children,
	highlight = false,
}: {
	children: ReactNode;
	highlight?: boolean;
}) {
	return highlight ? (
		<p className='text_dark font-sans font-normal leading-6 lg:text-base min-[1600px]:text-lg'>
			{children}
		</p>
	) : (
		<p className='text_light font-sans font-normal leading-5 tracking-normal lg:text-base min-[1600px]:text-lg'>
			{children}
		</p>
	);
}

export default TextChatBody;
