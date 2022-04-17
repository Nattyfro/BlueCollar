import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
// @mui
import {
  Stack,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
import {Iconify } from '../../../components';
import CareerTradeFilter from './CareerTradeFilter';

// ----------------------YUP & JSON------------------------------------------------


const FormSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  salary: Yup.array().required().min(1, 'Select either Hourly, Daily, Monthly or Annually').max(1,'please select only one')  ,
  email: Yup.string().required('Email is required').email('That is not an email'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  services: Yup.array().required().min(1, 'Select at least one type of work'),
  drive: Yup.array().required().min(1, 'Select whether you drive or not'),
  trade: Yup.string().required('Trade is required'),
  age: Yup.number().required('Age is required').min(18,'Must be over 16 to use the site'),
});




//---------------------typescript----------------------------------

type FormValuesProps = {
  services: string[]; 
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  trade: string;
  age: number;
  budget: number | number[];
  message: string;
  drive: string[]; // ADDED
  salary: string[]; // ADDED
  postCode: string; // ADDED
  city: string; // ADDED
  experience: string; // ADDED
};


// ----------------------------------------------------------------------

export default function CareerContactForm() {
  const {reset, handleSubmit, control} = useForm<FormValuesProps>({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      services: [],
      drive: [],
      salary: [],
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '' ,
      trade: '',
      age: undefined,
      budget: [250],
      message: '',
      
    },
  });

// -------------Submitting the form----------------------------

// basically code for the submit button to do push data out

  const onSubmit = async (data: FormValuesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset(); 
    // myles this is u below // 
    console.log(data);
  };




// -----------------------------MYLES CheckoutMethods-----------------------------------------

  return (

    <form onSubmit={handleSubmit(onSubmit)}> 
        
        

      <Stack spacing={2.5} sx={{ py: 2, width: 1 }}  >


      <Stack sx= {{my:3}}>

<Typography variant="h6" sx={{ color: 'text.disabled'}}>
Enter your details here
</Typography>

</Stack>


        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >

          
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="First Name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Last Name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Email"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Phone number"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >
          <Controller
            name="trade"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Trade"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="age"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Age"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="postCode"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Postcode"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          
        </Stack>



        <Stack>

          <CareerTradeFilter />
          
        </Stack>
        
      </Stack>

      <Stack direction="row" alignItems="center" sx= {{my:5}}> 

            <Button
              size="large"
              variant="outlined"
              color="inherit"
              sx= {{mr:1}}
              
              
            >
              Back
            </Button>

            <Button
              size="large"
              variant="contained"
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              Next
            </Button>


        </Stack>

    </form>
  );
}