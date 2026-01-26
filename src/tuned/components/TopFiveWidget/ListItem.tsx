import '../../style/tuned_colors.css';

const ListItem = ({
	children,
	noDivider = false,
}: {
	children: React.ReactNode;
	noDivider?: boolean;
}) => {
	return (
		<li className={`${noDivider ? '' : 'divider_card'}`  }>
			<p
				className='text_light font-sans text-lg  min-[1600px]:text-2xl font-normal tracking-wide py-3  min-[1600px]:py-4 px-4'>
				{children}
			</p>
		</li>
	);
};

export default ListItem;
