import '../../style/tuned_colors.css';

import { ReactNode } from 'react';

function TitleH3({ children }: { children: ReactNode }) {
	return (
		<h3 className='primary_yellow font-sans text-lg font-bold leading-7 tracking-tight max-[321px]:text-sm min-[1100px]:text-xl xl:text-2xl'>
			{children}
		</h3>
	);
}

export default TitleH3;
