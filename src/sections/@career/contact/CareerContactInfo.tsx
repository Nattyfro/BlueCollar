// icons
import emailIcon from '@iconify/icons-carbon/email';
import timeIcon from '@iconify/icons-carbon/time';
// @mui
import { Typography, Stack, Link } from '@mui/material';
// components
import { Iconify, TextIconLabel, Image } from '../../../components';

// ----------------------------------------------------------------------

export default function CareerContactInfo() {
  return (
    <Stack spacing={3} sx={{display: { xs: 'none', md: 'block'}}} >
      <Image
        alt="marketing-contact"
        src="https://blue-collar.vercel.app/assets/illustrations/illustration_marketing_contact.svg"
        sx={{
          maxWidth: 380,
          display: { xs: 'none', md: 'block' },
        }}
      />



      <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={emailIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h6">Talk to us</Typography>
            <Link color="inherit" variant="body2" href="mailto:hello@example.com">
              support@bluecollar.com
            </Link>
          </Stack>
        }
      />

      <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={timeIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h6">Working Hours</Typography>
            <Typography variant="body2">Mon-Sat: 9 am — 10 pm</Typography>
          </Stack>
        }
      />
    </Stack>
  );
}
