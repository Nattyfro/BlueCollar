import React from 'react'
import {
  Stack, TextField, Typography
} from '@mui/material';
import { Box } from '@mui/system';


const CHARACTER_LIMIT = 450;


export default function _Message({data, setFormData}:any) {
  return (

    <Box alignItems='center' justifyContent="center">

     <Stack
      direction={{ xs: 'column', md: 'column' }}
      spacing={{ xs: 2.5, md: 2 }}
      sx={{ width: 1}}>

      <Stack alignItems='center' >
        <Typography variant="body3"  sx={{ mb: 1, px:0, display: 'block' }}>
            Invite Candidate to converation
        </Typography>
      </Stack>

      <TextField
        fullWidth
        multiline
        rows={5}
        label="Message (max.300)"
        sx={{ pb: 2.5 }}
        value= {data.message}
        inputProps={{ maxlength: CHARACTER_LIMIT }}
        onChange={ (e) => {setFormData ({...data, message: e.target.value}) ;}}/>
      </Stack>

    </Box>

    
  )
}

