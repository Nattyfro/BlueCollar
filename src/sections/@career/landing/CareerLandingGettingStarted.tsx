// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, Grid, Card, Button } from '@mui/material';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

const VISIONS = [
  {
    name: 'Create an Account',
    description: 'Getting started is easy. Simply click on the Join us button in the header to create an account',
  },
  {
    name: 'Browse Candidates',
    description: 'Finding your future employee should be nothing short of straight forward. ', 
  },
  { 
  name: 'Negotiate', 
  description: 'Now its all down to you, contact candidates and let them know how great your business is.' },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function CareerLandingGettingStarted() { // Myles edit
  return (
    <RootStyle>
      <Container>
      <Button>hello</Button>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 466,
            mb: { xs: 5, md: 5, lg:0 }, // xs: was 8 myles
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Get Started</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Follow our super simple step by step guide on how to get up and running, you will be contacting superstar candidates right-away!
          </Typography>
        </Stack>

        <Grid
          container
          spacing={{ xs: 8, md: 3}}
          justifyContent="space-between"
          alignItems={{ md: 'center' }}
        >
          <Grid 
          item xs={12} md={6} lg={5}
          alignItems={{ xs: 'center' }}
          // alignItems={{ xs: 'center' }}
          >
            <Image
              alt="vision"
              src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_vision.svg"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Stack
              sx={{
                position: 'relative',
              }}
              alignItems={{ md: 'flex-end' }}
            >
              {VISIONS.map((vision, index) => {
                const { name, description } = vision;
                const firstVision = index === 0;
                const secondVision = index === 1;
                const thirdVision = index === 2;

                return (
                  <Card
                    key={name}
                    sx={{
                      p: 4,
                      mt: 4,
                      width: { md: 'calc(50% - 16px)' },
                      ...(firstVision && {
                        top: { md: 0 },
                        left: { md: 0 },
                        bottom: { md: 0 },
                        my: { md: 'auto' },
                        boxShadow: { md: 0 },
                        maxHeight: { md: 304 },
                        display: { md: 'flex' },
                        position: { md: 'absolute' },
                        flexDirection: { md: 'column' },
                        justifyContent: { md: 'center' },
                      }),
                      ...(secondVision && {
                        boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                      }),
                      ...(thirdVision && {
                        boxShadow: { md: 0 },
                        
                      } ),
                    }}
                  >
                    <Typography
                      variant="h1"
                      component="h2"
                      sx={{ color: 'text.disabled', opacity: 0.24, mb: 3 }}
                    >
                      {`0${index + 1}`}
                    </Typography>

                    <Typography variant="h4" paragraph>
                      {name}
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                    
                  </Card>
                  
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
