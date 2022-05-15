import { Stack, TextField, Typography } from '@mui/material'
import React from 'react'
// import {CandidatesProps} from '../../../@types/career/CandidatesForm'



export default function CompanyName({ data, setFormData }:any ) {




  console.log (data)
  return (
    <Stack direction={{ xs: 'column', md: 'column' }} sx={{ mx:2, pt:5 }}   display= "flex"
    flexDirection= "column"
    justifyContent= "center">


      <Stack alignItems='center' >
        <Typography variant="body3"  sx={{ mb: 3, px:0, display: 'block' }}>
            Please enter your company name
        </Typography>
      </Stack>   
        
      <TextField
        fullWidth
        label="Company name"
        name="name"
        value={data.companyName}
        onChange={ (e) => {setFormData ({...data, companyName: e.target.value}) ;
        }}
      />

    </Stack>
  )
};


