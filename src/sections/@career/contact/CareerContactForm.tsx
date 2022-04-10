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
  // Imports From CheckoutMethods
  Radio,
  Collapse,
  RadioGroup,
  FormControlLabel,
  Paper,
} from '@mui/material';
import { useState } from 'react';
// _data
import { _paymentMethods } from '../../../../_data/mock';
// components
import { Image, Iconify } from '../../../components';
//
import CheckoutNewCardForm from '../../checkout/CheckoutNewCardForm';
import checkmarkOutline from '@iconify/icons-carbon/checkmark-outline';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

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

//---------------------Consts from CheckoutMethods.tsx----------------------------------




const OptionStyle = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'hasChildrenHourly' && prop !== 'selected' && prop !== 'hasChildrenMonthly' && prop !== 'hasChildrenAnnually',
})<OptionStyleProps>(({hasChildrenHourly, hasChildrenMonthly, hasChildrenAnnually, selected, theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2),
  transition: theme.transitions.create('box-shadow'),
  border: `solid 1px ${theme.palette.divider}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
  ...(hasChildrenHourly && {
    flexWrap: 'wrap',
  }),
  ...(hasChildrenMonthly && {
    flexWrap: 'wrap',
  }),
  ...(hasChildrenAnnually && {
    flexWrap: 'wrap',
  }),
  
  ...(selected && {
    boxShadow: theme.customShadows.z24,
  }),
}));



//---------------------Consts from CheckoutMethods.tsx----------------------------------

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

//----------------------MYLES

type OptionStyleProps = {

  hasChildrenHourly: boolean;
  hasChildrenMonthly: boolean;
  hasChildrenAnnually: boolean;
  selected: boolean;
}

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
      trade: '',
      // age: [], THIS IS HOW IT WAS
      budget: [250],
      message: '',
    },
  });

  const onSubmit = async (data: FormValuesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };

// -----------------------------MYLES CheckoutMethods-----------------------------------------


  const [show, setShow] = useState(false);
  const [method, setMethod] = useState('');


  const handleCollapseOut = () => {
    setShow(false);
  };

  const handleChangeMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (method === 'paypal') {
      setShow(false);
    }
    setMethod((event.target as HTMLInputElement).value);
  };

  // -----------------------------MYLES CheckoutMethods return ( || has been merged   -----------------------------------------

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <Stack spacing={2.5} sx={{ py: 2, width: 1 }}  >
             


        
      <RadioGroup value={method} onChange={handleChangeMethod}>
        <Stack spacing={2.5}>
          {_paymentMethods.map((option) => {
            const { value, label, icons } = option;
            const hasChildrenHourly = value === 'hourly';
            const hasChildrenMonthly = value === 'monthly';
            const hasChildrenAnnually = value === 'annually';
            const isSelected = method === value;

            return (
              <OptionStyle
              key={label}
              hasChildrenHourly={hasChildrenHourly} 
               hasChildrenMonthly={hasChildrenMonthly} 
               hasChildrenAnnually={hasChildrenAnnually} 
               selected={isSelected}>


                <FormControlLabel
                  value={value}
                  control={<Radio checkedIcon={<Iconify icon={checkmarkOutline} />} />}
                  label={<Typography variant="body2">{label}</Typography>}
                  sx={{ py: 3, mx: 0 }}
                />

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ position: 'absolute', top: 32, right: 16 }}
                >
                  {icons.map((icon) => (
                    <Image key={icon} alt="logo card" src={icon} sx={{ height: 30, width:1 }} />
                  ))}
                </Stack>


                {isSelected && hasChildrenHourly && ( // Hourly
                  <>

                  
                  
                    <MUISlider
                    sx={{ mb: 3, mt:2 }} 
                    valueLabelDisplay="on"
                    min={6.50}
                    max={35}
                    step={0.25}
                    valueLabelFormat={(value) => fCurrency(value)}
                    />
                      

                      

                    <Collapse in={show} sx={{ width: 1 }}>
                      <CheckoutNewCardForm onCancel={handleCollapseOut} />
                    </Collapse>
                    
                  </>
                )}

                  {isSelected && hasChildrenMonthly && ( // Monthly
                    <>
                    
                    <MUISlider
                    sx={{ mb: 3, mt:2 }} 
                    valueLabelDisplay="on"
                    min={270}
                    max={6000}
                    step={10}
                    valueLabelFormat={(value) => fCurrency(value)}
                    />
                        

                        

                      <Collapse in={show} sx={{ width: 1 }}>
                        <CheckoutNewCardForm onCancel={handleCollapseOut} />
                      </Collapse>
                    </>
                  )}


                  
                

                {isSelected && hasChildrenAnnually && ( // Annually
                  <>

                  
                  
                    <MUISlider
                    sx={{ mb: 3, mt:2 }} 
                    valueLabelDisplay="on"
                    min={14200}
                    max={70000}
                    step={100}
                    valueLabelFormat={(value) => fCurrency(value)}
                    />
                      

                      

                    <Collapse in={show} sx={{ width: 1 }}>
                      <CheckoutNewCardForm onCancel={handleCollapseOut} />
                    </Collapse>
                    
                  </>
                )}

                






              </OptionStyle>
            );
          })}
        </Stack>
      </RadioGroup>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
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
