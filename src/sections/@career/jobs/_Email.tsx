import { Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'

export default function _Email () {

  const {control} = useFormContext()

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

      <Controller
        name= 'email'
        control= {control}
        defaultValue= ''
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Email"
          />
         )}
      />
        </Stack>
        
    </Box>

  )
}
