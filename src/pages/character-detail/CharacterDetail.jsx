import { useParams, useNavigate } from 'react-router-dom'
import { CharacterProvider, useCharacter } from '../../contexts/CharacterContext'
import { useCharacterWithNormalizedName } from '../../hooks/useCharacterWithNormalizedName'
import clsx from 'clsx'
import { useEffect } from 'react'
import LazyImage from '../ui/LazyImage'

const CharacterDetail = () => {

    const { normalized } = useParams()

    const navigate = useNavigate()
    const character = useCharacterWithNormalizedName(normalized)

    useEffect(() => {
        if (character == null) {
            navigate('/not-found')
        }
    }, [character])

    if (character == null) return null

    return (
        <CharacterProvider character={character}>
            <div className={clsx('sm:p-20')}>
                <div className={clsx('flex flex-col w-90 h-full items-center justify-center')}>
                    <div className={clsx('flex flex-col w-100 h-full sm:mx-100 my-10 self-center')}>
                        <LazyImage
                            src={character.logo}
                            alt={character.name}
                            className='w-200 h-auto self-center sm:mx-0 mx-5 py-4'
                            imageClassname='w-full h-auto'
                        />
                    </div>
                    <div className={clsx('flex flex-col sm:flex-row w-full h-full p-4 my-10 sm:ml-20')}>
                        <div className={clsx('flex flex-col w-full sm:w-1/3 h-full')}>
                            <div className='flex flex-row'>
                                <LazyImage
                                    src={character.image}
                                    alt={character.name}
                                    className='w-50 h-auto mx-auto object-cover self-center'
                                    imageClassname='w-50 h-full object-cover self-center'
                                />
                            </div>
                            <div className='row my-2'>
                                {<div>
                                    <h1 className="text-2xl font-bold">
                                        Stats:
                                    </h1>
                                    <div className='flex flex-row'>
                                        <div className='flex flex-col mr-8 sm:mr-10 '>
                                            <p><b>Strength:</b> {character.stats.strength}</p>
                                            <p><b>Intelligence:</b> {character.stats.intelligence}</p>
                                            <p><b>Durability:</b> {character.stats.durability}</p>
                                            <p><b>Agility:</b> {character.stats.agility}</p>
                                            <p><b>Wisdom:</b> {character.stats.wisdom}</p>
                                            <p><b>Charisma:</b> {character.stats.charisma}</p>
                                            <p><b>Perception:</b> {character.stats.perception}</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <p><b>HP:</b> {character.stats.hp}</p>
                                            <p><b>Power:</b> {character.stats.power}</p>
                                            <p><b>Defense:</b> {character.stats.defense}</p>
                                            <p><b>Melee:</b> {character.stats.melee}</p>
                                            <p><b>Energy Projection:</b> {character.stats.energyprojection}</p>
                                            <p><b>Speed:</b> {character.stats.speed}</p>
                                            <p><b>Luck:</b> {character.stats.luck}</p>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="flex flex-row">
                                {<div className="flex flex-col my-2">
                                    <h1 className="text-2xl font-bold">
                                        Skills:
                                    </h1>
                                    {character.skills.acrobatics !== 0 && <div className='col'>
                                        <p><b>Acrobatics:</b> {character.skills.acrobatics}</p>
                                    </div>}
                                    {character.skills.accuracy !== 0 && <div className='col'>
                                        <p><b>Accuracy:</b> {character.skills.accuracy}</p>
                                    </div>}
                                    {character.skills.athletics !== 0 && <div className='col'>
                                        <p><b>Athletics:</b> {character.skills.athletics}</p>
                                    </div>}
                                    {character.skills.aerialPiloting !== 0 && <div className='col'>
                                        <p><b>Aerial Piloting:</b> {character.skills.aerialPiloting}</p>
                                    </div>}
                                    {character.skills.bikePiloting !== 0 && <div className='col'>
                                        <p><b>Bike Piloting:</b> {character.skills.bikePiloting}</p>
                                    </div>}
                                    {character.skills.heavyEquipmentPiloting !== 0 && <div className='col'>
                                        <p><b>Heavy Equipment Piloting :</b> {character.skills.heavyEquipmentPiloting}</p>
                                    </div>}
                                    {character.skills.lockpicking !== 0 && <div className='col'>
                                        <p><b>Lockpicking:</b> {character.skills.lockpicking}</p>
                                    </div>}
                                    {character.skills.meleeWeapons !== 0 && <div className='col'>
                                        <p><b>Melee Weapons:</b> {character.skills.meleeWeapons}</p>
                                    </div>}
                                    {character.skills.motorVehiclePiloting !== 0 && <div className='col'>
                                        <p><b>Motor Vehicle Piloting:</b> {character.skills.motorVehiclePiloting}</p>
                                    </div>}
                                    {character.skills.pickpocket !== 0 && <div className='col'>
                                        <p><b>Pickpocket:</b> {character.skills.pickpocket}</p>
                                    </div>}
                                    {character.skills.rangedWeapons !== 0 && <div className='col'>
                                        <p><b>Ranged Weapons:</b> {character.skills.rangedWeapons}</p>
                                    </div>}
                                    {character.skills.stealth !== 0 && <div className='col'>
                                        <p><b>Stealth:</b> {character.skills.stealth}</p>
                                    </div>}
                                    {character.skills.throwst !== undefined && <div className='col'>
                                        <p><b>Throw:</b> {character.skills.throwst}</p>
                                    </div>}
                                    {character.skills.underwater !== 0 && <div className='col'>
                                        <p><b>Underwater:</b> {character.skills.underwater}</p>
                                    </div>}
                                    {character.skills.waterPiloting !== 0 && <div className='col'>
                                        <p><b>Water Piloting:</b> {character.skills.waterPiloting}</p>
                                    </div>}
                                    {character.skills.animalHandling !== 0 && <div className='col'>
                                        <p><b>Animal Handling:</b> {character.skills.animalHandling}</p>
                                    </div>}
                                    {character.skills.deception !== 0 && <div className='col'>
                                        <p><b>Deception:</b> {character.skills.deception}</p>
                                    </div>}
                                    {character.skills.espionage !== 0 && <div className='col'>
                                        <p><b>Espionage:</b> {character.skills.espionage}</p>
                                    </div>}
                                    {character.skills.etiquette !== 0 && <div className='col'>
                                        <p><b>Etiquette:</b> {character.skills.etiquette}</p>
                                    </div>}
                                    {character.skills.explosives !== 0 && <div className='col'>
                                        <p><b>Explosives:</b> {character.skills.explosives}</p>
                                    </div>}
                                    {character.skills.firstAid !== 0 && <div className='col'>
                                        <p><b>First Aid:</b> {character.skills.firstAid}</p>
                                    </div>}
                                    {character.skills.firearms !== 0 && <div className='col'>
                                        <p><b>Firearms:</b> {character.skills.firearms}</p>
                                    </div>}
                                    {character.skills.electronicsKnowledge !== 0 && <div className='col'>
                                        <p><b>Electronics Knowledge:</b> {character.skills.electronicsKnowledge}</p>
                                    </div>}
                                    {character.skills.historyKnowledge !== 0 && <div className='col'>
                                        <p><b>History Knowledge:</b> {character.skills.historyKnowledge}</p>
                                    </div>}
                                    {character.skills.intimidation !== 0 && <div className='col'>
                                        <p><b>Intimidation:</b> {character.skills.intimidation}</p>
                                    </div>}
                                    {character.skills.intuition !== 0 && <div className='col'>
                                        <p><b>Intuition:</b> {character.skills.intuition}</p>
                                    </div>}
                                    {character.skills.investigation !== 0 && <div className='col'>
                                        <p><b>Investigation:</b> {character.skills.investigation}</p>
                                    </div>}
                                    {character.skills.marksman !== 0 && <div className='col'>
                                        <p><b>Marksman:</b> {character.skills.marksman}</p>
                                    </div>}
                                    {character.skills.medicine !== 0 && <div className='col'>
                                        <p><b>Medicine:</b> {character.skills.medicine}</p>
                                    </div>}
                                    {character.skills.naturalSciencesKnowledge !== 0 && <div className='col'>
                                        <p><b>Natural Sciences Knowledge:</b> {character.skills.naturalSciencesKnowledge}</p>
                                    </div>}
                                    {character.skills.persuasion !== 0 && <div className='col'>
                                        <p><b>Persuasion:</b> {character.skills.persuasion}</p>
                                    </div>}
                                    {character.skills.religion !== 0 && <div className='col'>
                                        <p><b>Religion:</b> {character.skills.religion}</p>
                                    </div>}
                                    {character.skills.softwareKnowledge !== 0 && <div className='col'>
                                        <p><b>Software Knowledge:</b> {character.skills.softwareKnowledge}</p>
                                    </div>}
                                    {character.skills.survivalist !== 0 && <div className='col'>
                                        <p><b>Survivalist:</b> {character.skills.survivalist}</p>
                                    </div>}
                                    {character.skills.tracking !== 0 && <div className='col'>
                                        <p><b>Tracking:</b> {character.skills.tracking}</p>
                                    </div>}
                                    {character.specialSkills.willpower !== 0 && <div className='col'>
                                        <p><b>Willpower:</b> {character.specialSkills.willpower}</p>
                                    </div>}
                                    {character.specialSkills.bodyStretching !== 0 && <div className='col'>
                                        <p><b>Body Stretching:</b> {character.specialSkills.bodyStretching}</p>
                                    </div>}
                                    {character.specialSkills.enviromentalAwareness !== 0 && <div className='col'>
                                        <p><b>Enviromental Awareness:</b> {character.specialSkills.enviromentalAwareness}</p>
                                    </div>}
                                    {character.specialSkills.flight !== 0 && <div className='col'>
                                        <p><b>Flight:</b> {character.specialSkills.flight}</p>
                                    </div>}
                                    {character.specialSkills.magic !== 0 && <div className='col'>
                                        <p><b>Magic:</b> {character.specialSkills.magic}</p>
                                    </div>}
                                    {character.specialSkills.chiControl !== 0 && <div className='col'>
                                        <p><b>Chi Control:</b> {character.specialSkills.chiControl}</p>
                                    </div>}
                                    {character.specialSkills.magnetism !== 0 && <div className='col'>
                                        <p><b>Magnetism:</b> {character.specialSkills.magnetism}</p>
                                    </div>}
                                    {character.specialSkills.telepathy !== 0 && <div className='col'>
                                        <p><b>Telepathy:</b> {character.specialSkills.telepathy}</p>
                                    </div>}
                                    {character.specialSkills.pyrokinesis !== 0 && <div className='col'>
                                        <p><b>Pyrokinesis:</b> {character.specialSkills.pyrokinesis}</p>
                                    </div>}
                                    {character.specialSkills.electrokinesis !== 0 && <div className='col'>
                                        <p><b>Electrokinesis:</b> {character.specialSkills.electrokinesis}</p>
                                    </div>}
                                    {character.specialSkills.cryokinesis !== 0 && <div className='col'>
                                        <p><b>Cryokinesis:</b> {character.specialSkills.cryokinesis}</p>
                                    </div>}
                                    {character.specialSkills.gravitokinesis !== 0 && <div className='col'>
                                        <p><b>Gravitokinesis:</b> {character.specialSkills.gravitokinesis}</p>
                                    </div>}
                                    {character.specialSkills.hydrokinesis !== 0 && <div className='col'>
                                        <p><b>Hydrokinesis:</b> {character.specialSkills.hydrokinesis}</p>
                                    </div>}
                                    {character.specialSkills.aerokinesis !== 0 && <div className='col'>
                                        <p><b>Aerokinesis:</b> {character.specialSkills.aerokinesis}</p>
                                    </div>}
                                    {character.specialSkills.seismokinesis !== 0 && <div className='col'>
                                        <p><b>Seismokinsis:</b> {character.specialSkills.seismokinesis}</p>
                                    </div>}
                                    {character.specialSkills.terrakinesis !== 0 && <div className='col'>
                                        <p><b>Terrakinesis:</b> {character.specialSkills.terrakinesis}</p>
                                    </div>}
                                    {character.specialSkills.thermokinesis !== 0 && <div className='col'>
                                        <p><b>Thermokinesis:</b> {character.specialSkills.thermokinesis}</p>
                                    </div>}
                                    {character.specialSkills.powerCosmic !== 0 && <div className='col'>
                                        <p><b>Power Cosmic:</b> {character.specialSkills.powerCosmic}</p>
                                    </div>}
                                    {character.specialSkills.spiritualAffinity !== 0 && <div className='col'>
                                        <p><b>Spiritual Affinity:</b> {character.specialSkills.spiritualAffinity}</p>
                                    </div>}
                                    {character.specialSkills.weatherControl !== 0 && <div className='col'>
                                        <p><b>Weather Control:</b> {character.specialSkills.weatherControl}</p>
                                    </div>}
                                    {character.specialSkills.wallCrawling !== 0 && <div className='col'>
                                        <p><b>Wall Crawling:</b> {character.specialSkills.wallCrawling}</p>
                                    </div>
                                    }
                                    {character.specialSkills.special1 !== 0 && <div className='col'>
                                        <p><b>Radiation:</b> {character.specialSkills.special1}</p>
                                    </div>}

                                    {character.specialSkills.special2 !== 0 && <div className='col'>
                                        <p><b>Phasing:</b> {character.specialSkills.special2}</p>
                                    </div>}
                                    {character.specialSkills.special3 !== 0 && <div className='col'>
                                        <p><b>Chlorokinesis:</b> {character.specialSkills.special3}</p>
                                    </div>}
                                </div>}
                            </div>
                        </div>
                        <div className={clsx('flex flex-col w-full sm:w-2/3 h-full mx-2 sm:mx-20')}>
                            <p className="sm:self-start mb-2"> <b className="text-2xl font-bold">Real Name: </b>{character.alterego} </p>
                            <h1 className="text-2xl font-bold">
                                Bio:
                            </h1>
                            <span className="sm:self-start">
                                {character.description}
                            </span>
                            {character.abilities.length > 0 && <div className="flex flex-col my-2">
                                <h1 className="text-2xl font-bold">
                                    Abilities:
                                </h1>
                                {character.abilities.map((ability) => (
                                    <p className='py-2'><b>{ability.split(":")[0]}</b>: {ability.split(":")[1]}</p>
                                ))}
                            </div>}
                            {character.weaknesses.length > 0 && <div className="flex flex-col my-2">
                                <h1 className="text-2xl font-bold">
                                    Weaknesses:
                                </h1>
                                {character.weaknesses.map((weakness) => (
                                    <p className='py-2'><b>{weakness.split(":")[0]}</b>: {weakness.split(":")[1]}</p>
                                ))}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </CharacterProvider>
    )
}

export default CharacterDetail