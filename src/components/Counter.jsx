import { Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Counter = () => {
   var [value,setCount] =useState("0")

const incCount = ()=>{
    setCount(value+1)
}
const decCount = ()=>{
    if(value>0){
    setCount(value-1)
    }

   }

  return (
    <div>
        <Typography variant='h3'>count {value}</Typography>&nbsp;
        <Button variant='contained' color='success' onClick={incCount}>+</Button>&nbsp;
        <Button variant='contained' color='error' onClick={decCount}>-</Button>

    </div>
  )
}

export default Counter