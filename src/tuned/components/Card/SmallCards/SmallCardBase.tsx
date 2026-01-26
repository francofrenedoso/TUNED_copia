import CardDashboard from '../CardDashboard';
import '../../../style/tuned_colors.css';

const SmallCardBase = ({
	title,
	imgAnima,
	img,
	firstLine,
	secondLine,
	numberLine,
	mobileLine,
	styleData,
	modalData = { title: '', body: '' },
}: {
	title?: string;
	img?: string;
	imgAnima?: React.ReactNode; // Permite animar imagen
	firstLine?: string;
	secondLine?: string;
	numberLine?: React.ReactNode;
	mobileLine?: string;
	modalData?: {
		title: string;
		body: string;
	};
	styleData?: string;
}) => {
	const paragraphStyle =
		'max-[321px]:ml-1 ml-2 lg:ml-4 xl:ml-6 text_light font-black lg:font-bold sm:text-2xl lg:text-lg xl:text-2xl font-sans';

	return (
		<CardDashboard
			title={title}
			bodyClass={`flex flex-row md:p-4 min-[1600px]:px-10 items-center ${styleData}`}
			modalData={modalData}>

				<img
					src={img}
					className={`ml-4 size-12 max-[321px]:ml-2 max-[321px]:size-8 md:size-14 lg:ml-0 lg:size-16 ${imgAnima}`}
				/>


			<div>
				<p className={`${paragraphStyle} hidden md:block`}>
					{firstLine || numberLine} <br />
					{secondLine}
				</p>
				<p className={`${paragraphStyle} ml-4 block md:hidden`}>{mobileLine}</p>
			</div>
		</CardDashboard>
	);
};

export default SmallCardBase;
