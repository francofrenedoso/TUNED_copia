import SmallCardBase from './SmallCardBase';

const ViewersCard = ({ isLgScreen }: any) => {
  const modalData = {
    title: 'Views',
    body: 'Es el recuento de espectadores únicos que están viendo tu stream en este instante.',
  };
  return (
    <SmallCardBase
      title={isLgScreen ? 'Viewers' : 'Views'}
      img='tuned/icon_viewers.png'
      firstLine='viewers'
      secondLine='2.171'
      mobileLine='21.7K'
      modalData={modalData}
    />
  );
};

export default ViewersCard;
