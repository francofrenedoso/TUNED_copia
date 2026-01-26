import '../../style/tuned_colors.css';

import { ReactNode } from 'react';

function TitleH6({ children }: { children: ReactNode }) {
	return <h6 className='primary_yellow text-center font-sans text-xs font-bold'>{children}</h6>;
}

export default TitleH6;
