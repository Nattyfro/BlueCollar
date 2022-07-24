import { Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'




export default function CompanyName() {

  const {control} = useFormContext();


  return (

    <Box alignItems='center' justifyContent="center">

<Stack spacing={6}>

      <Typography variant="h3" paragraph sx={{ pb:0}} >
        Whats your first name?
      </Typography>

    <Stack direction={{ xs: 'column', md: 'column' }} sx={{ mx:2, pt:0 }} spacing={12}  display= "flex">

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          
          <TextField
          {...field}
          label="First name"
          variant='outlined'
        
      />)}
      
      
      />

    </Stack>
    </Stack>
    </Box>
  )
};



