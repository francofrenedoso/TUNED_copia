import CardDashboard from '../Card/CardDashboard';
import '../../style/tuned_colors.css';
import ListItem from './ListItem';

const TopFiveWidget = ({ width = '' }: { width?: string }) => {
	const topFiveModalData = {
		title: '5 juegos más jugados en Twitch',
		body: 'Muestra los 5 títulos con mayor audiencia en este preciso momento en la plataforma.',
	};

	return (
		<CardDashboard title='Top 5 + Jugados' width={width} modalData={topFiveModalData}>
			<ul>
				<ListItem>Grand Theft Auto V (GTA V)</ListItem>

				<ListItem>League of Legends</ListItem>

				<ListItem>Valorant</ListItem>

				<ListItem>Fortnite</ListItem>

				<ListItem noDivider={true}>Call of Duty</ListItem>
			</ul>
		</CardDashboard>
	);
};
export default TopFiveWidget;
