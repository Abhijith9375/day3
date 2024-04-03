import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [name,setName] = useState()
    const changeHname = () =>{
        setName("Home")
    }
    const changeGname = () =>{
        setName("Galary")
    }
    const changeCname = () =>{
        setName("contact")
    }
    useEffect(()=>{
        changeCname()
    },[])
  return (
    <div>
        <Typography variant='h3'>welcome To {name}</Typography>
        <Button variant='contained'color='error' onClick={changeHname}>Home</Button>&nbsp;
        <Button variant='contained'color='success'  onClick={changeGname}>Galary</Button>&nbsp;
        <Button variant='contained'  onClick={changeCname}>Contact</Button>
    </div>
  )
}

export default UseE