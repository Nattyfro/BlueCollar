import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography, Stack, TextField } from '@mui/material';
import { fCurrency } from '../../../utils/formatNumber';




const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 45, //was 32
    height: 45, //was 32
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});




export default function First () {

  const [value, setValue] = React.useState<number | string | Array<number | string>>(
    [],
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 6000) {
      setValue(6000);
    }
  };
//   var string = numeral(1000).format('0,0');
// // '1,000'


  return (


    <Box alignItems="center" justifyContent='center' sx={{px:4, pt:5}} >

      <Stack alignItems='center' >
        <Typography variant="body1"  sx={{ mb: 3, display: 'block' }}>
            What salary are you offering?
        </Typography>
      </Stack>    
    

    <Stack alignItems='center' sx={{px:8}}>
      <TextField
        value={value}
        size="small"
        variant="filled"
        label="(£)"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          min: 1080,
          max: 6000,
          type: 'tel',
          'aria-labelledby': 'input-slider',
          width:1,
          textAlign:"center"
        }}
        
      />
      </Stack>  

      <Box sx={{ width: 1 }}>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        size= 'small'
        sx={{ mb: 3, mt:8}} 
        min={1080}
        max={6000}
        defaultValue={3540}
        step={10}
        // value= {data.salary}
        // onChange={ (e) => {setFormData ({...data, salary: e.target.value}) ;}}
        // valueLabelFormat={(value) => `${(value)}`}
        // value={data.salary}
        value={typeof value === 'number' ? value : 0}
        valueLabelFormat={(value) => fCurrency(value)}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"/>
    </Box>

    

          
  </Box>
  );
}