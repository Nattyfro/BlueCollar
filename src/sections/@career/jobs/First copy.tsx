import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import {
  Stack,
  ToggleButton,
  FormHelperText,
} from '@mui/material';
// utils

// ----------------------------------------------------------------------

const SERVICES = ['Email marketing', 'SEO', ' Social Marketing', 'Research'];

const FormSchema = Yup.object().shape({
  services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
  email: Yup.string().required('Email is required').email('That is not an email'),
  compnany: Yup.string().required('Compnany is required'),
  website: Yup.string().required('Website is required'),
});

type FormValuesProps = {
  services: string[];
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  compnany: string;
  website: string;
  budget: number | number[];
  message: string;
};

// ----------------------------------------------------------------------

export default function MarketingContactForm() {
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
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      compnany: '',
      website: '',
      budget: [2000, 10000],
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
      <Stack spacing={2.5} alignItems="flex-start">
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
                <Stack direction="row" flexWrap="wrap">
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
        </Stack>
        </form>
  );
}