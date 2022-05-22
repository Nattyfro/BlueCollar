// @mui
import {
  Stack
} from '@mui/material';
import { Box } from '@mui/system';
// utils
import { JobProps } from '../../../@types/career';
import {
    Image,
  } from '../../../components';

import Form from './Form';


// ----------------------------------------------------------------------

type Props = {
    job: JobProps;
  };
  
      
export default function CandidatesPopover({ job }: Props) {

  const { userName, userAvatar} = job;

  return (
                  
    <Stack spacing={2.5} alignItems="center" justifyContent="bottom" sx={{ mx:2, p:0 }}>

      <Stack  alignItems="center" spacing={2.5}>
        <Image
        alt={userName} 
        src={userAvatar}
        sx={{ width: 100, height: 100, borderRadius: 1, mb:2, mt:4}}
        />
      </Stack>
        
      <Box sx={{width:1, m:0, p:0}} alignItems='center' justifyContent="center" textAlign='center'>
       <Form/>   
      </Box>

    </Stack>
  );
  }



              