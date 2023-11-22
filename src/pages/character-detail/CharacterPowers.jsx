import { FormProvider, useForm } from "../../contexts/FormContext"
import ComicTitlePanel from "../ui/ComicTitlePanel"
import CharacterPower from "./CharacterPower"

const CharacterPowers = () => {

    const { formPowers } = useForm()

    if (formPowers.length === 0 )
        return null

    return (
        <div className='d-flex justify-content-center align-items-center p-5'>
            <div className="flex w-full justify-center">
                <ComicTitlePanel className='w-min bg-comic-primary text-2xl'>
                    Powers:
                </ComicTitlePanel>
            </div>

            <div className='flex flex-wrap gap-4 justify-center items-center'>
                {
                    formPowers
                        .map((power, index) => (
                            <div key={index} className='flex flex-col py-2'>
                                <CharacterPower power={power} />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default CharacterPowers