// icons
import logoFacebook from '@iconify/icons-carbon/logo-facebook';
// @mui
import { Stack, Button } from '@mui/material';
// components
import { Image, Iconify } from '../../components';

// ----------------------------------------------------------------------

export default function AuthWithSocial() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        fullWidth
        size="large"
        color="inherit"
        variant="contained"
        sx={{ bgcolor: 'grey.5008', '&:hover': { bgcolor: 'grey.50024' } }}
      >
        <Image
          alt="google icon"
          src="https://zone-assets-api.vercel.app/assets/icons/ic_google.svg"
          sx={{ width: 30, height: 30 }}
        />
      </Button>

      <Button
        fullWidth
        size="large"
        color="inherit"
        variant="contained"
        sx={{ bgcolor: 'grey.5008', '&:hover': { bgcolor: 'grey.50024' } }}
      >
        <Iconify icon={logoFacebook} sx={{ color: '#1877F2', width: 30, height: 30 }} />
      </Button>
    </Stack>
  );
}
