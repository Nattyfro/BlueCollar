import React from 'react'
import First from './First';
import _CompanyName from './_CompanyName';
import _Email from './_Email';
import { Stack, Button, Box } from '@mui/material';
import { useState } from 'react';
import {CandidatesProps} from '../../../@types/career/CandidatesForm'
import StepFour from './StepFour'
import _Message from './_Message'


//----------------TypeScript---------------------------------------------------


const defaultValues = {
  message: '',
  companyName: '',
  email: '',
  benefits: [],
  salary: 0,
  
}


//----------------EXPORT---------------------------------------------------

export default function Form () {


//----------------Hooks---------------------------------------------------

const [page, setPage] = useState(0);

const conditionalComponent = () => {
  switch (page) {
    case 0:
      return <_Message data={data} setFormData={setFormData} />;
    case 1:
      return <First/>;
     case 2:
       return <_CompanyName data={data} setFormData={setFormData} />;
     case 3:
       return <_Email  data={data} setFormData={setFormData} />;
     case 4:
       return <StepFour data={data} setFormData={setFormData} onSubmit={onSubmit} />;
  }};

  // ADDS STATE TO THE PAGE
  function handleSubmit () {
    setPage(page + 1);
  }

  // SETS THE FORMS DATA INPUT
  const [data, setFormData] = useState<CandidatesProps>(defaultValues);


  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    
    console.log(data);
  };
    
  
  


  return (
    // SETS THE OVERALL LAYOUT OF THE POPOVER
    <Stack  sx={{ width: 1 }} direction='column'>
      <Box  sx={{ width: 1 }} >
        {conditionalComponent()}


        <Stack direction='row' position='absolute'  sx={{ mx:2, pb:4, bottom: 0, left: 0}}>

          <Stack sx={{mx:0.5}}>
            <Button
            onClick={handleSubmit}
            variant='contained' 
            size= 'large'>
            { page === 0 || page === 1 || page === 2 || page === 3 || page === 4 ? "Next" : "Submit" }
            {page < 4 }
            </Button> 
          </Stack>


        <Stack sx={{mx:0.5}}>
          { page > 0 &&     
            <Button
              variant='outlined' 
              size= 'large' 
              onClick={() => setPage (page - 1 )}>
              Back
            </Button> }
          </Stack>
        </Stack>

      </Box>
   </Stack>
  )
};