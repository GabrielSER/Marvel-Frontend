import React, { useCallback, useLayoutEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { useEffect } from 'react'
import { useState } from 'react'
import "./card.css"
import { useParams } from 'react-router-dom'
import { usePowers } from '../../Contexts/PowersContext'

const initialState = {
    name: '',
    level: 0,
    bonusDamage: "",
    type: "",
    skillCheck: "",
    description: "",
    character: "",
    chance: [],
    statusEffect: [],
    form: ""
}

const AddPower = () => {

    const [power, setPower] = useState(initialState)
    const {addPowerToCharacter} = usePowers()

    const createPower = useCallback(async() => {
        await addPowerToCharacter(power)
    }, [power])

    const handleChange = (event) => {
        const {name, value} = event.target
        setPower({
            ...power,
            [name]: value
        })
    }

    return (
        <div className="container mt-2">
            <h2>AddPower</h2>
                <div className="mb-2 mt-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                        value={power.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2 mt-3">
                    <input
                        type="number"
                        name="level"
                        placeholder="level"
                        className="form-control"
                        value={power.level}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2 mt-3">
                    <input
                        type="text"
                        name="bonusDamage"
                        placeholder="bonusDamage"
                        className="form-control"
                        value={power.bonusDamage}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2 mt-3">
                    <input
                        type="text"
                        name="type"
                        placeholder="type"
                        className="form-control"
                        value={power.type}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2 mt-3">
                    <input
                        type="text"
                        name="skillCheck"
                        placeholder="skillCheck"
                        className="form-control"
                        value={power.skillCheck}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2 mt-3">
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        className="form-control"
                        value={power.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2 mt-3">
                    <input
                        type="text"
                        name="character"
                        placeholder="character"
                        className="form-control"
                        value={power.character}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={createPower} className="btn btn-danger">
                    Create
                </button>
        </div>
    )
}
export default AddPower;