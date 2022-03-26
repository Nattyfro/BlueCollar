// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------


export default function CareerFavouritesHead() {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Favourites</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          View all of the people you have favourited, begin talks with them here!
          </Typography>
        </Stack>
      </Container>
    </RootStyle>
  );
}
