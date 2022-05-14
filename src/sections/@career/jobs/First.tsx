import React from 'react'
import {
  Slider as MUISlider, Stack, Typography,
} from '@mui/material';

function First() {
  return (
    <Stack sx={{px:4, pt:5}} >

      <Stack alignItems='center' >
        <Typography variant="body3"  sx={{ mb: 1, px:0, display: 'block' }}>
            What salary are you offering?
        </Typography>
      </Stack>    
      
      <MUISlider
                      sx={{ mb: 3, mt:5}} 
                      valueLabelDisplay="on"
                      valueLabelFormat={(value) => `${(value)}`}
                      min={1080}
                      max={6000}
                      defaultValue={3540}
                      step={10}
                      
                      />


                      
    </Stack>

    
  )
}

export default First