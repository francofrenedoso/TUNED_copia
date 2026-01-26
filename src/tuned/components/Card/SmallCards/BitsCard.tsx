import SmallCardBase from './SmallCardBase';

const BitsCard = () => {
  const modalData = {
    title: 'Bits',
    body: 'Representa la cantidad de "cheers" (donaciones en forma de emotes animados) que recibiste en esta transmisión actual.',
  };
  return (
    <SmallCardBase
      title='Bits'
      img='tuned/icon_bits.png'
      firstLine='47.000'
      secondLine='bits'
      modalData={modalData}
    />
  );
};

export default BitsCard;
