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

    <Stack direction={{ xs: 'column', md: 'column' }} sx={{ mx:2, pt:0 }} spacing={12}  display= "flex">


      {/* <Stack alignItems='center' >
        <Typography variant="body1"  sx={{ mb: 3, px:0, display: 'block' }}>
            Enter your company name
        </Typography>
      </Stack>    */}

      <Stack alignItems="center" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
          <Typography variant="subtitle2">BlueCollar user request</Typography>
        </Stack>
        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          What is your company name?
        </Typography>
      </Stack>
      


      <Controller
        name="name"
        control={control}
        render={({ field }) => (
        
      <TextField
      {...field}
        fullWidth
        // InputProps={{  margin:"dense"      }}
        sx={{mt:2, px:2}}
        variant='standard'
        // label="Company name"
        
      />)}
      
      
      />

    </Stack>
    </Box>
  )
};



