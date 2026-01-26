import '../../style/tuned_colors.css';
import TextChatBody from './TextChatBody';
import TitleChat from './TitleChat';
import TextTinyChat from './TextTinyChat';
import { ReactNode } from 'react';
import ChatAvatar from './ChatAvatar';

const ChatItem = ({
	children,
	highlight = false,
	avatar,
	title,
	time,
	isTitle = false,
	isImage = false,
}: {
	children: ReactNode;
	highlight?: boolean;
	avatar?: string;
	title?: string;
	time?: string;
	isTitle?: boolean;
	isImage?: boolean;
}) => {
	return (
		<div
			className={`${highlight ? 'bg_light p-6' : 'primary_purple_bg px-4 pt-4'} ${!isTitle && 'rounded-t-xl'} border_chat min-[1600px]:pt-4`}>
			<div className='mb-2 flex items-center gap-2'>
				<ChatAvatar isImage={isImage}>{avatar}</ChatAvatar>
				<TitleChat highlight={highlight}>{title}</TitleChat>
			</div>

			<TextChatBody highlight={highlight}>{children}</TextChatBody>
			<TextTinyChat highlight={highlight}>{time}</TextTinyChat>
		</div>
	);
};

export default ChatItem;
