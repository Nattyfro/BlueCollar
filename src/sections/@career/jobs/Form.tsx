import React from 'react'
import {CandidatesProps} from '../../../@types/career/CandidatesForm'
import _Benefits from './_Benefits'
import _Checked from './_Checked'
import _Message from './_Message'
import _Success from './_Success'
import _Salary from './_Salary';
import { Stack, Button } from '@mui/material';
import { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as Yup from 'yup';


 

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
      return < _Checked />;
    case 1:
      return <_Salary />;
    case 2:
      return <_Benefits/>;
    case 3:
      return <_Message />;
    case 4:
      return <_Success />;
    }};

    //----------------Hooks---------------------------------------------------

    const FormSchema = Yup.object().shape({
  name: Yup.string().required(),
  message: Yup.string().required('You must write a message.'),
  salaryNumber: Yup.number().typeError('salary must be a number').required('You must enter your salary offering'),
  email: Yup.string().email(),
  benefits: Yup.array().required('sdfsdfd').min(1, 'Select either Hourly, Daily, Monthly or Annually').max(1,'please select only one')  ,

}); 

const methods = useForm<CandidatesProps>({
  mode:'onTouched',
  resolver: yupResolver(FormSchema),
  defaultValues:{
    message:'',
    benefits: [],
    salaryNumber: undefined,
  }
})

// const submitCandidatesForm: SubmitHandler<CandidatesProps> = async (data: CandidatesProps) => {
//   console.log('data submitted', data)
// }



    //----------------Hooks---------------------------------------------------


  // INCREASES PAGE COUNT
  const  [page, setPage] = useState(0);

  // ADDS STATE TO THE PAGE
  function handleButton () {
    setPage(page + 1);
  }


  // SUBMITS THE FORM
  const onSubmit = async (data: CandidatesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
  };

    
  // const methods = useForm<CandidatesProps>({

  //   defaultValues: {
  //     benefits: [],
  //     employment: [],
  //   },
  // })

  return (
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>

          {conditionalComponent()}

          <Stack direction='row' position='absolute' overflow='hidden' sx={{ mx:2, py:4, bottom: 0, left: 0}}>

          <Stack sx={{mx:0.5}}>
            { page > 0 && page < 4 &&    
              <Button
                variant='outlined' 
                size= 'large' 
                onClick={() => setPage (page - 1 )}>
                Back
              </Button> }
            </Stack>

            
            <Stack sx={{mx:0.5}}>
            { page < 4 && 
              <Button
              onClick={handleButton}
              variant='contained' 
              size= 'large'>Next
              </Button> }
            </Stack>

          </Stack>

          

   </form>
   </FormProvider>
  )
};