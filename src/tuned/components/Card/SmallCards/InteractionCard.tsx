import SmallCardBase from './SmallCardBase';

const InteractionCard = () => {
  const modalData = {
    title: 'Interacción',
    body: 'Es el porcentaje de espectadores que realizaron alguna acción (seguir, suscribirse, comentar, enviar bits) respecto al total de viewers durante esta transmisión. Mide la participación activa de tu audiencia en tiempo real.',
  };
  return (
    <SmallCardBase
      title='Interacción'
      img='tuned/icon_interaction.png'
      firstLine='interacción'
      secondLine='97%'
      modalData={modalData}
    />
  );
};

export default InteractionCard;
