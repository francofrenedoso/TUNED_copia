import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	HeroArrowTrendingUp,
	HeroChartBarSquare,
	HeroChatBubbleLeftEllipsis,
	HeroCog6Tooth,
	HeroDocumentArrowDown,
	HeroRocketLaunch,
} from '../../../components/icon/heroicons';
import '../../style/tuned_colors.css';

const SideMenuDashboard = ({ width }: { width?: string }) => {
	const [isVisible, setIsVisible] = useState(false);
	const iconStyle = 'size-14 opacity-90';
	const iconColor = 'yellow';

	const FloatingButton = () => (
		<button
			onClick={() => setIsVisible(true)}
			className='fixed  bottom-8 right-4 z-40 flex items-center justify-center  opacity-30 hover:opacity-95  transition-all drop-shadow-lg'
			aria-label='Abrir menú'>
			<img src='tuned/nav_menu.svg' alt='menu' className='h-14' />
		</button>
	);

	return (
		<>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ x: -300 }}
						animate={{ x: 0 }}
						exit={{ x: -300 }}
						transition={{ type: 'tween', duration: 0.3 }}
						className={`${width} primary_purple_bg flex h-[550px] flex-col items-center justify-around gap-10 rounded-r-3xl py-8 pl-2 pr-4`}>
						<button
							onClick={() => setIsVisible(false)}
							className='self-end'
							aria-label='Cerrar menú'>
							<img src='tuned/nav_menu.svg' alt='menu' className='h-14' />
						</button>

						<HeroChartBarSquare color={iconColor} className={iconStyle} />
						<HeroChatBubbleLeftEllipsis color={iconColor} className={iconStyle} />
						<HeroArrowTrendingUp color={iconColor} className={iconStyle} />
						<HeroRocketLaunch color={iconColor} className={iconStyle} />
						<HeroCog6Tooth color={iconColor} className={iconStyle} />
						<HeroDocumentArrowDown color={iconColor} className={iconStyle} />
					</motion.div>
				)}
			</AnimatePresence>

			{!isVisible && <FloatingButton />}
		</>
	);
};

export default SideMenuDashboard;
