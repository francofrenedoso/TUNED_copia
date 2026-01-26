import SmallCardBase from './SmallCardBase';

const FollowersCard = () => {
  const modalData = {
    title: 'Seguidores',
    body: 'Indica la cantidad de usuarios que hicieron clic en "Seguir" en tu canal durante la transmisión actual.',
  };
  return (
    <SmallCardBase
      title='Seguidores'
      img='tuned/icon_followers.png'
      firstLine='seguidores'
      secondLine='+717'
      mobileLine='717'
      modalData={modalData}
    />
  );
};

export default FollowersCard;
