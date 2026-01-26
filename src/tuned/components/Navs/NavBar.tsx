import '../../style/tuned_colors.css';
import { useMediaQuery } from '../../hooks/useMediaQuey';

const NavBar = () => {
	const broadcasterFx = () => {
		// Aquí puedes agregar la lógica para el botón de Broadcaster
		console.log('Broadcaster button clicked');
	};

	return (
		<nav className='primary_purple_bg flex w-full items-center justify-between px-4 py-2 md:py-4 lg:px-8 lg:py-4 xl:px-12'>
			<a href='#'>
				<img src='tuned/Logo-TUNED.svg' alt='Logo' className='h-10 md:h-12 lg:h-20' />
			</a>

			<button
				className='mr-4 rounded-lg bg-purple-800 px-8 py-4 text-lg font-bold tracking-widest text-yellow-50 shadow-lg transition-colors duration-300 hover:bg-yellow-300 hover:text-purple-900 active:bg-yellow-500'
				onClick={broadcasterFx}>
				Autorizar Broadcaster
			</button>
		</nav>
	);
};

export default NavBar;
