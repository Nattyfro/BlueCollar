import { Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'



export default function CompanyName() {

  const {control} = useFormContext();


  return (

    <Box alignItems='center' justifyContent="center">

    <Stack direction={{ xs: 'column', md: 'column' }} sx={{ mx:2, pt:5 }}   display= "flex">


      <Stack alignItems='center' >
        <Typography variant="body3"  sx={{ mb: 3, px:0, display: 'block' }}>
            Please enter your company name
        </Typography>
      </Stack>   
      


      <Controller
        name="name"
        control={control}
        render={({ field }) => (
        
      <TextField
      {...field}
        fullWidth
        label="Company name"
      />)}
      />

    </Stack>
    </Box>
  )
};



