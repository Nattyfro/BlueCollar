import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  TextField,
  Typography,
  ToggleButton,
  FormHelperText,
  Divider,
  Slider as MUISlider,
} from '@mui/material';

// ----------------------YUP & JSON------------------------------------------------

const SERVICES = ['Full time', 'part time', 'Agency'];
const DRIVES = ['Yes, I Drive', 'No, I Dont Drive'];
const SALARIES = ['Hourly', 'Daily', 'Monthly'];

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
  const {reset, handleSubmit, control, formState: { isSubmitting }} = useForm<FormValuesProps>({
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


             
        
        <Stack spacing={1} sx={{ pt: 10, px: 0}}>

          <Typography variant="overline" sx={{ color: 'primary' }}>
            Target Salary (£)
          </Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled' }}> 
          What is a realistic salary you believe you’re worth?
          </Typography>

        <Stack>

    
        <Controller

          name="salary"
          control={control}
          render={({ field, fieldState: { error } }) => {
            
            // Using with lodash https://lodash.com/docs/4.17.15#xor
            // const onSelected = (service: string) => xor(field.value, [service]);

            const onSelected = (salary: string) =>

              field.value.includes(salary)

                ? field.value.filter((value) => value !== salary)
                : [...field.value, salary];

              return (
                
                <div> 

                  <Stack  flexWrap="wrap" >
      
                    <Controller

                      name="budget"
                      control={control}
                      render={({ field }) => (

                        <MUISlider 

                          {...field}
                          valueLabelDisplay="auto"
                          max={500}
                          step={1}
                          sx= {{ py:3 }} 
                          size='medium'
                          valueLabelFormat={(value) => fCurrency(value)}
                          color="secondary"

                        />

                      )}
                      
                    />

                    
      </Stack>

      




        <Stack direction="row" >
        
        
          {SALARIES.map((salaries) => (

            <ToggleButton

              {...field}

              key={salaries}
              color="standard"
              selected={field.value.includes(salaries)}
              onChange={() => field.onChange(onSelected(salaries))}
              sx={{
                py: 0.5,
                px: 2,
                mx: 0.5,
                mt:2,
                typography: 'body2',
                '&.Mui-selected': {
                  bgcolor: 'text.primary',
                  color: (theme) =>
                    theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                  '&:hover': {
                    bgcolor: 'text.primary',
                  },
                },
              }}>
            
              {salaries}

            </ToggleButton>

          ))}

        </Stack>

          {error && (

            <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>

              {(error as any)?.message}

            </FormHelperText>

          )}
          
          </div>
        );
      }}
    />

</Stack>



<Divider 
sx={{ pb: 3}}
/>



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

        <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 2.5, md: 2 }}
        sx={{ width: 1 }}
        >
        <Controller
            name="city"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="City"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="experience"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Years of Experience"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          </Stack>



            
          




















          <Divider 
          sx={{ pb: 3}}/>
          




        

        <Controller
          name="services"
          control={control}
          render={({ field, fieldState: { error } }) => {
            // Using with lodash https://lodash.com/docs/4.17.15#xor
            // const onSelected = (service: string) => xor(field.value, [service]);

            const onSelected = (service: string) =>
              field.value.includes(service)
                ? field.value.filter((value) => value !== service)
                : [...field.value, service];

            return (
              <div> 
                <Stack >
                
                  <Typography variant="overline"  sx={{ color: 'text.secondary' , py: 0}}  >
                  What type of work are you after?
                  </Typography>

                </Stack>

                

                <Stack direction="row" sx= {{ mb:1 }} >
                
                  
                
                  {SERVICES.map((service) => (
                    <ToggleButton
                      {...field}
                      key={service}
                      color="standard"
                      selected={field.value.includes(service)}
                      onChange={() => field.onChange(onSelected(service))}
                       sx={{
                    py: 0.5,
                    px: 2,
                    mx: 0.5,
                    mt:2,
                    typography: 'body2',
                    '&.Mui-selected': {
                      bgcolor: 'text.primary',
                      color: (theme) =>
                        theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                      '&:hover': {
                        bgcolor: 'text.primary',
                      },
                    },
                  }}
                  
                    >
                      {service}
                    </ToggleButton>
                  ))}
                </Stack>

                {error && (
                  <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                    {(error as any)?.message}
                  </FormHelperText>
                )}
              </div>
            );
          }}
        />

      



          <Stack>

          <Typography variant="overline" sx={{ color: 'text.secondary' , py: 1 }}  >
          Do you have a driving licence?
          </Typography>

            <Controller
                name="drive"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  // Using with lodash https://lodash.com/docs/4.17.15#xor
                  // const onSelected = (service: string) => xor(field.value, [service]);

                  const onSelected = (drive: string) =>
                    field.value.includes(drive)
                      ? field.value.filter((value) => value !== drive)
                      : [...field.value, drive];

                  return (
                    <div> 
                      <Stack direction="row">
                      
                        {DRIVES.map((drives) => (
                          <ToggleButton
                            {...field}
                            key={drives}
                            color="standard"
                            selected={field.value.includes(drives)}
                            onChange={() => field.onChange(onSelected(drives))}
                            sx={{
                              py: 0.5,
                              px: 2,
                              mx: 0.5,
                              mt: 1,
                              typography: 'body2',
                              '&.Mui-selected': {
                                bgcolor: 'text.primary',
                                color: (theme) =>
                                  theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                                '&:hover': {
                                  bgcolor: 'text.primary',
                                },
                              },
                            }}
                          >
                            {drives}
                          </ToggleButton>
                        ))}
                      </Stack>

                      {error && (
                        <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                          {(error as any)?.message}
                        </FormHelperText>
                      )}
                    </div>
                  );
                }}
              />

          </Stack> 


        
      </Stack>

      <LoadingButton 
      size="large" 
      type="submit" 
      variant="contained" 
      loading={isSubmitting}
      sx={{ my:4 }}>
          Save Changes
        </LoadingButton>

    </form>
  );
}