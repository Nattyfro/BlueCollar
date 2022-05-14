// import { LoadingButton } from '@mui/lab';
import { Stack, ToggleButton, Typography } from '@mui/material'
import React from 'react'
// import {CandidatesProps} from '../../../@types/career/CandidatesForm'


const BENEFITS = ['Parking', 'Fuel', 'Training', 'Vehicle', 'Bonus schemes', 'Pension'];






export default function StepFour ({ data}:any ) {

  console.log (data)



            return (
              <div>

      <Stack alignItems='center' >
          <Typography variant="body3"  sx={{ mb: 1, px:0, display: 'block' }}>
            Please enter your email
          </Typography>
      
      </Stack> 
                <Stack direction="row" flexWrap="wrap"  sx={{pb:2, mx:2}}>
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
                      }}
                    >
                      {benefits}
                    </ToggleButton>
                  ))}
                </Stack>

              </div>
            );
          
        
  
};
