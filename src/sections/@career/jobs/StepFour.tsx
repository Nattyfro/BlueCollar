// import { LoadingButton } from '@mui/lab';
import { Stack, ToggleButton, Box, Typography } from '@mui/material'
// import { Box } from '@mui/system';
import React from 'react'
import {Controller, useFormContext} from 'react-hook-form'

const BENEFITS = ['Parking', 'Fuel', 'Training', 'Vehicle', 'Bonuses', 'Pension'];
// const BENEFITS = ['Free Parking', 'Fuel Credit', 'Training Courses', 'Company Vehicle', 'Bonus Schemes', 'Pension Funds'];
// const BENEFITS = [{value:'Parking'}, {value:'Fuel'}, {value:'Training'}, {value:'Vehicle'}, {value:'Bonus schemes'}, {value:'Pension'}];




export default function StepFour () {

  const {control} = useFormContext()
  
  return (

    <Box >
      <Stack sx={{mt:4}}>
        <Typography variant="body3" align="center"  sx={{ mb: 3, display: 'block' }}>
          Benefits for the candidate
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

                  {BENEFITS.map((benefits) => (
                    
                    

                    <ToggleButton
                      {...field}
                      key={benefits}
                      selected={field.value.includes(benefits)}
                      onChange={() => field.onChange(onSelected(benefits))}
                      color="standard"
                      size='small'
                      sx={{ py: 1, px:2.5, typography: 'caption', 
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
  </Box>

  
  )};



