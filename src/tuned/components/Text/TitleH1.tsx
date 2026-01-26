import '../../style/tuned_colors.css';

import { ReactNode } from 'react';

function TitleH1({ children }: { children: ReactNode }) {
	return (
		<h1 className='text_light tracking-0 py-4 font-sans text-4xl font-semibold'>{children}</h1>
	);
}

export default TitleH1;
