import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
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
// utils
import { fCurrency } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const SERVICES = ['Full time', 'part time', 'Agency'];
const DRIVES = ['Yes, I Drive', 'No, I Dont Drive'];
const SALARIES = ['Hourly', 'Daily', 'Weekly', 'Annually'];

const FormSchema = Yup.object().shape({
  services: Yup.array().required().min(1, 'Select at least one type of work'),
  drive: Yup.array().required().min(1, 'Select at least one type of work'),
  salary: Yup.array().required().max(1, 'Salary Range is required'),
  email: Yup.string().required('Email is required').email('That is not an email'),
  company: Yup.string().required('Company is required'),
  age: Yup.number().required('Age is required'),
});

type FormValuesProps = {
  services: string[]; // after string there was []
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  age: number [];
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
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValuesProps>({
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
      company: '',
      age: [],
      budget: [250],
      message: '',
    },
  });

  const onSubmit = async (data: FormValuesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5} >
             
















      <Divider/>

<Stack spacing={1} sx={{ py: 2.5, px: 0}}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Desired Salary (£)
          </Typography>




          <Stack>


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
            <Stack>
 
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <MUISlider
                {...field}
                valueLabelDisplay="on"
                max={500}
                step={1}
                sx={{m:0}}
                size='medium'
                valueLabelFormat={(value) => fCurrency(value)}
                aria-label="Large"

                color="secondary"
              />
            )}
          />
        </Stack>




            <Stack 
            direction="row" 
            >
            
              {SALARIES.map((salaries) => (
                <ToggleButton
                  {...field}
                  fullWidth
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
                  }}
                >
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
            name="company"
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
                label="Experience"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          </Stack>



            
          

























        

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
                <Stack>
                
                  <Typography variant="overline"  sx={{ color: 'text.secondary' , py: 2}}  >
                  What type of work are you after?
                  </Typography>

                </Stack>



                <Stack direction="row">
                
                  
                
                  {SERVICES.map((service) => (
                    <ToggleButton
                      {...field}
                      fullWidth
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

          <Typography variant="overline" sx={{ color: 'text.secondary' , py: 2, }}  >
          Do you have a drivers licence?
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
                            fullWidth
                            key={drives}
                            color="standard"
                            selected={field.value.includes(drives)}
                            onChange={() => field.onChange(onSelected(drives))}
                            sx={{
                              py: 0.5,
                              px: 2,
                              m: 0.5,
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

          <Divider/>

        <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
          Save Changes
        </LoadingButton>
      </Stack>
    </form>
  );
}
