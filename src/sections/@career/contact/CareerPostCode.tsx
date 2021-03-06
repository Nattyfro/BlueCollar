import React, { useState } from 'react';
// import React, { useState, useRef } from 'react';
// @mui
import { 
  FormControl,
  Typography,
  Popover, 
  Box, 
  Select, 
  Stack, 
  TextField, 
  Divider,
  } from '@mui/material';

import { Image } from '../../../components';
// ----------------------------------------------------------------------

const inputStyle = {
  width: { xs: 1, md: 1 },
  '& .MuiSvgIcon-root': { color: 'text.disabled', width: 18, height: 18 },
};

const placeholder = (
  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
    Postcode
  </Typography>
);

// ----------------------------------------------------------------------


type Props = {
  filterPostCode: string;
  onChangePostCode: (event: Event, newValue: string) => void;
};

export default function CareerPostCode ({ onChangePostCode, filterPostCode }: Props) {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };


  // const valueRef = useRef('cat')
  






 const PostCode = filterPostCode;

  return (
    <>


      <Box onClick={handleOpen} sx={{ pt:2 }} id="outlined-multiline-flexible" >
        <FormControl variant="filled" sx={{ ...inputStyle }}>
          <Select
            open={false}
            displayEmpty
            value= ""
            renderValue={() => {
              if (PostCode === '' ) {
                return placeholder;
              }
              return (
                <Typography component="span">{PostCode}</Typography>
              );
            }}
          />
        </FormControl>
      </Box>

      <Popover
        open={Boolean(open)}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        sx= {{ overflow: 'scroll' }}
        PaperProps={{
          sx: {
            py: 4,
            width: 1,
            maxWidth: 340,
          },
        }}
      >

          <Stack textAlign="center" >

            <Typography variant="h3" sx= {{pb:3}} >Postcode</Typography>

            <Typography variant="body3" sx={{ color: 'text.secondary', px:2 }}>
            Enter the first half of your postcode, see the examples
            Below for help.
            </Typography>

          </Stack>

          <Divider sx={{ my:6, mx:6}}/>

        <Image
        alt="postcode-examples"
        src="https://blue-collar.vercel.app/assets/postCode.png"
        sx={{
          maxWidth: 380,
          pb:6,
          px:1
        }}
      />


        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1, px:10 }}
        >


           <TextField

            fullWidth
            label="Postcode"
            value={filterPostCode}
            // inputRef = {PostCode}
            onChange = { onChangePostCode as any } 

          /> 

        </Stack>
      </Popover>
    </>
    
  );
}
