import React from 'react'
import {
  Stack, TextField, Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { Controller } from 'react-hook-form';
import { useFormContext } from 'react-hook-form'
import { Iconify } from '../../../components';
import securityIcon from '@iconify/icons-carbon/security';


const CHARACTER_LIMIT = 300;

//spacing={{ xs: 2.5, md: 5 }}
export default function _Message() {

  const {control} = useFormContext();

  return (

    <Box alignItems='center' justifyContent="center" sx={{mx:0.5}}>
          
     <Stack spacing={6}>

     <Stack alignItems="center" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
          <Typography variant="subtitle2">BlueCollar user request</Typography>
        </Stack>
        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          Greet the candidate with a welcoming message.
        </Typography>
      </Stack>


      <Stack sx={{width:1}}>
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { error } }) => (
            
            <TextField
              {...field}
              multiline
              variant='outlined'
              rows={5}
              label="Message (max.300)"
              error={Boolean(error)}
              helperText={error?.message}
              inputProps={{ maxlength: CHARACTER_LIMIT }}
            />
          )}
        />
      </Stack>


      </Stack>

    </Box>

    
  )
}

