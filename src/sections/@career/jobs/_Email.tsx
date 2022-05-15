import { Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

export default function _Email ({data, setFormData}:any) {

  return (


    <Box alignItems='center' justifyContent="center">

    <Stack
          direction={{ xs: 'column', md: 'column' }}
          sx={{ mx:2, pt:5 }}
        >

      <Stack alignItems='center' >
        <Typography variant="body3"  sx={{ mb: 3, px:0, display: 'block' }}>
            Please enter your email
        </Typography>
      </Stack>   

          
      <TextField
        fullWidth
        label="Email"
        value= {data.email}
        onChange={ (e) => {setFormData ({...data, email: e.target.value}) ;}}
      />
        </Stack>
        
    </Box>

  )
}
