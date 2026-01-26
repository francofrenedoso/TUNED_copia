import '../../style/tuned_colors.css';

import { ReactNode } from 'react';

function TitleH5({ children }: { children: ReactNode }) {
	return <h5 className='primary_yellow text-center font-sans text-sm font-bold'>{children}</h5>;
}

export default TitleH5;
