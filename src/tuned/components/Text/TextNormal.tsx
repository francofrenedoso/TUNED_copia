import '../../style/tuned_colors.css';

import { ReactNode } from 'react';

function TextNormal({ children }: { children: ReactNode }) {
	return (
		<p className='text_light font-sans text-base font-normal tracking-normal min-[1200px]:text-lg'>
			{children}
		</p>
	);
}

export default TextNormal;
