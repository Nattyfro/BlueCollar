import {
  Grid,
  Link,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  FilledInput,
  InputAdornment,
} from '@mui/material';
// hooks
// components
import { Logo } from '../../components';

// ----------------------------------------------------------------------

export default function Footer() {


  return (
    <>
      <Divider />
      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Stack alignItems="flex-start" spacing={3}>
                <Logo />
                <Typography variant="body3" sx={{ color: 'text.secondary' }}>
                  Connecting employees to employers.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet deleniti obcaecati enim exercitationem laborum reprehenderit illum dolor cupiditate quos id, sed, cum numquam corporis sunt.
                </Typography>
              </Stack>

              


              

            </Stack>
          </Grid>


          

          <Grid item xs={12} md={6}>
            
            <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="h6">Let’s stay in touch</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Subscribe to our newsletter to receive latest articles to your inbox weekly.
                  </Typography>
                </Stack>
                <FilledInput
                  placeholder="Email address"
                  endAdornment={
                    <InputAdornment position="end">
                      <Button variant="contained" size="small" sx={{ py: '9px' }}>
                        Subscribe
                      </Button>
                    </InputAdornment>
                  }
                  sx={{
                    pr: 0.5,
                    '& .MuiFilledInput-input': { py: '14px' },
                  }}
                />
              </Stack>

              
              
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2.5}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="body3" sx={{ color: 'text.secondary' }}>
            © 2022. All rights reserved
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center">
            <Link variant="body3" sx={{ color: 'text.secondary' }}>
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
