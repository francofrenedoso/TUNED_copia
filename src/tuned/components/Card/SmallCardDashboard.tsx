import { useMediaQuery } from '../../hooks/useMediaQuey';
import ViewersCard from './SmallCards/ViewersCard';
import FollowersCard from './SmallCards/FollowersCard';
import SubscribersCard from './SmallCards/SubscribersCard';
import InteractionCard from './SmallCards/InteractionCard';
import SentimentCard from './SmallCards/SentimentCard';
import BitsCard from './SmallCards/BitsCard';

const SmallCardDashboard = ({ width = '' }: { width?: string }) => {
	const isLgScreen = useMediaQuery('(min-width: 769px)');

	return (
		<div
			className={`grid w-full grid-cols-3 gap-3 min-[769px]:grid-rows-2 min-[769px]:gap-8 ${width}`}>
			<ViewersCard isLgScreen={isLgScreen} />
			<FollowersCard />
			<SubscribersCard />
			{isLgScreen && (
				<>
					<InteractionCard />
					<SentimentCard />
					<BitsCard />
				</>
			)}
		</div>
	);
};

export default SmallCardDashboard;
