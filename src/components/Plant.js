import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import {useParams} from 'react-router-dom'

const Plant = (props) => {
    const [item, setItem] = useState({})
    const {id} = useParams()
// If the user is logged in grab the item with this id.
    useEffect(() => {
        if (id) {axiosWithAuth().get(`/items/${id}`)
        .then(res => {
            console.log(res.data)
            //Set the item to the items listed in the api
            setItem(res.data.item)
        })
        .catch(err => {
            console.log(err)
        })
    } else {
        setItem(props.item) 
    }
    }, [])
    
    return (
        <div className='plant'>
            {/* Gets the item's name from the api and displays it in a header 1 */}
            <h2>{item.plant}</h2>
            {/* Grabs the desciption from the api of what the item is. */}
            <p>Nickname: {item.nickname}</p>
            {/* Grabs the species name */}
            <p>Species: {item.species}</p>
            {/* Grabs the H2O frequency from the api */}
            <p>Price: {item.h2ofrequency}</p>
        </div>
    )
}

export default Plant
