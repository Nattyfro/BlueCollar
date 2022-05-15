import { Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function _Email ({data, setFormData}:any) {

  return (
    <Stack
          direction={{ xs: 'column', md: 'column' }}
          sx={{ mx:2, pt:5 }}
        >

      <Stack alignItems='center' >
        <Typography variant="body3"  sx={{ mb: 1, px:0, display: 'block' }}>
          Please enter your email
        </Typography>
      </Stack> 

          
      <TextField
        fullWidth
        label="Email"
        sx={{ my:1 }}
        value= {data.email}
        onChange={ (e) => {setFormData ({...data, email: e.target.value}) ;}}
      />


          
        </Stack>
  )
}
