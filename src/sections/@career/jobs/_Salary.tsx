import { Stack, ToggleButton, Box, Typography, TextField } from '@mui/material'
import React from 'react'
import {Controller, useFormContext} from 'react-hook-form'

const PAYRATES = ['Hourly', 'Daily', 'Monthly', 'Annually'];




export default function StepFour () {

  const {control} = useFormContext()
  
  return (

    <Box >

      <Stack sx={{mt:4}}>

        <Typography variant="body1" align="center"  sx={{ mb: 1, px:0, display: 'block' }}>
          What salary are you offering?
        </Typography>

        <Stack alignItems='center' >
          <TextField
          size="small"
          variant="filled"
          label="(£)"
          sx={{my:4}}
          inputProps={{
            min: 1080,
            max: 6000,
            type: 'tel',
            'aria-labelledby': 'input-slider',
            width:1,
            textAlign:"center"
          }}/>
        </Stack>  

      </Stack> 
    

    <Stack alignItems= "center" > 
      <Controller
        name="benefits"
        control={control}
        render={({ field }) => {

          const onSelected = (payRates: string) =>
            field.value.includes(payRates) ? field.value.filter((value: string) => value !== payRates) : [...field.value, payRates];

          return ( 
            <Stack sx={{width:1}}>


              <Box  sx={{ display: 'grid', rowGap: 1, columnGap: 0, gridTemplateColumns: { xs: 'repeat(4, 2fr)', sm: 'repeat(4, 2fr)', md: 'repeat(4, 2fr)' }}}>

                  {PAYRATES.map((payRates) => (
                    
                    

                    <ToggleButton
                      {...field}
                      key={payRates}
                      selected={field.value.includes(payRates)}
                      onChange={() => field.onChange(onSelected(payRates))}
                      color="standard"
                      size='small'
                      sx={{ py: 1.5, px:1, m:0.5, typography: 'caption', 
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
            </Stack>
          );
        }}
      />
    </Stack>
  </Box>

  
  )};





































// import {  Stack, TextField, ToggleButton, Typography, Box, Button } from '@mui/material'
// import React from 'react'
// import { useFormContext } from 'react-hook-form';
// // import { useFormContext } from 'react-hook-form'


// const PAYRATES = ['Hourly', 'Daily', 'Monthly', 'Annually'];






// export default function StepFour () {

//   const {handleSubmit} = useFormContext();


//   return (

//       <Stack>
//       <Stack sx={{mt:4}}>

//         <Typography variant="body3" align="center"  sx={{ mb: 1, px:0, display: 'block' }}>
//           What salary are you offering?
//         </Typography>

//         <Stack alignItems='center' >
//           <TextField
//             size="small"
//             variant="filled"
//             label="(£)"
//             sx={{my:4}}
//             inputProps={{
//               min: 1080,
//               max: 6000,
//               type: 'tel',
//               'aria-labelledby': 'input-slider',
//               width:1,
//               textAlign:"center"
//             }}/>
//         </Stack>  

//       </Stack> 






//                 <Box
//                   sx={{
//                     display: 'grid',
//                     rowGap: { xs: 0, md: 1 },
//                     columnGap: 0,
//                     gridTemplateColumns: {
//                       xs: 'repeat(2, 2fr)',
//                       sm: 'repeat(2, 2fr)',
//                       md: 'repeat(4, 2fr)',
//                     }}}>

//                   {PAYRATES.map((benefits) => (

//                 <ToggleButton
//                   key={benefits}
//                   value= {data.salary}
//                   color="standard"
//                   size='small'
//                   sx={{
//                     py: 1,
//                     px: 1,
//                     m: 0.5,
//                     typography:'caption'
//                   }}>
                
//                   {benefits}
//                 </ToggleButton>
//                   ))}
//                 </Box>

//                 <Stack>
//     <Button
//       // onClick={handleSubmitonSubmit}
//       onSubmit={handleSubmit(onSubmit)}
//       size='large'
//       variant='outlined' sx={{mt:4}}>
//         SUBMIT
//     </Button>
//   </Stack>

//                   </Stack>

    
//     )};