// icons
import chevronRight from '@iconify/icons-carbon/chevron-right';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Grid,
  Stack,
  Button,
  Container,
  Typography,
  FilledInput,
  InputAdornment,
} from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
// components
import { Iconify } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  ...cssStyles(theme).bgImage({
    url: 'https://zone-assets-api.vercel.app/assets/images/travel/travel_newsletter.jpg',
    startColor: `${alpha(theme.palette.grey[900], 0.88)}`,
    endColor: `${alpha(theme.palette.grey[900], 0.88)}`,
  }),
  [theme.breakpoints.up('md')]: {
    ...cssStyles(theme).bgImage({
      direction: 'right',
      url: 'https://zone-assets-api.vercel.app/assets/images/travel/travel_newsletter.jpg',
      startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
      endColor: `${alpha(theme.palette.grey[900], 1)} 50%`,
    }),
    backgroundPosition: 'center, left ',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

export default function NewsletterTravel() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="flex-end">
          <Grid item xs={12} md={5}>
            <Stack
              spacing={3}
              sx={{
                color: 'common.white',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h2">Learn How To Approach 🤟</Typography>
              <Typography>
              Join our mailing list for helpful tips on securing
                <br /> A new hire alongside with new features!
              </Typography> 

              <FilledInput
                fullWidth
                placeholder="Enter your email"
                endAdornment={
                  <InputAdornment position="end">
                    <Button variant="contained" size="large" sx={{ minWidth: 48, px: 0 }}>
                      <Iconify icon={chevronRight} sx={{ width: 22, height: 22 }} />
                    </Button>
                  </InputAdornment>
                }
                sx={{
                  pr: 0.5,
                  my: 5,
                  color: 'common.white',
                  '& .MuiFilledInput-input': {
                    py: '18px',
                  },
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
