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
  services: [],
  
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
      return <First />;
     case 2:
       return <_CompanyName data={data} setFormData={setFormData} onSubmit={onSubmit} />;
     case 3:
       return <_Email data={data} setFormData={setFormData} onSubmit={onSubmit} />;
     case 4:
       return <StepFour data={data} setFormData={setFormData}  />;
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



// import React from 'react'
// import First from './First';
// import StepTwo from './StepTwo';
// import StepThree from './StepThree';
// import { Stack, Button, Box } from '@mui/material';
// import { useState } from 'react';
// import {CandidatesProps} from '../../../@types/career/CandidatesForm'
// import StepFour from './StepFour'
// import { useForm } from 'react-hook-form';
// import * as Yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { LoadingButton } from '@mui/lab';
// import { reset } from 'numeral';


// //----------------TypeScript---------------------------------------------------


// // const defaultValues = {

// //   name: '',
// //   email: '',
// //   services: [],
// // }

// const FormSchema = Yup.object().shape({
//   services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
//   email: Yup.string().required('Email is required').email('That is not an email'),
//   name: Yup.string()
// });

// //----------------EXPORT---------------------------------------------------

// export default function Form () {
//   const { reset, control, handleSubmit, formState: { isSubmitting }} = useForm<CandidatesProps>(
//     { mode: 'onTouched', resolver: yupResolver(FormSchema), defaultValues: { 
//       name: '',
//       email: '',
//       services: [],
//     },
//   });

//   const onSubmit = async (data: CandidatesProps) => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     alert(JSON.stringify(data, null, 2));
//     reset();
//   };









// //----------------Hooks---------------------------------------------------

// const [page, setPage] = useState(0);

// const conditionalComponent = () => {
//   switch (page) {
//     case 0:
//       return <First />;
//     case 1:
//       return <StepTwo  onSubmit={onSubmit} onSubmit={handleSubmit(onSubmit)}  />;
//      case 2:
//        return <StepThree   onSubmit={onSubmit} handleSubmit={handleSubmit}  />;
//      case 3:
//        return <StepFour  onSubmit={onSubmit} handleSubmit={handleSubmit}//formData={formData} setFormData={setFormData}
//         />;
//   }};


//   function handleSubmit1 () {
//     setPage(page + 1);
//   }

//   // PROBLEM -  HandleSubmit is the button to submit the form
//   // it is also asigned to my varibles


//   // const [formData, setFormData] = useState<CandidatesProps>();
    
  
  



//   return (

//     <form >
    

//     <Stack  sx={{ width: 1 }} direction='column'>

//         <Box>

//         {conditionalComponent()}


//         <Stack direction='row' flexWrap="wrap" sx={{ mx:2, pt:2 }}>

//         <Stack sx={{mx:0.5}}>

//         <LoadingButton
//          loading={isSubmitting}
//          onClick={handleSubmit1}
//          variant='contained' 
//          size= 'large'>
//         { page === 0-2 || "Next" }
//         </LoadingButton> 

//         </Stack>


//         <Stack sx={{mx:0.5}}>
        

//         { page > 0 && 

//         <Button
//           variant='contained' 
//           size= 'large' 
//           onClick={() => setPage (page - 1 )}>
//           Back
//         </Button> }

//         </Stack>
//         </Stack>


//         </Box>
//    </Stack>
//    </form>
        
//   )
// };