import { ReactNode } from 'react';

const ChatAvatar = ({ children, isImage = false }: { children: ReactNode; isImage?: boolean }) => {
	if (isImage && typeof children === 'string') {
		return (
			<img src={children} alt="avatar" className='size-8 rounded-full object-cover' />
		);
	}
	return (
		<a className='text_light secondary_gradient size-8 rounded-full text-center text-2xl font-bold'>
			{children}
		</a>
	);
};

export default ChatAvatar;
