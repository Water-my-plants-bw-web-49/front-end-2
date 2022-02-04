import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'
const initialFormValues = {
    plant: '',
    nickname: '',
    species: '',
    h2ofrequency: ''
}

export default function PlantForm (props) {

    const {push} = useHistory()
    const [formValues, setFormValues] = useState(initialFormValues);

    const postNewItem = newItem => {
        axiosWithAuth().post(`https://water-my-plants-08.herokuapp.com/api/plants`, newItem)
            .then(res => {
                console.log(res)
                push('/plants')
            })
            .catch(err => {
                console.error(err)
            })
    }

    const onChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
      }


    const submitItem = () => {
        const newItem = {
            plant: formValues.plant,
            nickname: formValues.nickname,
            species: formValues.species,
            h2ofrequency: formValues.h2ofrequency
        }
        postNewItem(newItem)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submitItem()

    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group'>
                <h2>Add a plant</h2>

                <div className='form-group'>

                    <label>Plant</label>
                        <input 
                            name='plant'
                            type='text'
                            value={formValues.plant}
                            onChange={onChange}
                            id='plant-input'
                        />
                    

                    <label>Nickname</label>
                        <input 
                            name='nickname'
                            type='text'
                            value={formValues.nickname}
                            onChange={onChange}
                            id='nickname-input'
                        />
                    

                    <label>Species</label>
                        <input
                            name='species' 
                            type='text'
                            value={formValues.species}
                            onChange={onChange}
                            id='species-input'
                        />
                    

                    <label>H2O Frequency</label>
                        <input
                        name='h2ofrequency' 
                        type="text"
                        value={formValues.h2ofrequency}
                        onChange={onChange}
                        id='h2ofrequency-input'
                        />
                    
                </div>

                <button id='submit-button'>
                    Add A Plant
                </button>
            
            </div>
        </form>
    )




}