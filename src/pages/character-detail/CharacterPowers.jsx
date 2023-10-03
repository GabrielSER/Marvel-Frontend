import { useCharacter } from "../../contexts/CharacterContext"
import CharacterPower from "./CharacterPower"

const CharacterPowers = () => {

    const { characterPowers } = useCharacter()

    console.log(characterPowers)

    return (
        <div className='d-flex justify-content-center align-items-center p-5'>
            {
                characterPowers &&
                <>
                    <h1 className='text-2xl font-bold sm:mx-32'>
                        Powers
                    </h1>
                    <div className='flex flex-wrap gap-4 justify-center items-center'>
                        {
                            characterPowers
                                .map((power, index) => (
                                    <div className='flex flex-col py-2'>
                                        <CharacterPower key={index} power={power} />
                                    </div>
                                ))
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default CharacterPowers