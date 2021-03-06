import { ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, TextField, Stack, Button} from '@mui/material';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
import Layout from '../../src/layouts';
import { Page } from '../../src/components';
import { CareerContactInfo } from '../../src/sections/@career/contact';
import CandidatesSignupForm from '../../src/sections/@career/user-questionaire/CandidatesSignupForm'






// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function myAccount() {
  return (
    <Page title="Account Settings">
      <RootStyle>
        <Container sx={{ py: { xs: 0, md: 10 } }}>
          <Grid
            container
            spacing={{ xs: 8, md: 3 }}
            justifyContent="space-between"
            direction={{ xs: 'column-reverse', md: 'row' }}
          >
            <Grid item xs={12} md={6} lg={5}>
              <CareerContactInfo />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>

            {/* <Stack spacing={6} alignItems="center" sx={{mx:1}}>

              <Stack alignItems="center" spacing={5}>

                <Image
                  src="https://zone-assets-api.vercel.app/assets/icons/ic_lock_password.svg"
                  alt="Calendar" 
                  sx={{mb: 5, width: 96, height: 96 }}/>

                <Typography variant="h3" paragraph>
                  Forgot Your Password?
                </Typography>
                
                <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
                  Please enter the email address associated with your account and We will email you a
                  link to reset your password.
                </Typography>

                <Stack direction={{ xs: 'column', md: 'row' }} sx={{width:1}} spacing={1.5}>
                  <TextField variant="outlined" name="First Name" label="First Name"/>
                  <TextField variant="outlined" name="Last Name" label="Last Name"/>
                  <TextField variant="outlined" name="Email" label="Email"/>
                </Stack>

              </Stack>


              <Stack sx={{width:1}}>


                <Button
                    variant='contained' 
                    sx={{width:1}}
                    size= 'large'>
                  
                    Continue
                </Button>

              </Stack>
              </Stack> */}

              
                <CandidatesSignupForm/>

                
            </Grid>
          </Grid>
        </Container>

      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

myAccount.getLayout = function getLayout(page: ReactElement) {
  return <Layout disabledHeader disabledFooter >{page}</Layout>;
};
