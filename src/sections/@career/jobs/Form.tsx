import React from 'react'
// import First from './First';
// import _CompanyName from './_CompanyName';
// import _Email from './_Email';
import { Stack, Button } from '@mui/material';
import { useState } from 'react';
import {CandidatesProps} from '../../../@types/career/CandidatesForm'
import _Benefits from './_Benefits'
import _Message from './_Message'
import _TypeOfWork from './_TypeOfWork';
import _ContactMethod from './_ContactMethod'
import _Salary from './_Salary';
import { useForm } from "react-hook-form";
import { FormProvider } from 'react-hook-form'


//----------------TypeScript---------------------------------------------------


// const defaultValues = {
//   message: '',
//   companyName: '',
//   email: '',
//   benefits: [],
//   salary: [],
  
// }


//----------------EXPORT---------------------------------------------------

export default function Form () {


//----------------Hooks---------------------------------------------------


const conditionalComponent = () => {
  switch (page) {
    case 0:
      return <_Salary />;
    case 1:
      return <_Benefits/>;
    case 2:
      return <_TypeOfWork />;
    case 3:
      return <_Message />;
    case 4:
      return < _ContactMethod />;
    // case 5:
    //   return < _ContactMethod />;
    // case 5:
      // return <_Email/>;
    // case 6:
    //   return <_CompanyName />;
    // case 7:
    //   return <First  />;
    }};



  // INCREASES PAGE COUNT
  const [page, setPage] = useState(0);

  // ADDS STATE TO THE PAGE
  function handleButton () {
    setPage(page + 1);
  }


  // SUBMITS THE FORM
  const onSubmit = async (data: CandidatesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
  };
    
  // const { reset, control, handleSubmit } = useForm<CandidatesProps>({
  //   mode: 'onTouched',
  //   defaultValues: {
  //     message: '',
  //     companyName: '',
  //     email: '',
  //     benefits: [],
  //     salary: [],
  //   },
  // });
  
  const methods = useForm<CandidatesProps>({

    defaultValues: {
      benefits: [],
      employment: [],
    },
  })

  return (
    // SETS THE OVERALL LAYOUT OF THE POPOVER
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>

          {conditionalComponent()}

          <Stack direction='row' position='absolute'  sx={{ mx:2, py:4, bottom: 0, left: 0}}>

            <Stack sx={{mx:0.5}}>
              <Button
              onClick={handleButton}
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

   </form>
   </FormProvider>
  )
};