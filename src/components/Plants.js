import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import Plant from './Plant'

const Plants = (props) => {

    const [items, setItems] = useState([])
// Gets all of the plants from the api and sets them to items
    useEffect(() => {
        axiosWithAuth().get('https://water-my-plants-08.herokuapp.com/api/plants')
        .then(res => {
            console.log(res.data)
            setItems(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='plants-page'>
        <div className='plants-container'>

            {
                // Maps through the items and sets the key to item id which should make them unique
                items && items.map(itm => {
                    return (
                        <Plant key={itm.id} item={itm} />
                    )
                })
            }

        </div>
            {/* This links you to the add a plant form */}
        <Link to='/addplant' ><button className='add-plant-button'>Add a plant</button></Link>
        </div>
    )
}

export default Plants;
