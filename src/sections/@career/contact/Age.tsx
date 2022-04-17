import { useState } from 'react';
// @mui
import { Slider as MUISlider, FormControl, Typography, Popover, Box, Select } from '@mui/material';
import { Image } from '../../../components';

// ----------------------------------------------------------------------

const inputStyle = {
  width: { xs: 1, md: 1 },
  '& .MuiSvgIcon-root': { color: 'text.disabled', width: 18, height: 18 },
};

const placeholder = (
  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
    Age
  </Typography>
);

// ----------------------------------------------------------------------


type Props = {
  filterSalary: number[];
  onChangeSalary: (event: Event, newValue: number | number[]) => void;
};

export default function CareerJobSalaryFilter({ filterSalary, onChangeSalary }: Props) { // hello
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const Salary = filterSalary[0];

  return (
    <>


      <Box onClick={handleOpen} >
        <FormControl variant="filled" sx={{ ...inputStyle }}>
          <Select
            open={false}
            displayEmpty
            value=""
            renderValue={() => {
              if (Salary === 0 ) {
                return placeholder;
              }
              return (
                <Typography component="span">{Salary} years old</Typography>
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
            pt: 4,
            pb: 4,
            px: 5,
            width: 1,
            maxWidth: 340,
          },
        }}
      >
        <Typography variant="overline"  sx={{ mb: 8, display: 'block', color: 'text.disabled' }}>
          slide to your age
        </Typography>


        <Image
        alt="marketing-contact"
        src="https://blue-collar.vercel.app/assets/postCode.png"
        sx={{
          maxWidth: 380,
          pb:6
        }}
      />


        <MUISlider
          step={1}
          min={18}
          max={80}
          valueLabelDisplay="on"
          // ORIGINAL  valueLabelFormat={(value) => `${fCurrency(value)}`}
          value={filterSalary}
          onChange={onChangeSalary}
        />
      </Popover>
    </>
    
  );
}
