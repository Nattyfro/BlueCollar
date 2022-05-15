// import { LoadingButton } from '@mui/lab';
import { Button, Stack, ToggleButton, Typography } from '@mui/material'
import React from 'react'
// import {CandidatesProps} from '../../../@types/career/CandidatesForm'


const BENEFITS = ['Parking', 'Fuel', 'Training', 'Vehicle', 'Bonus schemes', 'Pension', 'Flexibility'];






export default function StepFour ({ data, onSubmit}:any ) {

  console.log (data)



            return (
              <div>

      <Stack sx={{mt:4}}>
          <Typography variant="body3" align="center"  sx={{ mb: 1, px:0, display: 'block' }}>
            Benefits for the caniddate
          </Typography>
      
      </Stack> 
                <Stack direction="row" flexWrap="wrap" sx={{pb:2, mx:2, justifyContent: 'center'}}>
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

            <Stack>
              <Button
                onClick={onSubmit}
                size='large'
                variant='outlined' sx={{mt:4}}>
                  SUBMIT 
              </Button>
            </Stack>

            </div>
    
            );
          
        
  
};
