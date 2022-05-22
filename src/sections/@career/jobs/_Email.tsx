import { Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { Iconify } from '../../../components';
import securityIcon from '@iconify/icons-carbon/security';


export default function _Email () {

  const {control} = useFormContext()

  return (

    <Box alignItems='center' justifyContent="center">

    <Stack
          direction={{ xs: 'column', md: 'column' }}
          sx={{ mx:2, pt:0 }}
        >

          <Stack spacing={12}>

      <Stack alignItems="center" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
          <Typography variant="subtitle2">BlueCollar user request</Typography>
        </Stack>
        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
        What is your email address?
        </Typography>
      </Stack>


      <Stack sx={{px:2}}>
      <Controller
        name= 'email'
        control= {control}
        defaultValue= ''
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            variant="standard"
            // label="Email"
          />
         )}
      />
      </Stack>
        </Stack>
        </Stack>
        
    </Box>

  )
}
