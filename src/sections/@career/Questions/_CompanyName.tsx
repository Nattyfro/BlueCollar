import { Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Iconify } from '../../../components';
import securityIcon from '@iconify/icons-carbon/security';





export default function CompanyName() {

  const {control} = useFormContext();


  return (

    <Box alignItems='center' justifyContent="center">

<Stack spacing={6}>

<Stack alignItems="center" spacing={1}>
  <Stack direction="row" alignItems="center" spacing={1}>
    <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
    <Typography variant="subtitle2">BlueCollar Listing application</Typography>
  </Stack>
                  <Typography variant="body3" sx={{ color: 'text.disabled' }}>
                  What's your first name?
                  </Typography>
</Stack> 

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



