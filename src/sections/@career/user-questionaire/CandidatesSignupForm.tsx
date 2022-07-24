import React from 'react'
import { Stack, Button } from '@mui/material';
import { Image } from '../../../components';
import { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as Yup from 'yup';
import { Box } from '@mui/system';
import Names from '../Questions/names'
import _CompanyName from '../Questions/_CompanyName'
import _Salary from '../Questions/_Salary'
import _TypeOfWork from '../Questions/_TypeOfWork'
import _Checked from '../Questions/_Checked'






interface CandidatesProps  {
  message: string;
  companyName: string;
  email: string;
  benefits: string[];
  jobType: string[];
  payRates: string[];
  salary: number [] ;
  employment: string[],
  salaryNumber: number,
};







export default function CandidatesSignupForm () {




const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return  <Names name= "message" label= "Message (max.300)" />
    case 1:
      return <_CompanyName />
    case 2:
      return <_Salary name= "salaryNumber" />
    case 3:
      return <_TypeOfWork name= "jobType"/>
    case 4:
      return <_Checked name="jobType" />
    }};


  const [activeStep, setActiveStep] = useState(0);





  const onSubmit = async (data: CandidatesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert( JSON.stringify( data, null, 2));
    handleNext();
    methods.reset();
    console.log('data submitted', data); 
  };

  const validationSchema = [
    //validation for step1
    Yup.object({
        message: Yup.string().required('You must write a message.'),
    }),
    //validation for step2
    Yup.object({
        name: Yup.string().required('You must write a message.'),
    }),
    //validation for step3
    Yup.object({
        payRates: Yup.array().required().min(1, 'Select either Hourly, Daily, Monthly or Annually').max(1,'please select only one'),
        salaryNumber: Yup.number().required('You must enter your salary offering').typeError('salary must only be numbers')
    }),
    //validation for step4
    Yup.object({
        jobType: Yup.array().required().min(1, 'You must select one').max(1,'please select only one'),
    }),
    //validation for step4
    Yup.object({
        jobType: Yup.array().required().min(1, 'You must select one').max(1,'please select only one'),
    })
  ];

  

  const currentValidationSchema = validationSchema[activeStep];

const methods  = useForm<CandidatesProps>({
  mode:'onChange',
  resolver: yupResolver(currentValidationSchema),
  defaultValues:{
    message:'',
    benefits: [],
    jobType: [],
    payRates: [],
    salaryNumber: undefined,
  }
})

 const { handleSubmit, trigger } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   reset();
  // };


 





  return (


    <Stack spacing={2.5} alignItems="center" justifyContent="bottom" overflow='hidden' sx={{ mx:2, p:0 }}>

<Stack alignItems="center" spacing={5}>

<Image
  src='https://zone-assets-api.vercel.app/assets/icons/faq/ic_faq_account.svg'
  alt="Calendar" 
  sx={{mb: 5, width: 96, height: 96 }}/>


{/* <Typography variant="body2" align="center" sx={{ color: 'text.secondary', pb:3 }}>
  Please enter the email address associated with your account and We will email you a
  link to reset your password.
</Typography> */}

</Stack>

      <Box sx={{width:1}} alignItems='center' justifyContent="center" textAlign='center'>



        <FormProvider {...methods}>
          <form>

          <div >
                  {getStepContent(activeStep)}
                </div>

                <Stack direction='row' spacing={1} justifyContent="right" sx={{pt:5}} >
              {/* <Stack direction='row' justifyContent="right" spacing={1}  sx={{ mx:0 }}> */}

              {activeStep < 5 &&
              <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant='text' 
                    size= 'large' 
                    color="secondary"
                    
                  >
                    Back
                  </Button>}
                  
                  { activeStep == 4 && 
                    <Button
                    variant="contained"
                    size= 'large'
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Send Request
                  </Button>}
                  { activeStep < 4 && 
                    <Button
                    variant='contained' 
                    size= 'large' 
                    onClick={handleNext}
                    >
                      Next
                    </Button>}
                  

                

              </Stack>

        </form>
      </FormProvider>
    </Box>
  </Stack>
  )};