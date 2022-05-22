import React from 'react'
import {
  Stack, TextField, Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { Controller } from 'react-hook-form';
import { useFormContext } from 'react-hook-form'

const CHARACTER_LIMIT = 300;


export default function _Message() {

  const {control} = useFormContext();

  return (

    <Box alignItems='center' justifyContent="center" sx={{mx:0.5}}>

     <Stack spacing={{ xs: 2.5, md: 2 }}>

      <Stack alignItems='center' sx={{width:1}}>
        <Typography variant="body1" sx={{ mb: 1, display: 'block', width:1 }}>
            Invite Candidate to converation 
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

