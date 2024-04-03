import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{marginTop:"100px"}}>
        <Typography variant='h3'>Login Page</Typography>&nbsp;<br />
        <TextField label="Enter User Id"variant='outlined'></TextField><br /><br />
        <TextField label="Password"type='password'variant='outlined'/> <br /><br />
        <Button variant='contained'>login</Button>

    </div>
  )
}

export default Login