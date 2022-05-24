// icons
import emailIcon from '@iconify/icons-carbon/email';
import chatIcon from '@iconify/icons-carbon/chat';
import mobileIcon from '@iconify/icons-carbon/mobile';
import securityIcon from '@iconify/icons-carbon/security';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, CardActionArea } from '@mui/material';
// hooks
// utils
// components
import { Iconify } from '../../../components';

import {  MotionViewport, varBounce } from '../../../components/animate';
import { m } from 'framer-motion';



export default function _ContactMethod () {


// ----------------------------------------------------------------------

const ContactButtonStyle = styled((props) => (
  <CardActionArea sx={{ borderRadius: 1 }}>
    <Stack direction="row" alignItems="center" spacing={2} {...props} />
  </CardActionArea>
))(({ theme }) => ({
  ...theme.typography.subtitle3,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  border: `solid 1px ${theme.palette.divider}`,
}));

// ----------------------------------------------------------------------



  // const {control} = useFormContext();


  return (


    <Box >

<MotionViewport
             >

            <m.div variants={varBounce().in}>


      <Stack spacing={4}>

        <Stack alignItems="center" spacing={1}>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
            <Typography variant="subtitle2">BlueCollar user request</Typography>
          </Stack>

          <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          What type of employment are you offering?
          </Typography>

        </Stack>

        <Stack spacing={2} sx={{px:2}}>

          <ContactButtonStyle >
            <Iconify icon={emailIcon} sx={{ width: 22, height: 22 }} />
            <Typography variant="subtitle3">Email</Typography>
          </ContactButtonStyle>

          <ContactButtonStyle>
            <Iconify icon={chatIcon} sx={{ width: 22, height: 22 }} />
            <Typography variant="subtitle3">Chat Now</Typography>
          </ContactButtonStyle>

          <ContactButtonStyle>
            <Iconify icon={mobileIcon} sx={{ width: 22, height: 22 }} />
            <Typography variant="subtitle3">
              Call{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              01902-567278
            </Box>
            </Typography>
          </ContactButtonStyle>
          
        </Stack>

      </Stack>

      </m.div>

  </MotionViewport>



    </Box>

  )
};



