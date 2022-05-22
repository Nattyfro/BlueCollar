// import { LoadingButton } from '@mui/lab';
import { Stack, ToggleButton, Box, Typography } from '@mui/material'
// import { Box } from '@mui/system';
import React from 'react'
import {Controller, useFormContext} from 'react-hook-form'
import { Iconify } from '../../../components';
import securityIcon from '@iconify/icons-carbon/security';

// const BENEFITS = ['Parking', 'Fuel', 'Training', 'Vehicle', 'Bonuses', 'Pension'];
const EMPLOYMENT = ['Full-time', 'Part-time', 'Weekends', 'Apprenticeship', 'Fixed-term Contract', 'Temporary Contract' ];
// const BENEFITS = [{value:'Parking'}, {value:'Fuel'}, {value:'Training'}, {value:'Vehicle'}, {value:'Bonus schemes'}, {value:'Pension'}];




export default function _TypeOfWork () {

  const {control} = useFormContext()
  
  return (

    <Box >
      <Stack spacing={5}>

<Stack alignItems="center" spacing={1}>
   <Stack direction="row" alignItems="center" spacing={1}>
     <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
     <Typography variant="subtitle2">BlueCollar user request</Typography>
   </Stack>
   <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
   What type of employment are you offering?
   </Typography>
 </Stack>
    

    <Stack alignItems= "center" > 
      <Controller
        name="benefits"
        control={control}
        render={({ field }) => {

          const onSelected = (benefits: string) =>
            field.value.includes(benefits) ? field.value.filter((value: string) => value !== benefits) : [...field.value, benefits];

          return ( 
            <Stack sx={{width:1}}>

              <Box  sx={{ width:1, display: 'grid', rowGap: 1.5, columnGap: 1.5, gridTemplateColumns: { xs: 'repeat(2, 2fr)', sm: 'repeat(2, 2fr)', md: 'repeat(2, 2fr)' }}}>

                  {EMPLOYMENT.map((benefits) => (
                    
                    

                    <ToggleButton
                      {...field}
                      key={benefits}
                      selected={field.value.includes(benefits)}
                      onChange={() => field.onChange(onSelected(benefits))}
                      color="standard"
                      size='small'
                      sx={{ py: 1.5, typography: 'caption', 
                        '&.Mui-selected': {
                          bgcolor: 'text.primary',
                          color: (theme) =>
                            theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                        '&:hover': {
                            bgcolor: 'text.primary',
                          },
                        },
                      }}>
                      {benefits}
                    </ToggleButton>
                  ))}
                </Box>
            </Stack>
          );
        }}
      />
    </Stack>
    </Stack>
  </Box>

  
  )};



