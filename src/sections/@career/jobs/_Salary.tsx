import { Stack, ToggleButton, Box, Typography, TextField, FormHelperText, InputAdornment} from '@mui/material'
import React from 'react'
import {Controller, useFormContext} from 'react-hook-form'
import { Iconify } from '../../../components';
import securityIcon from '@iconify/icons-carbon/security';
import {  MotionViewport, varFade } from '../../../components/animate';
import { m } from 'framer-motion';





const PAYRATES = ['Hourly', 'Daily', 'Monthly', 'Annually'];


interface CandidatesProps {
  name: string;
};

export default function _Salary ({name}:CandidatesProps) {

  const {control} = useFormContext()
  
  return (
              <Stack>
              <MotionViewport
             >

            <m.div variants={varFade().in}>
              <Stack alignItems="center" >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
          <Typography variant="subtitle2">BlueCollar user request</Typography>
        </Stack>
        </Stack>
        
        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          What salary would you like talks to begin at?
        </Typography>
              
    
      <Stack spacing={3}>

        <Stack alignItems='center'>

          <Controller
          name= {name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
            {...field}
            
            margin="dense"
            variant="standard"
            InputProps={{
              startAdornment: <InputAdornment position="start">£</InputAdornment>
            }}
            sx={{mt:5, mb:2.5}}
            inputProps={{
              sx:{textAlign: 'center', width:80}
            }}
            error={Boolean(error)}
            helperText={error?.message}
            />

          )} 
          />


        </Stack>  

      </Stack> 

      {/* <Divider sx={{mb:1.5, mx:1}} >
        <Chip label="per" size="small" variant="outlined" color="primary" sx={{ mx:1.5 }} />
      </Divider> */}
    

    <Stack alignItems= "center" > 
      <Controller
        name="payRates"
        control={control}
        render={({ field, fieldState: {error} }) => {

          const onSelected = (payRates: string) =>
            field.value.includes(payRates) ? field.value.filter((value: string) => value !== payRates) : [...field.value, payRates];

          return ( 
            <Stack sx={{width:1}}>


              <Box  sx={{ display: 'grid', rowGap: 1, columnGap: 0, gridTemplateColumns: { xs: 'repeat(2, 2fr)', sm: 'repeat(2, 2fr)', md: 'repeat(2, 2fr)' }}}>

                  {PAYRATES.map((payRates) => (
                    
                    

                    <ToggleButton
                      {...field}
                      value= {payRates}
                      key={payRates}
                      selected={field.value.includes(payRates)}
                      onChange={() => field.onChange(onSelected(payRates))}
                      color="standard"
                      size='small'
                      sx={{ py: 1, px:1, m:0.5, typography: 'caption', 
                        '&.Mui-selected': {
                          bgcolor: 'text.primary',
                          color: (theme) =>
                            theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                        '&:hover': {
                            bgcolor: 'text.primary',
                          },
                        },
                      }}>
                      {payRates}
                    </ToggleButton>
                  ))}
                </Box>
                {error && (
                  <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                    {(error as any)?.message}
                  </FormHelperText>
                )}
            </Stack>
          );
        }}
      />
    </Stack>
  </m.div>

              </MotionViewport>
  </Stack>
  

  
  )};

