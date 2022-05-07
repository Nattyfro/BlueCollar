// @mui
import { MenuItem, Checkbox, FormControl, Typography, InputAdornment } from '@mui/material';
import  Select, { SelectChangeEvent } from '@mui/material/Select';
import { Iconify } from '../../../components';
import timeIcon from '@iconify/icons-carbon/time';
// ----------------------------------------------------------------------

const JOB_TYPES = ['Part time', 'Full time', 'Freelance'];

const inputStyle = {
  width: '100%',
  
  '& .MuiFilledInput-root': {
    height: 56,
    padding: '0 12px',
    paddingBottom:2,
  },
  
  '& .MuiSvgIcon-root': { color: 'text.disabled', width: 18, height: 18 },
}; 

const MenuProps = {
  PaperProps: {
    sx: {
      
      '& .MuiList-root': {
        py: 3,
        alignItems: 'center'
        
      },
    },
  },
};

const placeholder = (
  <Typography variant="body2"  sx={{ color: 'text.disabled'}} >
    Job type
  </Typography>
);

// ----------------------------------------------------------------------

type Props = {
  filterType: string[];
  onChangeJobType: (event: SelectChangeEvent<string[]>) => void;
};

export default function CareerJobTypeFilter({ filterType, onChangeJobType }: Props) {
  return (
    <FormControl variant="filled"  sx={{ ...inputStyle }}>
      
      <Select
        multiple
        displayEmpty
        value={filterType}
        onChange={onChangeJobType}
        MenuProps={MenuProps}
        startAdornment={
          <InputAdornment position="start"   >
          <Iconify
            icon={timeIcon}
            sx={{ width: 24, height: 24, color: 'text.disabled', flexShrink: 0, mr: 1 }}
          />
          </InputAdornment>}
        renderValue={(selected) => {
          
          if (selected.length === 0) {
            return placeholder;
          }
          return (
            <Typography variant="body2" component="span" >
              {selected.join(', ')}
            </Typography>
          );
          // sx={{
          //   ...(part.highlight && {
          //     fontWeight: 'fontWeightBold',
          //   }),
          
        }}
        
       
      >
        
        {JOB_TYPES.map((type) => (
          <MenuItem
            key={type}
            value={type}
            
            sx={{
              p: 1,
              my: 0.5,
              // width: { xs: 1, md: 160}, ORIGINAL
            }}
          >
            <Checkbox size="small" checked={filterType.includes(type)} />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
