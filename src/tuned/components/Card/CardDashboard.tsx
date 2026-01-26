import React, { ReactNode, useState } from 'react';
import '../../style/tuned_colors.css';

import Card, { CardHeader, CardBody, CardFooter } from '../../../components/ui/Card';
import TitleH3 from '../Text/TitleH3';
import Modal, { ModalBody, ModalHeader } from '../../../components/ui/Modal';
import { useMediaQuery } from '../../hooks/useMediaQuey';
import TextNormal from '../Text/TextNormal';

const CardDashboard = ({
	children,
	title,
	footChat,
	footChatText,
	width = 'w-full',
	bodyClass = '',
	isTitle = true,
	modalData = { title: '', body: '' },
}: {
	children?: ReactNode;
	title?: string;
	footChat?: boolean;
	footChatText?: ReactNode;
	width?: string;
	bodyClass?: string;
	isTitle?: boolean;
	modalData?: {
		title: string;
		body: string;
	};
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};

	const isLgScreen = useMediaQuery('(min-width: 769px)');
	const modalClass = 'primary_purple_bg px-12 py-3';

	return (
		<Card rounded='rounded-2xl' bg='primary_purple_bg' className={`${width} p-0`}>
			{isTitle && (
				<CardHeader
					className={`${isLgScreen && 'divider_card'} px-2 lg:px-4`}
					isTuned={true}>
					<TitleH3>{title}</TitleH3>

					<button
						className='hidden transition-opacity duration-200 hover:opacity-50 lg:block'
						onClick={openModal}>
						<img src='tuned/help.svg' alt='Help' />
					</button>

					<Modal
						isOpen={isModalOpen}
						setIsOpen={setIsModalOpen}
						size='md'
						isCentered={true}>
						<ModalHeader isTuned={true} className={`pt-6 ${modalClass}`}>
							<TitleH3> {modalData?.title} </TitleH3>
						</ModalHeader>

						<ModalBody isTuned={true} className={`flex flex-col pb-6 ${modalClass}`}>
							<TextNormal>{modalData?.body}</TextNormal>
						</ModalBody>
					</Modal>
				</CardHeader>
			)}
			<CardBody tuned={true} className={bodyClass}>
				{children}
			</CardBody>
			<CardFooter>
				{footChat && (
					<p className='title_chat_highlight border_chat w-full pt-4 text-center font-sans text-sm font-semibold leading-6 text-purple-950'>
						{footChatText}
					</p>
				)}
			</CardFooter>
		</Card>
	);
};

export default CardDashboard;
