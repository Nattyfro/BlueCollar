import { Button, Stack } from '@mui/material'
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';


export default function NextButton () {

    const  [page, setPage] = useState(0);

    function Next () {
     setPage(page + 1);
  }
    function Back () {
     setPage(page - 1);
  }

  const { formState : {isDirty, isValid}} = useFormContext()


  return (


    <Stack direction='row' position='absolute' overflow='hidden' sx={{ mx:2, py:4, bottom: 0, left: 0}}>

        <Stack sx={{mx:0.5}}>
        {page > 0 && page < 4 &&
            <Button
            variant='outlined' 
            size= 'large' 
            onClick={Back}>
            Back
            </Button>}

        </Stack>

        <Stack sx={{mx:0.5}}>
        { page < 3 && 
            <Button
            onClick={Next}
            variant='contained' 
            disabled={!isDirty || !isValid}

            size= 'large'>Next
            </Button> }
        </Stack>
                

        

    </Stack>


  )};