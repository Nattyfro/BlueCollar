// import { LoadingButton } from '@mui/lab';
import { Stack, ToggleButton, Box, Typography } from '@mui/material'
// import { Box } from '@mui/system';
import React from 'react'
import {Controller, useFormContext} from 'react-hook-form'
import { Iconify } from '../../../components';
import securityIcon from '@iconify/icons-carbon/security';

import {  MotionViewport, varFade } from '../../../components/animate';
import { m } from 'framer-motion';


// const BENEFITS = ['Parking', 'Fuel', 'Training', 'Vehicle', 'Bonuses', 'Pension'];
const BENEFITS = ['Straight away!', 'In the near future', "Haven't decided yet"];
// const BENEFITS = [{value:'Parking'}, {value:'Fuel'}, {value:'Training'}, {value:'Vehicle'}, {value:'Bonus schemes'}, {value:'Pension'}];


interface CandidatesProps {
  name: string;
};

export default function Checked ({name}:CandidatesProps) {

  const {control} = useFormContext()
  
  return (

    <Box >
      <MotionViewport
             >

            <m.div variants={varFade().in}>
      <Stack spacing={5}>

<Stack alignItems="center" spacing={1}>
  <Stack direction="row" alignItems="center" spacing={1}>
    <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
    <Typography variant="subtitle2">BlueCollar user request</Typography>
  </Stack>
  <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
  What benefits are you offering the candidate?
  </Typography>
</Stack>
    

    <Stack alignItems= "center" > 
      <Controller
        name= {name}
        control={control}
        render={({ field }) => {

          const onSelected = (name: string) =>
            field.value.includes(name) ? field.value.filter((value: string) => value !== name) : [...field.value, name];

          return ( 
            <Stack sx={{width:1}}>

              <Box  sx={{ width:1, display: 'grid', rowGap: 1.5, columnGap: 1.5, gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }}}>

                  {BENEFITS.map((name) => (
                    
                    

                    <ToggleButton
                      {...field}
                      key={name}
                      selected={field.value.includes(name)}
                      onChange={() => field.onChange(onSelected(name))}
                      color="standard"
                      size='small'
                      sx={{ mx:2, py: 1.5, typography: 'caption', 
                        '&.Mui-selected': {
                          bgcolor: 'text.primary',
                          color: (theme) =>
                            theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                        '&:hover': {
                            bgcolor: 'text.primary',
                          },
                        },
                      }}>
                      {name}
                    </ToggleButton>
                  ))}
                </Box>
            </Stack>
          );
        }}
      />
    </Stack>
    </Stack>
    </m.div>

  </MotionViewport>
  </Box>

  
  )};



