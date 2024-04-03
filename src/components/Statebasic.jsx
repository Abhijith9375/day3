import {Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    // var name ="Abhi"
    var [name,setName]=useState("Abhi")
    var [value,setValue] =useState()
    const changeName = ()=>{
        console.log("clicked")
        setName(value)
    }
    const inputHandler = (e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
        }

  return (
    <div>
        <Typography variant='h3'>welcome {name}</Typography>&nbsp;
        <TextField lable="Enetr name" variant='outlined' onChange={inputHandler}/><br />
       <Button variant='contained' color='error' onClick={changeName}>Change</Button>
    </div>
  )
}

export default Statebasic