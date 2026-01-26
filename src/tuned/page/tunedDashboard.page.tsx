import PageWrapper from '../../components/layouts/PageWrapper/PageWrapper';
import NavBar from '../components/Navs/NavBar';
import ChatWidget from '../components/ChatWidget/ChatWidget';
import TitleH1 from '../components/Text/TitleH1';
import TopFiveWidget from '../components/TopFiveWidget/TopFiveWidget';
import PerfomanceWidget from '../components/PerformanceWidget/PerformanceWidget';
import SmallCardDashboard from '../components/Card/SmallCardDashboard';
import { useMediaQuery } from '../hooks/useMediaQuey';
/* side menu → import SideMenuDashboard from '../components/SideMemu/SideMenuDashboard'; */

const TunedDashboard = () => {
	const isLgScreen = useMediaQuery('(min-width: 1024px)');

	return (
		<PageWrapper isProtectedRoute={false} name='tuned dashboard '>
			<div className='flex w-full flex-col p-0 pb-8'>
				<NavBar />
				<div className='flex flex-row'>
					{/* side menu → {isLgScreen && <SideMenuDashboard width='self-center' />}  */}

					{/* main content */}
					<div className='px-6 lg:px-8 xl:px-12 w-full'>
						{isLgScreen && <TitleH1>Garfield Channel Dashboard</TitleH1>}

						<div className='mt-6 flex w-full flex-col gap-4 lg:mt-0 lg:grid lg:grid-cols-5 lg:gap-6'>
							{/* columna izquierda */}
							<div className='order-3 lg:order-none lg:col-span-2'>
								<ChatWidget width='w-full' />
							</div>

							{/* columna derecha */}
							<div className='order-1 lg:order-none lg:col-span-3 flex flex-col gap-8  min-[1600px]:gap-10'>
								{/* derecha superior */}
								<div className='row-span-1 flex flex-row gap-8 
								lg:h-[42%] xl:h-[45%]'>
									<PerfomanceWidget
										width='
                        			w-full
                        			lg:w-2/3'
									/>

									<TopFiveWidget
										width='
									hidden lg:block
									lg:w-1/3'
									/>
								</div>

								<SmallCardDashboard
									width='
									 lg:h-[42%] xl:h-[55%]
									  min-[1600px]:h-[45%]
									order-2 row-span-1 
									lg:order-none md:col-span-3'
								/>
							</div>
						</div>
					</div>
					{/* end main content */}
				</div>
			</div>
		</PageWrapper>
	);
};

export default TunedDashboard;
