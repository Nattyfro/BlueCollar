import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography} from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
/* import {
  MarketingFreeSEO,
  
} from '../../src/sections/@marketing'; */
import {
  CareerContactInfo,
  CareerContactForm,
  
} from '../../src/sections/@career/contact';

import { CareerDesiredSalary } from '../../src/sections/@career';

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
              <Typography variant="h2" sx={{ mb: 5 }}>
                Account Settings
              </Typography>
              
              <CareerDesiredSalary/>  
              <CareerContactForm />
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
