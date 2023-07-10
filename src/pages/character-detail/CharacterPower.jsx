import clsx from 'clsx'
import { PowersProvider, usePowers } from '../../contexts/PowersContext';
import { useEffect } from 'react';
import { useState } from 'react';

const CharacterPower = (props) => {

    const [power, setPower] = useState()
    const [error, setError] = useState(false);
    const { getPowerbyId, loading, powers } = usePowers()

    useEffect(() => {
        async function fetchPower(id) {
            setPower(getPowerbyId(id))
        }
        fetchPower(props.id);
    }, [loading, getPowerbyId]);



    // Set the background color of the card based on the level state
    const cardStyle = {
        font: 'comic',
        width: '20em',
    };
    const titleStyle = {
        font: 'comic',
    };
    if (loading||!power) return <div class="loadingring">Loading
        <span></span>
    </div>;
    const {
        level,
        name,
        module,
        bonusDamage,
        type,
        skillCheck,
        description
    } = power
    cardStyle.backgroundColor= level == '0' ? 'violet' : level == '1' ? 'cornflowerblue' : level == '2' ? 'darkseagreen' : level == '3' ? 'gold' : level == '4' ? 'tomato' : level == '5' ? 'darkgrey' : 'orange'

    if (error) return <p>An error occurred: {error.message}</p>;

    else return (
       <PowersProvider power={power}>
            <div
                className={clsx(
                    'flex',
                    'relative',
                    'w-52 h-auto',
                    'rounded-md',
                    'hover:scale-105',
                    'overflow-hidden',
                    'p-2'
                )}
                style={cardStyle}>
                <p><b>{power.name} { console.log(power)}</b></p>
                    <p><b><i>{power.bonusDamage} {power.type} {power.skillCheck} </i></b>{power.description}</p>
                </div>
        </PowersProvider>
            );

}

            export default CharacterPower   