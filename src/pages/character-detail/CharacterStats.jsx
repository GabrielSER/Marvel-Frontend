import React from 'react'
import { useCharacter } from '../../contexts/CharacterContext'
import clsx from 'clsx'
import { useForm } from '../../contexts/FormContext'

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
  

  return (
    <div className="flex flex-row py-4">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Stats:</h1>

        <div className="flex flex-row gap-10">
          <div className="flex flex-col">
            <p className='py-1 inline-block'><b>Strength: </b>{strengthStat ? strengthStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Intelligence: </b>{intelligenceStat ? intelligenceStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Durability: </b>{durabilityStat ? durabilityStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Agility: </b>{agilityStat ? agilityStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Wisdom: </b>{wisdomStat ? wisdomStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Charisma: </b>{charismaStat ? charismaStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Perception: </b>{perceptionStat ? perceptionStat.value: 0}</p>
          </div>

          <div className="flex flex-col">
            <p className='py-1 inline-block'><b>HP: </b>{hpStat ? hpStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Power: </b>{powerStat? powerStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Defense: </b>{defenseStat ? defenseStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Melee: </b>{meleeStat ? meleeStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Energy Projection: </b>{energyprojectionStat ? energyprojectionStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Speed: </b>{speedStat ? speedStat.value: 0}</p>
            <p className='py-1 inline-block'><b>Luck: </b>{luckStat ? luckStat.value: 0}</p>
          </div>
        </div>

      </div>
    </div>
  )
}


const CharacterSkill = () => {

  const { form } = useForm()

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold'>
          Skills:
        </h1>
        {
          form.skills.map((skill) => (
            <p className='py-1 inline-block'><b>{formatStatName(skill.name)}</b>: {skill.value}</p>
          ))
        }
      </div>
    </div>
  )
}

const CharacterSpSkill = () => {

  const { form } = useForm()

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col'>
        {
          form.specialSkills.map((specialSkill) => (
            <p className='py-1 inline-block'><b>{formatStatName(specialSkill.name)}</b>: {specialSkill.value}</p>
          ))
        }
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
      {
        <CharacterSkill form={form} />
      }
      {
        <CharacterSpSkill form={form} />
      }
    </div>
  )
}

export default CharacterStats