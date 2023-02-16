import React, { useLayoutEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import "./card.css";
import { useParams } from 'react-router-dom';

function Powercard(props) {

    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [bonusDamage, setbonusDamage] = useState("");
    const [type, settype] = useState("");
    const [skillCheck, setskillCheck] = useState("");
    const [description, setdescription] = useState("");
    const [module, setModule] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        async function fetchPower(id) {
            setLoading(true);
            try {
                const res = await axios.request(`http://localhost:5000/api/powers/${id}`)
                setName(res.data.name)
                setLevel(res.data.level)
                setbonusDamage(res.data.bonusDamage)
                settype(res.data.type)
                setskillCheck(res.data.skillCheck)
                setdescription(res.data.description)
                setModule(res.data.module)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchPower(props.id);
    }, []);

    let params = useParams();
     // Set the background color of the card based on the level state
  const cardStyle = {
    font: 'comic',
    width: '18rem',
    backgroundColor: level == '0' ? 'fuchsia' : level == '1' ? 'cornflowerblue' :  level == '2' ? 'darkseagreen' :  level == '3' ? 'goldenrod' :  level == '4' ? 'tomato' :  level == '5' ? 'darkgrey': 'orange'
  }; 
  const titleStyle = {
    font: 'comic',
     };
    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred: {error.message}</p>;

    else return (
        <div>
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title><p><b>{name}</b></p></Card.Title>
                    {module !== "" && <Card.Subtitle className="mb-2">Module: {module}</Card.Subtitle>}
                    <Card.Subtitle className="mb-2"><p><b><i>{bonusDamage} {type} {skillCheck} </i></b>{description}</p></Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Powercard;