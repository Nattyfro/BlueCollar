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
  jobType: string[];
  payRates: string[];
  salary: number [] ;
  employment: string[],
  salaryNumber: number,
};







export default function Form ({ job }: Props) {




const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return < _Checked name="jobType" />;
    case 1:
      return <_Salary name="salaryNumber" /> ;
    case 2:
      return <_Benefits name="benefits" /> ; // looks like i need to nest the second input inside _Benefits
    case 3:
      return <_Message name= "message" label= "Message (max.300)" />;
    case 4:
      return <_Success />;
    }};


  const { userName, userAvatar} = job;

  const [activeStep, setActiveStep] = useState(0);
  const steps = ["_Checked", "_Salary", "_Benefits", "_Message", "_Success" ];




  // const onSubmit = async (data: CandidatesProps) => {
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   alert( JSON.stringify( data, null, 2));
  //   methods.reset();
  //   handleNext();
  //   console.log('data submitted', data); 
  // };


  // const onSubmit = (data: CandidatesProps) => {
  //   console.log(JSON.stringify(data));
  //   alert(JSON.stringify(data));
  //   handleNext();
  // };

  const onSubmit = async (data: CandidatesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert( JSON.stringify( data, null, 2));
    handleNext();
    // methods.reset();
    console.log('data submitted', data); 
  };

  const validationSchema = [
    //validation for step1
    Yup.object({
      jobType: Yup.array().required().min(1, 'You must select one').max(1,'please select only one'),
    }),
    //validation for step2
    Yup.object({
      payRates: Yup.array().required().min(1, 'Select either Hourly, Daily, Monthly or Annually').max(1,'please select only one'),
      salaryNumber: Yup.number().required('You must enter your salary offering').typeError('salary must only be numbers')
    }),
    //validation for step3
    Yup.object({
      benefits: Yup.array(),
    }),
    //validation for step4
    Yup.object({
      message: Yup.string().required('You must write a message.'),
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

 const { handleSubmit, reset, trigger } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };


 





  return (


    <Stack spacing={2.5} alignItems="center" justifyContent="bottom" overflow='hidden' sx={{ mx:2, p:0 }}>

      <Box>  { activeStep !== 4 &&
          <Image
          
          alt={userName} 
          src={userAvatar}
          sx={{ width: 65, height: 65, borderRadius: 1, mb:2, mt:4,
         }}
          />}
      </Box>
        

      <Box sx={{width:1}} alignItems='center' justifyContent="center" textAlign='center'>



      {/* <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper> */}
        <div style={{ minHeight: "50%" }}>
          {activeStep === steps.length ? (
            <>
              <Button onClick={handleReset} >
                Reset
              </Button>
            </>
          ) : (



        <FormProvider {...methods}>
          <form>

          <div >
                  {getStepContent(activeStep)}
                </div>

              <Stack direction='row' position='absolute' spacing={1} overflow='hidden' sx={{ mx:2, py:4, bottom: 0, left: 0}}>


              <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant='outlined' 
                    size= 'large' 
                    color="primary"
                    
                  >
                    Back
                  </Button>
                  

                  {activeStep === steps.length - 2  ? (
                    <Button
                    variant="contained"
                    size= 'large'
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Send Request
                  </Button>
                  ) : (
                    <Button
                    variant='contained' 
                    size= 'large' 
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  )}

                

              </Stack>

        </form>
      </FormProvider>
          )}
          </div>
    </Box>
  </Stack>
  )};
















  {/* <Stack sx={{mx:0.5}}>
                { page === 3 && 
                  <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  sx={{
                    mx: { xs: 'auto !important', md: 'unset !important' },
                  }}
                >
                  Send Request
                </LoadingButton>}
                </Stack> */}