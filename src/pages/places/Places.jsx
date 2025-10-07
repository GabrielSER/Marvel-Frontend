import clsx from 'clsx'
import EarthXXXX from '../../assets/images/places/place.png'
import Planet from '../../assets/images/places/planet.webp'
import Microverse from '../../assets/images/places/microverse.webp'
import TVA from '../../assets/images/places/TVA.jpg'
import ComicTitlePanel from '../ui/ComicTitlePanel'

const BigTitle = (props) => (
  <div className='flex flex-col items-center'>
    <div className='flex flex-row w-auto'>
      <ComicTitlePanel>
        <h1
          className='text-4xl font-semibold text-center'
          {...props}
        />
      </ComicTitlePanel>
    </div>
  </div>
)

const Paragraph = (props) => (
  <div
    className='text-gray-700 text-justify px-5'
    {...props}
  />
)

const Section = (props) => (
  <div
    className='flex flex-col w-full'
    {...props}
  />
)

const Places = () => {
  return (
    <div
      className={clsx(
        'relative',
        'flex flex-wrap',
        'items-center',
        'justify-center',
        'py-6 px-2 sm:px-8',
        'min-h-screen gap-y-20'
      )}
    >
      <Section>
        <div className='flex flex-row self-center py-5 max-w-full'>
          <ComicTitlePanel>
            <h1 className='text-2xl sm:text-5xl font-semibold mt-4 text-center max-w-full'>
              THE MARVEL UNIVERSE
            </h1>
          </ComicTitlePanel>
        </div>
        <BigTitle className="className='text-xl sm:text-5xl">
          Earth-XXXX
        </BigTitle>
      </Section>

      <Section>
        <Paragraph>
          Welcome to Earth-XXXX (Being each X any number you want), your very
          own Marvel Universe. You can create your own Universe with your own
          rules and your own key locations.
        </Paragraph>
        <Paragraph>
          The Marvel Universe has all the features of our reality: same
          countries, same personalities (politicians, movie stars, presidents,
          etc.), same historical events (Trojan War, World Wars, 9/11, etc.),
          and so on. However, it also features distinct ones, such as countries
          like Wakanda, Latveria, and Genosha, and organizations like the
          espionage agency S.H.I.E.L.D. and its main enemy, Hydra.
        </Paragraph>

        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='max-w-xs md:max-w-xl lg:max-w-7xl rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={EarthXXXX}
            alt='Earth-XXXX'
          />
        </div>
      </Section>

      <Section>
        <BigTitle>Dimensions</BigTitle>
        <Paragraph>
          Several dimensions coexist simultaneously without affecting each other
          directly, ranging from the Earth-like to the totally alien. Some are
          magical in nature and others are scientific; some are inhabited and
          others are not. These include realities like the Microverse, Darkforce
          Dimension, the Mojoverse, and many more.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='lg:max-w-4xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={Microverse}
            alt='Microverse'
          />
        </div>
      </Section>

      <Section>
        <BigTitle>Time</BigTitle>
        <Paragraph>
          Another noteworthy feature of this universe is that time "branches
          out" creating new alternate realities when certain important events
          happen. Those realities can also spawn realities of their own. There
          exist hundreds, probably thousands, or even millions of such
          realities. It is unknown why this happens, though a warp known as the
          Nexus of All Realities exists in a swamp in Florida. For the most part
          this does not matter, as most beings are unaware that this occurs, or
          even that their universes were recently "born" from another. However,
          organizations exist which try to monitor or manipulate the various
          realities. These include the Captain Britain Corps, the Time Variance
          Authority, and Kang the Conqueror's forces. See Continuities, below.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='lg:max-w-5xl max-w-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={TVA}
            alt='TVA'
          />
        </div>
      </Section>

      <Section>
        <BigTitle>Planets</BigTitle>
        <Paragraph>
          The main physical dimension of the Marvel Universe is composed by many
          different planets.
        </Paragraph>
        <Paragraph>
          A Planet is the common designation for a certain type of celestial
          body usually orbiting a star. They occurred in a great variety of
          different compositions, masses, and surface conditions. The exact
          definition of what constituted a planet varied among cultures.
        </Paragraph>
        <div className='flex justify-center'>
          {' '}
          {/* Added a flex container for centering */}
          <img
            className='lg:max-w-5xl max-w-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 my-6'
            src={Planet}
            alt='Planet'
          />
        </div>
      </Section>
      <Section>
        <BigTitle>New York City</BigTitle>
        <Paragraph>
          New York City is the largest city and largest metropolitan area, by
          population, in the United States. It is an international center for
          politics, finance, theater, music, fashion, and culture. New York City
          is a global city that houses the United Nations. The city is home to
          many landmarks including the Statue of Liberty, Empire State Building,
          Flatiron Building, Chrysler Building, and Saint Patrick's Cathedral.
          Another world famous landmark, the World Trade Center, also known as
          the Twin Towers, adorned the skyline until the September 11th
          terrorist attacks. Explore New York City within this interactive map:
        </Paragraph>
        <div className='flex justify-center w-full h-full'>
          <iframe
            className='w-full sm:w-3/4 min-h-[800px] sm:min-h-[1000px] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 sm:my-0 my-6'
            src='https://app.kanka.io/w/earth-2205/maps/85261/explore'
            title='Marvel Universe Map'
            frameBorder='0'
            allowFullScreen
          />
        </div>
      </Section>

    </div>
  )
}

export default Places
