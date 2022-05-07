import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  TextField,
  ToggleButton,
  FormHelperText,
  Typography,
} from '@mui/material';
// utils
import send from '@iconify/icons-carbon/send';
import {Iconify} from '../../../components';

// ----------------------------------------------------------------------

const SERVICES = ['Full-time', 'Part-time', 'Agency'];

const FormSchema = Yup.object().shape({
  services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
});

type FormValuesProps = {
  services: string[];
  message: string;
};

// ----------------------------------------------------------------------

export default function CandidatesPopover() {
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
      <Stack spacing={2.5} alignItems="center" sx={{ mx:2 }}>
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

                <Typography variant="h6"  sx={{ mb: 8, px:5, display: 'block' }}>
                    Contact User{/* Invite Candidate to converation */}
                </Typography>


                <Stack direction="column" flexWrap="wrap">
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
                        my: 0.5,
                        mx: 0,
                        width: 1,
                        
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

        <Stack
          direction={{ xs: 'column', md: 'column' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1, mx:2 }}
        >
          

        <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              rows={4}
              label="Message (max.300)"
              error={Boolean(error)}
              helperText={error?.message}
              sx={{ pb: 2.5 }}
            />
          )}
        />

        {/* <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
          Send Request
        </LoadingButton> */}


            <LoadingButton
              size="large"
              variant="contained"
              type="submit"
              sx={{ margin: '0 auto', display: "flex", mt:4 }}
              endIcon={<Iconify icon={send} sx={{ width: 20, height: 20 }} />}
              loading={isSubmitting}
            >
              Send Invite
            </LoadingButton>



      </Stack>
      </Stack>
    </form>
  );
}
