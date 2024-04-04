import React, { useMemo } from 'react'
import { useForm } from '../../contexts/FormContext'
import StatPower from '../ui/StatPower'
import StatLogo from '../ui/StatLogo'
import Health from '../../assets/icons/health.png'
import Speed from '../../assets/icons/speed.png'
import EnergyProjection from '../../assets/icons/energyprojection.png'
import Defense from '../../assets/icons/defense.png'
import ComicTitlePanel from '../ui/ComicTitlePanel'

const statIconData = [
  { uniqueName: 'hp', name: 'HP', image: Health },
  { uniqueName: 'speed', name: 'Speed', image: Speed },
  { uniqueName: 'defense', name: 'Defense', image: Defense },
  { uniqueName: 'energyprojection', name: 'Energy Projection', image: EnergyProjection }
]

const statsData = [
  { uniqueName: 'strength', name: 'Strength', color: 'red' },
  { uniqueName: 'intelligence', name: 'Intelligence', color: 'yellow' },
  { uniqueName: 'durability', name: 'Durability', color: 'green' },
  { uniqueName: 'agility', name: 'Agility', color: 'blue' },
  { uniqueName: 'wisdom', name: 'Wisdom', color: 'orange' },
  { uniqueName: 'power', name: 'Power', color: 'purple' },
  { uniqueName: 'melee', name: 'Melee', color: 'teal' },
  { uniqueName: 'perception', name: 'Perception', color: 'gray' },
  { uniqueName: 'charisma', name: 'Charisma', color: 'pink' },
  { uniqueName: 'luck', name: 'Luck', color: 'Brown' }
]

const StatComponent = (props) => {

  const { name, children } = props

  return (
    <div className='flex flex-col items-center gap-1'>
      {children}
      <label className='text-center font-bold text-xs xs:text-md sm:text-base'>
        {name}
      </label>
    </div>
  )
}

const CharacterStats = () => {

  const { form } = useForm()

  const statsMap = useMemo(() => {
    return new Map(form.stats.map(stat => [stat.uniqueName, stat]))
  }, [form])

  const appendStat = (data) => ({
    ...data,
    stat: statsMap.get(data.uniqueName)
  })

  return (
    <div className='flex flex-col max-w-6xl w-full'>
      <ComicTitlePanel>
        Stats:
      </ComicTitlePanel>
      <div className='flex-col w-full gap-6 px-10'>
        <div className='grid sm:grid-cols-4 sm:grid-flow-row gap-6'>
          {
            statIconData
              .map(appendStat)
              .map((data, index) =>
                <StatComponent
                  key={index}
                  name={data.name ?? data.stat?.name}
                >
                  <StatLogo
                    image={data.image}
                    text={data.stat?.value ?? 0}
                  />
                </StatComponent>
              )
          }
        </div>
        <div className='w-full grid grid-cols-2 grid-flow-row sm:grid-cols-5 sm:grid-flow-row gap-6'>
          {
            statsData
              .map(appendStat)
              .map((data, index) =>
                <StatComponent
                  key={index}
                  name={data.name ?? data.stat?.name}
                >
                  <StatPower
                    strokeWidth={14}
                    percentage={data.stat?.value ?? 0}
                    statColor={data.color}
                  />
                </StatComponent>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default CharacterStats