import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import { Stack, Typography } from '@mui/material';
import { Iconify } from '../../../components';
import securityIcon from '@iconify/icons-carbon/security';

import {  MotionViewport, varScale } from '../../../components/animate';
import { m } from 'framer-motion';



const BENEFITS = ['Straight away!', 'In the near future', "Haven't decided yet"];





export default function __Checked () {


return (

  <Stack>


<MotionViewport>
  <m.div variants={varScale().inX}>





  <Stack sx={{mb:5}} >

<Stack alignItems="center" spacing={1}>
  <Stack direction="row" alignItems="center" spacing={1}>
    <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
    <Typography variant="subtitle2">BlueCollar user request</Typography>
  </Stack>
  <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
  When do you want the employee to start?
  </Typography>
</Stack>
</Stack>

  
<Stack sx={{ml:4.5}}>

{BENEFITS.map((benefits) => (

  <ListItemButton key={benefits}>

      <Checkbox  />
      <Typography  variant='body3' >{benefits}</Typography>

  </ListItemButton>
))};


</Stack>




</m.div>

  </MotionViewport>




</Stack>


)};