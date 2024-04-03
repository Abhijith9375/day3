import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div style={{marginTop:"100px"}}>
        <Typography variant='h1'>registration</Typography>
        <TextField label="Fist name"variant='outlined'/><br /><br />
        <TextField label="last name"variant='outlined'/><br /><br />
        <TextField type='password'label="Enter password"variant='outlined'/><br /><br />
        <TextField label="enter Address"variant='outlined'/><br /><br />
        <Button variant='contained'>login</Button>



    </div>
  )
}

export default Registration