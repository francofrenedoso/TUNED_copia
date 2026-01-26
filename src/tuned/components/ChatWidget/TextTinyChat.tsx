import '../../style/tuned_colors.css';
import { ReactNode } from 'react';

type TextTinyChatProps = {
	children: ReactNode;
	highlight?: boolean;
};

function TextTinyChat({ children, highlight = false }: TextTinyChatProps) {
	return (
		<p
			className={`${highlight ? 'text_dark' : 'text_light'} mt-4 font-sans text-[9px] font-normal`}>
			{children}
		</p>
	);
}

export default TextTinyChat;
