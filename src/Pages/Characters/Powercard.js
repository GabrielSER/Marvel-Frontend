import React, { useLayoutEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import "./card.css";
import { useParams } from 'react-router-dom';
import { usePowers } from '../../Contexts/PowersContext';

function Powercard(props) {

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
        width: '18rem',
    };
    const titleStyle = {
        font: 'comic',
    };
    if (loading||!power) return <p>Loading...</p>;
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
        <div>
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title><p><b>{name}</b></p></Card.Title>
                    {module !== "" && <Card.Subtitle className="mb-2"><p><b>Module:</b> {module}</p></Card.Subtitle>}
                    <Card.Subtitle className="mb-2"><p><b><i>{bonusDamage} {type} {skillCheck} </i></b>{description}</p></Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Powercard;