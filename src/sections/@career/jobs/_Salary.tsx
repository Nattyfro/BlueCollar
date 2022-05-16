import {  Stack, TextField, ToggleButton, Typography, Box } from '@mui/material'
import React from 'react'


const BENEFITS = ['Hourly', 'Daily', 'Monthly', 'Annually'];






export default function StepFour ({ data}:any ) {




  return (

    <div>

      <Stack sx={{mt:4}}>

        <Typography variant="body3" align="center"  sx={{ mb: 1, px:0, display: 'block' }}>
          What salary are you offering?
        </Typography>

        <Stack alignItems='center' >
          <TextField
            size="small"
            variant="filled"
            label="(£)"
            // fullWidth
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

          {/* TOGGLE BUTTON */}





                <Box
                  sx={{
                    display: 'grid',
                    rowGap: { xs: 0, md: 1 },
                    columnGap: 0,
                    gridTemplateColumns: {
                      xs: 'repeat(4, 1fr)',
                      sm: 'repeat(4, 1fr)',
                      md: 'repeat(4, 2fr)',
                    }}}>

                  {BENEFITS.map((benefits) => (

                <ToggleButton
                  key={benefits}
                  value= {data.services}
                  color="standard"
                  size='small'
                  sx={{
                    py: 1,
                    px: 1,
                    m: 0.5,
                  }}>
                
                  {benefits}
                </ToggleButton>
                  ))}
                </Box>


    </div>
    )};
  
  
  
  {/* <Stack>
    <Button
      onClick={onSubmit}
      size='large'
      variant='outlined' sx={{mt:4}}>
        SUBMIT 
    </Button>
  </Stack> */}

























//------------------THIS IS THE NIGHTMARE--------------------------------------------------




//   import { Stack, TextField, ToggleButton, Typography, Box } from '@mui/material'
// import React from 'react'


// const BENEFITS = ['Hourly', 'Daily', 'Monthly', 'Annually'];






// export default function StepFour ({ data, Controller, control}:any ) {

 


  
//               {/* 
//                     <Stack sx={{mt:4}}>

//                       <Typography variant="body3" align="center"  sx={{ mb: 1, px:0, display: 'block' }}>
//                         What salary are you offering?
//                       </Typography>

//                       <Stack alignItems='center' >
//                         <TextField
//                           size="small"
//                           variant="filled"
//                           label="(£)"
//                           // fullWidth
//                           sx={{my:4}}
//                           inputProps={{
//                             min: 1080,
//                             max: 6000,
//                             type: 'tel',
//                             'aria-labelledby': 'input-slider',
//                             width:1,
//                             textAlign:"center"
//                           }}/>
//                       </Stack>  

//                     </Stack>  */}













//   return (

//     <Stack>
      

//       <Controller
//         name="salary"
//         control={control}
//         render={({ field, fieldState: { error } }: any) => {

//           const onSelected = (benefits: string) =>
//           field.value.includes(benefits)
//             ? field.value.filter((value: string) => value !== benefits)
//             : [...field.value, benefits];

//       return (
        
//           <Stack>
//             <Box sx={{ display: 'grid', rowGap: { xs: 0, md: 1 }, columnGap: 0, gridTemplateColumns: { xs: 'repeat(4, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(10, 2fr)', }}}> 

//               {BENEFITS.map((benefits) => (

//                 <ToggleButton
//                   key={benefits}
//                   value= {data.salary}
//                   color="standard"
//                   size='small'
//                   selected={field.value.includes(data.salary)}
//                   onChange={() => field.onChange(onSelected(data.salary))}
//                   sx={{
//                     py: 1,
//                     px: 1,
//                     m: 0.5,
//                     typography: 'body2',
//                     '&.Mui-selected': {
//                       bgcolor: 'text.primary',
//                       color: (theme) =>
//                         theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
//                       '&:hover': {
//                         bgcolor: 'text.primary',
//                       },},
//                   }}
//                 >
                
//                   {benefits}
                  
//                 </ToggleButton>

//                   ))}

//             </Box>
//           </Stack>

//       />
//     </Stack>  
//     )};