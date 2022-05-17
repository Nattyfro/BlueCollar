// import { LoadingButton } from '@mui/lab';
import { Stack, ToggleButton, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
// import {CandidatesProps} from '../../../@types/career/CandidatesForm'


const BENEFITS = ['Parking', 'Fuel', 'Training', 'Vehicle', 'Bonus schemes', 'Pension'];






export default function StepFour ({ data}:any ) {

  console.log (data)



            return (
              <div>

      <Stack sx={{mt:4}}>
          <Typography variant="body3" align="center"  sx={{ mb: 1, px:0, display: 'block' }}>
            Benefits for the caniddate
          </Typography>
      
      </Stack> 



                <Box sx={{
                    display: 'grid',
                    rowGap: { xs: 0, md: 1 },
                    columnGap: 0,
                    gridTemplateColumns: {
                      xs: 'repeat(2, 2fr)',
                      sm: 'repeat(2, 2fr)',
                      md: 'repeat(2, 2fr)',
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
                        typography: 'caption'
                      }}
                    >
                      {benefits}
                    </ToggleButton>
                  ))}
                </Box>

            {/* <Stack>
              <Button
                onClick={onSubmit}
                size='large'
                variant='outlined' sx={{mt:4}}>
                  SUBMIT 
              </Button>
            </Stack> */}

            </div>
    
            );
          
        
  
};

{/* <Box
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
                </Box> */}
