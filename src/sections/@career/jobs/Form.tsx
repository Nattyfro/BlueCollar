import React from 'react'
import { JobProps } from '../../../@types/career';
// import {CandidatesProps} from '../../../@types/career/CandidatesForm'
import _Benefits from './_Benefits'
import _Checked from './_Checked'
import _Message from './_Message'
import _Success from './_Success'
import _Salary from './_Salary';
import { Stack, Button } from '@mui/material';
import { Image } from '../../../components';
import { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as Yup from 'yup';
import { Box } from '@mui/system';

type Props = {
  job: JobProps;
};

interface CandidatesProps  {
  message: string;
  companyName: string;
  email: string;
  benefits: string[];
  payRates: string[];
  salary: number [];
  employment: string[],
  salaryNumber: number,
};


const FormSchema = Yup.object().shape({
  // name: Yup.string().required(),
  message: Yup.string().required('You must write a message.'),
  salaryNumber: Yup.number().typeError('salary must be a number').required('You must enter your salary offering'),
  // email: Yup.string().email(),
  // benefits: Yup.array().required('sdfsdfd').min(1, 'Select either Hourly, Daily, Monthly or Annually').max(1,'please select only one')  ,
  benefits: Yup.array().required().min(1, 'Services field must have at least 1 items'),
  // payRates: Yup.array().required('sdfsdfd').min(1, 'Select either Hourly, Daily, Monthly or Annually').max(1,'please select only zone')  ,

}); 



export default function Form ({ job }: Props) {



  // const commonStyles = {
  //   // bgcolor: '#fff',
  //   mb: 2,
  //   border:20,
  //   // borderColor:'secondary.main',
  //   // borderStyle: 'dashed',
  //               borderColor: 'grey.50032',
  //   mt: 4,
  //   width: '75',
  //   height: '75',
  // };

  //width: 75, height: 75, borderRadius: 1, mb:2, mt:4, borderColor: 'error.main', 

const conditionalComponent = () => {
  switch (page) {
    case 0:
      return < _Checked  />;
    case 1:
      return <_Salary name="salaryNumber" />;
    case 2:
      return <_Benefits name="benefits" /> ; // looks like i need to nest the second input inside _Benefits
    case 3:
      return <_Message name= "message" label= "Message (max.300)" />;
    case 4:
      return <_Success />;
    }};


  const { userName, userAvatar} = job;
  const  [page, setPage] = useState(0);

  function handleButton () {
   setPage(page + 1);
}

const methods  = useForm<CandidatesProps>({
  // mode:'onTouched',
  resolver: yupResolver(FormSchema),
  defaultValues:{
    message:'',
    benefits: [],
    salaryNumber: undefined,
    // salaryNumber: [],
  }
})



//  const onSubmit = () => { console.log('data submitted')};

 const onSubmit = async (data: CandidatesProps) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  setPage (page + 1 );
  alert( JSON.stringify( data, null, 2));
  methods.reset();
  console.log('data submitted', data); 
};

// const onSubmit = (data: CandidatesProps) => console.log('hi', data)

  return (


    <Stack spacing={2.5} alignItems="center" justifyContent="bottom" overflow='hidden' sx={{ mx:2, p:0 }}>

      <Box  >
        { page < 4 && 
          <Image
          
          // border={8}
          alt={userName} 
          src={userAvatar}
          sx={{ width: 75, height: 75, borderRadius: 1, mb:2, mt:4,
          //   borderStyle: 'solid',
          // borderColor: '#808080',
         }}
          /> }
      </Box>
        

      <Box sx={{width:1}} alignItems='center' justifyContent="center" textAlign='center'>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>

            {conditionalComponent()}

              <Stack direction='row' position='absolute' overflow='hidden' sx={{ mx:2, py:4, bottom: 0, left: 0}}>

                <Stack sx={{mx:0.5}}>
                {page > 0 && page < 4 &&
                  <Button
                    variant='outlined' 
                    size= 'large' 
                    onClick={() => setPage (page - 1 )}>
                    Back
                  </Button>}

                </Stack>

                
                <Stack sx={{mx:0.5}}>
                { page < 3 && 
                  <Button
                    onClick={handleButton}
                    variant='contained' 
                    size= 'large'>Next
                  </Button> }
                </Stack>

                <Stack sx={{mx:0.5}}>
                { page === 3 && 
                  <Button
                    variant='contained' 
                    type="submit"
                    size= 'large'>Submit
                  </Button> }
                </Stack>

              </Stack>

        </form>
      </FormProvider>
    </Box>
  </Stack>
  )};
