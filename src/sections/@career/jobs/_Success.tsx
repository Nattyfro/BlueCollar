// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Alert} from '@mui/material';
import { SvgIconStyle } from '../../../components';

import {  MotionViewport, varFade,varBounce } from '../../../components/animate';
import { m } from 'framer-motion';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  // backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------

export default function _Success () {



  return (

    <Stack>
      <MotionViewport>
      <m.div variants={varFade().in}>
    <RootStyle>
      <Container >
        
          <Stack
            spacing={3}
            alignItems="center"
          >
            <SvgIconStyle
              src="https://zone-assets-api.vercel.app/assets/icons/ic_newsletter.svg"
              sx={{ width: 65, height: 65, color: 'primary.main' }}
            />
            <div>
              <Typography variant="h5" gutterBottom>
                Request Submitted
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              The candidate now has your Job offer, if he/she is interested they will contact you.
              </Typography>
            </div>
            
          </Stack>

            
      </Container>

    </RootStyle>

    </m.div>
    <m.div variants={varBounce().inUp}>

    <Stack>
      <Alert variant="standard" severity="success" sx={{mt:5, mx:2}}>
        <Typography variant='body2'>This is a <strong>Success</strong> alert </Typography>
      </Alert>
    </Stack>

  </m.div>
</MotionViewport>











</Stack>
  )};
