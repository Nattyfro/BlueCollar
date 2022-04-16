import { useState } from 'react';
// @mui
import { Slider as MUISlider, FormControl, Typography, Popover, Box, Select } from '@mui/material';

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


      <Box onClick={handleOpen} sx= {{ my:2 }}>
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
        PaperProps={{
          sx: {
            pt: 6,
            pb: 1,
            px: 8,
            width: 1,
            maxWidth: 360,
          },
        }}
      >
        <Typography variant="overline"  sx={{ mb: 8, display: 'block', color: 'text.disabled' }}>
          slide to your age
        </Typography>
        <MUISlider
          size="medium"
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
