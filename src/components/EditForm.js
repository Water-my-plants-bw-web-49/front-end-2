import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button'
import {FormContainer} from './FormContainer'

const EditPlant = (props) => {
    const {push} = useHistory();

    const [plant, setPlant] = useState({
      species: "",
      nickname: "",
      water_frequency: "",  
    })

    const { plantId } = useParams()
    const userID = localStorage.getItem("user")

    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        })
    }
    

    return(
        <FormContainer>
            <h2>Edit Plant</h2>
           <div className='formContainer'>
           <form onSubmit={handleSubmit}>
                    <label htmlFor='species'>species</label>
                        <input 
                            type="text"
                            name="species"
                            value={plant.species}
                            onChange={handleChange}
                        />
                    

                    <label htmlFor='nickname'>nickname</label>
                        <input 
                            type="text"
                            name="nickname"
                            value={plant.nickname}
                            onChange={handleChange}
                        />
                    

                    <label htmlFor='water_frequency'>water frequency</label>
                        <input 
                            type="text"
                            name="water_frequency"
                            value={plant.water_frequency}
                            onChange={handleChange}
                        />

                    <div className='button'>
                        <Button type='sumbit' innerText={'save'}/>
                        <Button onClick={()=>push(`/plant/${plantId}`)} innerText={'Cancel'}/>
                    </div>
        
            </form>
           </div>
        </FormContainer>
    )
}

export default EditPlant;