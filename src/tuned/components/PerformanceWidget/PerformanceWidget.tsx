/* 
Endpoint: Performance Widget

URL: `/api/performance`  // reemplazar por la real
Método: `GET`  

Formato de respuesta esperado: 

número entero de 0 a 100, representando el porcentaje de rendimiento del stream.

*/

import CardDashboard from '../Card/CardDashboard';
import '../../style/tuned_colors.css';
import { useMediaQuery } from '../../hooks/useMediaQuey';
import { useConnection } from '../../hooks/useConnection';

const PerformanceWidget = ({ width = '' }: { width?: string }) => {
	const isLgScreen = useMediaQuery('(min-width: 769px)');

	// cambiar esto por la api real
	const url = '/api/performance';
	const { data: percentage, loading } = useConnection<number>(url, 3000); // 3000 ms, retraso entre consultas

	// Validador para percentage
	if (
		percentage !== undefined &&
		(!Number.isInteger(percentage) || percentage < 0 || percentage > 100)
	) {
		console.error(
			'Error: El valor recibido no es un número entero válido (0-100):',
			percentage,
		);
	}

	const percentageStyle = 'font-normal md:font-bold text-xl md:text-2xl text_light font-sans';
	const percentageStyleMobile = 'font-bold text-2xl font-sans';

	const angle = ((percentage ?? 0) / 100) * 180 - 90;

	const performanceModalData = {
		title: 'Indicador de Performance',
		body: 'Suma los datos actuales de los indicadores y los analiza con Inteligencia Artificial para ofrecer una visión general del rendimiento del stream en este momento. Si el indicador se encuentra en el área verde, significa que te está yendo muy bien!',
	};

	const loadingContent = (
		<div className='text-md block animate-pulse tracking-wider text-stone-300'>
			<p>Cargando datos...</p>{' '}
		</div>
	);

	return (
		<CardDashboard
			isTitle={isLgScreen ? true : false}
			title='Performance'
			width={width}
			bodyClass='md:px-20 lg:px-6 xl:px-8 pt-4 items-center justify-center xl:justify-start flex flex-col'
			modalData={performanceModalData}>
			{/* Multímetro: Contenedor principal */}

			{
				// Versión escritorio
				isLgScreen && (
					<>
						<div className='relative flex aspect-[3/1] w-full items-end justify-center xl:h-4/5 2xl:h-4/6'>
							<div className="absolute left-0 top-0 z-[1] h-full w-full bg-[url('/tuned/performance.svg')] bg-contain bg-bottom bg-no-repeat" />

							{loading ? (
								loadingContent
							) : (
								<div
									className="absolute bottom-0 left-1/2 z-[2] flex h-full flex-col items-center justify-end bg-[url('/tuned/performance-pin.svg')] bg-contain bg-bottom bg-no-repeat transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:w-6 lg:w-3 xl:w-4 2xl:w-5"
									style={{
										transform: `translateX(-50%) rotate(${angle}deg)`,
										transformOrigin: 'bottom center',
									}}></div>
							)}
						</div>
						<div className='mt-20 flex w-full flex-row justify-between md:mt-2 lg:mt-1 lg:w-11/12 xl:mt-1 xl:w-4/5 min-[1600px]:w-9/12'>
							<p className={percentageStyle}>0%</p>
							<p className={percentageStyle}>100%</p>
						</div>
					</>
				)
			}

			{
				// Version mobile
				!isLgScreen &&
					(loading ? (
						loadingContent
					) : (
						<>
							<div className='relative flex h-28 w-11/12 items-end justify-center max-sm:h-16'>
								<div className="z-[1] h-full w-full bg-[url('tuned/performance-mobile.svg')] bg-contain bg-bottom bg-no-repeat" />

								<div
									className='absolute bottom-2 z-[3] h-[48px] w-1 rounded transition-transform duration-500 ease-in-out max-sm:h-[28px]'
									style={{
										left: `calc(${percentage}% - 1px)`,
										transform: `translateX(-50%)`,
										background:
											percentage === 0 ? 'rgba(255,255,255,0.05)' : '#fef08a',
										boxShadow:
											percentage === 0
												? '0 0 0 0 transparent'
												: '0 0 10px 3px rgba(255, 221, 51, 0.3)',
									}}></div>
							</div>

							<div className='mt-0 flex w-11/12 flex-row justify-between'>
								<p className={`${percentageStyleMobile} text-zinc-600`}>0%</p>
								<p className={`${percentageStyleMobile} text-yellow-50`}>
									{percentage ?? ' - '}%
								</p>
								<p className={`${percentageStyleMobile} text-zinc-600`}>100%</p>
							</div>
						</>
					))
			}
		</CardDashboard>
	);
};

export default PerformanceWidget;
