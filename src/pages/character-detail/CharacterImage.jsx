import clsx from 'clsx';
import { useCharacterDetail } from '../../contexts/CharacterDetailContext';
import LazyImage from '../ui/LazyImage';
import Bulletproof from '../../assets/icons/bulletproof.png'
import BulletproofLogo from '../ui/BulletproofLogo'


const StatComponent = (props) => {
  const { children } = props;

  return <div className='absolute top-0 left-0 p-4'>{children}</div>;
};

const CharacterImage = () => {
  const { selectedForm } = useCharacterDetail();

  const bulletproofStat = selectedForm.stats.find(
    stat => stat.uniqueName === 'bulletproof'
  );

  if (bulletproofStat) {
    console.log('Bulletproof Stat:', bulletproofStat);
  } else {
    console.log('Bulletproof Stat not found');
  }

  return (
    <div className='relative'>
      {bulletproofStat && <StatComponent >
        <BulletproofLogo
          image={Bulletproof}
          text={bulletproofStat.value}
        />
      </StatComponent>}
      <LazyImage
        src={selectedForm.image}
        alt={selectedForm.name}
        className={clsx(
          'flex flex-row shrink-0',
          'justify-center items-center',
          'h-[90vh]',
          'hover:scale-105',
          'ease-in-out transition-all',
          'object-cover',
          'rounded-md',
          'overflow-hidden'
        )}
        imageClassname="sm:p-0 h-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default CharacterImage;
