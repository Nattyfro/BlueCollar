import React from 'react'
import {
  Stack, TextField, Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { Controller } from 'react-hook-form';
import { useFormContext } from 'react-hook-form'
// import { CandidatesProps } from '../../../@types/career/CandidatesForm';

import {  MotionViewport, varFade } from '../../../components/animate';
import { m } from 'framer-motion';
import { Iconify } from '../../../components';
import securityIcon from '@iconify/icons-carbon/security';

interface CandidatesProps {
  name: string;
  label: string;
};


const CHARACTER_LIMIT = 300;

export default function Names ({name, label}:CandidatesProps) {

  const { control } = useFormContext();

  return (

  <Box alignItems='center' justifyContent="center" sx={{mx:0.5}}>

    <MotionViewport>
                
      <m.div variants={varFade().in}>

              
        <Stack spacing={6}>

        <Stack alignItems="center" spacing={1}>
  <Stack direction="row" alignItems="center" spacing={1}>
    <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
    <Typography variant="subtitle2">BlueCollar Listing application</Typography>
  </Stack>
                  <Typography variant="body3" sx={{ color: 'text.disabled' }}>
                  What salary would you like talks to begin at?
                  </Typography>
</Stack> 



          <Stack sx={{width:1}}>
            <Controller
              name= {name}
              
              control={control}
              render={({ field, fieldState: { error } }) => (
                
                <TextField
                  {...field}
                  multiline
                  label={label}
                  variant='outlined'
                  rows={5}
                  error={Boolean(error)}
                  helperText={error?.message}
                  inputProps={{ maxLength: CHARACTER_LIMIT }}
                />)}
                />

          </Stack>

          </Stack>

      </m.div>

    </MotionViewport>


  </Box>
  )};
    
  

