import React from 'react'
import { useCharacter } from '../../contexts/CharacterContext'
import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'
import StatPower from '../ui/StatPower'
import StatLogo from '../ui/StatLogo'
import Health from '../../assets/icons/health.png'
import Speed from '../../assets/icons/speed.png'
import EnergyProjection from '../../assets/icons/energyprojection.png'
import Defense from '../../assets/icons/defense.png'
import ComicTitlePanel from '../ui/ComicTitlePanel'

const formatStatName = (name) => {
  // Divide el nombre en palabras usando las letras mayúsculas como separadores
  const words = name.split(/(?=[A-Z])/)

  // Capitaliza la primera letra de cada palabra
  const formattedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return formattedName
}

const CharacterStat = (props) => {
  const { form } = props;
  // Función para encontrar el stat con nombre "strength"
  const findStrengthStat = () => {
    return form.stats.find((stat) => stat.name === "strength");
  };

  const findIntelligenceStat = () => {
    return form.stats.find((stat) => stat.name === "intelligence");
  };

  const findDurabilityStat = () => {
    return form.stats.find((stat) => stat.name === "durability");
  };

  const findAgilityStat = () => {
    return form.stats.find((stat) => stat.name === "agility");
  };

  const findWisdomStat = () => {
    return form.stats.find((stat) => stat.name === "wisdom");
  };

  const findCharismaStat = () => {
    return form.stats.find((stat) => stat.name === "charisma");
  };

  const findPerceptionStat = () => {
    return form.stats.find((stat) => stat.name === "perception");
  };

  const findHPStat = () => {
    return form.stats.find((stat) => stat.name === "hp");
  };

  const findPowerStat = () => {
    return form.stats.find((stat) => stat.name === "power");
  };

  const findDefenseStat = () => {
    return form.stats.find((stat) => stat.name === "defense");
  };

  const findMeleeStat = () => {
    return form.stats.find((stat) => stat.name === "melee");
  };

  const findEnergyProjectionStat = () => {
    return form.stats.find((stat) => stat.name === "energyprojection");
  };

  const findSpeedStat = () => {
    return form.stats.find((stat) => stat.name === "speed");
  };

  const findLuckStat = () => {
    return form.stats.find((stat) => stat.name === "luck");
  };


  const strengthStat = findStrengthStat();
  const intelligenceStat = findIntelligenceStat();
  const durabilityStat = findDurabilityStat();
  const agilityStat = findAgilityStat();
  const wisdomStat = findWisdomStat();
  const charismaStat = findCharismaStat();
  const perceptionStat = findPerceptionStat();
  const hpStat = findHPStat();
  const powerStat = findPowerStat();
  const defenseStat = findDefenseStat();
  const meleeStat = findMeleeStat();
  const energyprojectionStat = findEnergyProjectionStat();
  const speedStat = findSpeedStat();
  const luckStat = findLuckStat();


  const statsData = [
    { name: 'Strength', stat: strengthStat, color: 'red' },
    { name: 'Intelligence', stat: intelligenceStat, color: 'yellow' },
    { name: 'Durability', stat: durabilityStat, color: 'green' },
    { name: 'Agility', stat: agilityStat, color: 'blue' },
    { name: 'Wisdom', stat: wisdomStat, color: 'orange' },
    { name: 'Power', stat: powerStat, color: 'purple' },
    { name: 'Melee', stat: meleeStat, color: 'teal' },
    { name: 'Perception', stat: perceptionStat, color: 'gray' },
    { name: 'Charisma', stat: charismaStat, color: 'pink' },
    { name: 'Luck', stat: luckStat, color: 'Brown' }
  ];

  const statIconData = [
    { name: 'HP', stat: hpStat, image: Health },
    { name: 'Speed', stat: speedStat, image: Speed },
    { name: 'Defense', stat: defenseStat, image: Defense },
    { name: 'Energy Projection', stat: energyprojectionStat, image: EnergyProjection }
  ];

  const StatComponent = ({ name, stat, color }) => (
    <div className="flex flex-col">
      <StatPower strokeWidth={14} percentage={stat ? stat.value : 0} statColor={color} />
      <p className='py-1 text-center'><b>{name}</b></p>
    </div>
  );

  const StaticonComponent = ({ name, stat, image }) => (
    <div className="flex flex-col">
      <StatLogo image={image} text={stat ? stat.value : 0}></StatLogo>
      <p className=' text-center'><b>{name}</b></p>
    </div>
  );


  const StatsColumn = ({ data }) => (
    <div className="flex flex-col sm:flex-row gap-10 px-0 sm:px-10">
      {data.map((item, index) => (
        <StatComponent key={index} name={item.name} stat={item.stat} color={item.color} />
      ))}
    </div>
  );

  const StatsIconColumn = ({ data }) => (
    <div className="flex flex-col sm:flex-row gap-0 sm:gap-20">
      {data.map((item, index) => (
        <StaticonComponent key={index} name={item.name} stat={item.stat} image={item.image} />
      ))}
    </div>
  );

  // Divide el array en dos columnas
  const halfLength = Math.ceil(statsData.length / 2);
  const column1 = statsData.slice(0, halfLength);
  const column2 = statsData.slice(halfLength);



  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
      <div className="flex flex-row w-auto">
              <ComicTitlePanel>
        <h1 className="text-2xl font-bold">Stats:</h1>
        </ComicTitlePanel>
        </div>



        <div className="flex flex-row sm:flex-col">
          <div className="flex flex-row sm:flex-col px-10 gap-20">
            <StatsIconColumn data={statIconData} />
          </div>
          <StatsColumn data={column1} />
          <StatsColumn data={column2} />
        </div>
      </div>
    </div>
  )
}


const CharacterStats = (props) => {

  const { form } = useForm()
  const { defaultForm } = useCharacter()

  return (
    <div
      className={clsx(
        'flex flex-col'
      )}
    >
      {
        defaultForm &&
        <CharacterStat form={form} />
      }
    </div>
  )
}

export default CharacterStats