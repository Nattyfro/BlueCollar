import { useState } from 'react';
// icons
import locationIcon from '@iconify/icons-carbon/location';
import timeIcon from '@iconify/icons-carbon/time';
import increaseLevel from '@iconify/icons-carbon/increase-level';
import moneyIcon from '@iconify/icons-carbon/money';
import userIcon from '@iconify/icons-carbon/user';
// next
// @mui
import { 
   Divider,
  Stack,
  Card, 
  Typography,
  Grid,
  Dialog,
Box, } from '@mui/material';
// routes
// utils
import { fDate } from '../../../utils/formatTime';
import { fCurrency } from '../../../utils/formatNumber';
// @types
import { JobProps } from '../../../@types/career';
// components
import {
  Image,
  Iconify,
  TextIconLabel,
  FavoriteButton,
} from '../../../components';
// myles components

import CandidatesPopover from './CandidatesPopover'




// ----------------------------------------------------------------------

type Props = {
  job: JobProps;
};

export default function CareerJobItem({ job }: Props) {
  const {
    // slug,
    type,
    level,
    salary,
    location,
    createdAt,
    favorited,
    experience,
    userName,
    userAvatar,
  } = job;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };
  const [open, setOpen] = useState<HTMLElement | null>(null);


  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null)
  };


  


  return (
      
    <Card
      
      sx={{
        boxShadow: (theme) => theme.customShadows.z8,
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}

      
      
    >
     

      <Dialog
          open={Boolean(open)}
          onClose={handleClose}
          // anchorEl={open}
          // anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
          // transformOrigin={{ vertical: 'center', horizontal: 'center' }}
          sx= {{ overflow: 'scroll', zIndex: 9999 }}
          PaperProps={{
            sx: {
              pt: 4,
              pb: 4,
              width: 1,
              maxWidth: 340, // was 340
            },
          }}
        >
        <CandidatesPopover job={job} />
        {/* <Button
        onClick={handleClose}>
        close
      </Button> */}
       
      </Dialog>
      




      <Box onClick={handleOpen}>

      
      













      <FavoriteButton
        checked={favorite}
        onChange={handleChangeFavorite}
        sx={{ position: 'absolute', right: 16, top: 16 }}
      />

      <Stack sx={{ p: 3, pb: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2.5}>
          <Image
            alt={userName} 
            src={userAvatar}
            sx={{ width: 100, height: 100, borderRadius: 1 }}
          />
        </Stack>

        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
          {/* <NextLink as={Routes.career.job(id)} href={Routes.career.job('[id]')} passHref>
            <TextMaxLine variant="h6" asLink line={1}>
            BlueCollar User {slug} 
            </TextMaxLine>
          </NextLink> */}

          <Typography variant="h6">
           BlueCollar User
          </Typography>

          <Typography variant="body3" sx={{ color: 'secondary.main' }}>
            {userName}
          </Typography>

          <TextIconLabel
            icon={<Iconify icon={locationIcon} sx={{ mr: 0.5, width: 18, height: 18 }} />}
            value={location}
            sx={{ typography: 'body3', color: 'text.secondary' }}
          />
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          Member since: {fDate(createdAt)}
        </Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

      <Grid
        container
        spacing={1.5}
        sx={{
          p: 3,
          pt: 0,
          typography: 'body3',
          color: 'text.secondary',
          textTransform: 'capitalize',
        }}
      >
        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={increaseLevel} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={`${experience} year exp`}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={timeIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={type}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={moneyIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={typeof salary === 'number' ? fCurrency(salary) : salary}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={userIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={level}
          />
        </Grid>
      </Grid>
      </Box>
    </Card>
    
    
  );
}
