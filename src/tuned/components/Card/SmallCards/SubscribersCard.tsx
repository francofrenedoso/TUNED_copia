import SmallCardBase from './SmallCardBase';

const SubscribersCard = () => {
  const modalData = {
    title: 'Suscriptores',
    body: 'Refleja el número de usuarios que pagaron para suscribirse a tu canal durante esta sesión en vivo.',
  };
  return (
    <SmallCardBase
      title='Suscriptores'
      img='tuned/icon_subs.png'
      firstLine='suscriptores'
      secondLine='+5.100'
      mobileLine='+27'
      modalData={modalData}
    />
  );
};

export default SubscribersCard;
