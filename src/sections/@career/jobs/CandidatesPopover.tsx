import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  TextField,
  Typography,
} from '@mui/material';
// utils
import send from '@iconify/icons-carbon/send';
import {Iconify} from '../../../components';
import { JobProps } from '../../../@types/career';
import {
    Image,
  } from '../../../components';

// ----------------------------------------------------------------------


const FormSchema = Yup.object().shape({
  services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
});

type FormValuesProps = {
  services: string[];
  message: string;
};

// ----------------------------------------------------------------------

type Props = {
    job: JobProps;
  };
  
      
      // ----------------------------------------------------------------------
      
      
export default function CandidatesPopover({ job }: Props) {

    const { userName, userAvatar} = job;

    const CHARACTER_LIMIT = 450;


          // -----------------FORM-----------------------------------------------------


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
    await new Promise((resolve) => setTimeout(resolve, 0));
    alert(JSON.stringify(data, null, 2));
    reset();
  };


            return (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2.5} alignItems="center" sx={{ mx:2 }}>
                

                <Stack  alignItems="center" spacing={2.5}>
                    <Image
                        alt={userName} 
                        src={userAvatar}
                        sx={{ width: 80, height: 80, borderRadius: 1, my:2}}
                    />
                </Stack>
                <Stack>
                <Typography variant="body3"  sx={{ mb: 1, px:0, display: 'block' }}>
                    Invite Candidate to converation
                </Typography>
                </Stack>




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
              rows={5}
              label="Message (max.300)"
              error={Boolean(error)}
              helperText={error?.message}
              sx={{ pb: 2.5 }}
              inputProps={{
                maxlength: CHARACTER_LIMIT
              }}
              
            />
          )}
        />

              <Stack sx={{mx:4}}>

            <LoadingButton
              size="large"
              variant="contained"
              type="submit"
              sx={{ margin: '0 auto', display: "flex", mt:1 }}
              endIcon={<Iconify icon={send} sx={{ width: 20, height: 20 }} />}
              loading={isSubmitting}
            >
              Send Message
            </LoadingButton>

              </Stack>



      </Stack>
      </Stack>
    </form>
  );
}


