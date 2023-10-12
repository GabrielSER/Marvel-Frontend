import { FormProvider, useForm } from "../../contexts/FormContext"
import CharacterPower from "./CharacterPower"

const CharacterPowers = (props) => {

    
    const { form } = props

    const { formPowers } = useForm()

    console.log(formPowers)

    return (
        <div className='d-flex justify-content-center align-items-center p-5'>
            {
                formPowers[0] &&
                <>
                    <h1 className='text-2xl font-bold sm:mx-32'>
                        Powers
                    </h1>
                    <div className='flex flex-wrap gap-4 justify-center items-center'>
                        {
                            formPowers
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