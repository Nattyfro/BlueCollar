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
// import { LoadingButton } from '@mui/lab';
// import { CandidateProps } from '../../../@types/career';

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

        <Typography variant="h3" paragraph sx={{ pb:0}} >
        Tell us a bit about yourself
        </Typography>



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
                  // label="Message (max.300)"
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
    
  

