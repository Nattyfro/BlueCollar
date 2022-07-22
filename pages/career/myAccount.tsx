import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, TextField, Stack, Button} from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// layouts
import Layout from '../../src/layouts';
// components
import { Iconify, Page } from '../../src/components';
// sections
/* import {
  MarketingFreeSEO,
  
} from '../../src/sections/@marketing'; */
import {
  CareerContactInfo,
 //  CareerContactForm,
  
} from '../../src/sections/@career/contact';

import { Image } from '../../src/components';
import securityIcon from '@iconify/icons-carbon/security';


// import { CareerDetails, CareerDesiredSalary } from '../../src/sections/@career';




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
        <Container sx={{ py: { xs: 8, md: 10 } }}>
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
              {/* <Typography variant="h2" sx={{ mb: 5 }}>
                Account Settings
              </Typography> */}

            <Stack spacing={6} sx={{mx:1}}>

              <Stack alignItems="center" spacing={1}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
                  <Typography variant="subtitle2">BlueCollar user request</Typography>
                </Stack> 
                
                <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                Fill out this form and you will be listed on the site within 24hrs
                </Typography>
              </Stack>


              <Stack alignItems="center" spacing={2} >
                <Image src="https://blue-collar.vercel.app/assets/images/formIcons/CALENDAR.png" 
                       alt=""
                       sx={{width:"50%"}} />

                <Stack direction={{ xs: 'column', md: 'row' }} sx={{width:1}} spacing={1.5}>
                  <TextField variant="outlined" name="First Name" label="First Name"/>
                  <TextField variant="outlined" name="Last Name" label="Last Name"/>
                  <TextField variant="outlined" name="Email" label="Email"/>
                </Stack>
              </Stack>


              <Stack direction='row' alignItems="center">

                <Button
                    variant='text' 
                    size= 'large' 
                    color="secondary">
                    Back
                </Button>

                <Button
                    variant='contained' 
                    size= 'large'>
                  
                    Next
                </Button>

              </Stack>
              </Stack>




                {/* <CareerDesiredSalary/> */}
                {/* <CareerDetails/> */}
                
            </Grid>
          </Grid>
        </Container>

      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

myAccount.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
