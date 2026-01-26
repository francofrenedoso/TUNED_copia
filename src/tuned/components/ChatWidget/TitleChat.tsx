import '../../style/tuned_colors.css';

import { ReactNode } from 'react';

function TitleChat({ children, highlight = false }: { children: ReactNode; highlight?: boolean }) {
	return (
		<h5
			className={`${highlight ? 'title_chat_highlight' : 'primary_yellow'} text-center font-sans font-bold lg:text-lg min-[1600px]:text-xl`}>
			{children}
		</h5>
	);
}

export default TitleChat;
