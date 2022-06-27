import React from 'react'
import {
  Stack, TextField, Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { Controller } from 'react-hook-form';
import { useFormContext } from 'react-hook-form'
import { Iconify } from '../../../components';
import securityIcon from '@iconify/icons-carbon/security';
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

export default function _Message ({name, label}:CandidatesProps) {

  const { control } = useFormContext();

  return (

  <Box alignItems='center' justifyContent="center" sx={{mx:0.5}}>

    <MotionViewport>
                
      <m.div variants={varFade().in}>

              
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

                {/* <Stack direction='row' position='absolute' overflow='hidden' sx={{ mx:2.5, py:4, bottom: 0, left: 90 }} >
                  <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  sx={{
                    mx: { xs: 'auto !important', md: 'unset !important' },
                  }}
                  >
                  Send Request
                  </LoadingButton>
                </Stack> */}

  </Box>
  )};
    
  

