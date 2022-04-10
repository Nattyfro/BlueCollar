// import * as Yup from 'yup';
//import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup/dist/yup';


import { fCurrency } from '../../../utils/formatNumber';
import {
  Stack,
  Slider as MUISlider,
  Radio,
  Collapse,
  RadioGroup,
  FormControlLabel,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';
// _data
import { _paymentMethods } from '../../../../_data/mock';
// components
import { Image, Iconify } from '../../../components';
//
import CheckoutNewCardForm from '../../checkout/CheckoutNewCardForm';
import checkmarkOutline from '@iconify/icons-carbon/checkmark-outline';
import { styled } from '@mui/material/styles';
import {OptionStyleProps} from '../../../@types/career/Form'



//---------------------Consts from CheckoutMethods.tsx----------------------------------

  const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  }));


const OptionStyle = styled(Paper, {
    shouldForwardProp: (prop) => prop !== 'hasChildrenHourly' && prop !== 'selected' && prop !== 'hasChildrenMonthly' && prop !== 'hasChildrenAnnually',
  })<OptionStyleProps>(({hasChildrenHourly, hasChildrenMonthly, hasChildrenAnnually, selected, theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2),
    transition: theme.transitions.create('box-shadow'),
    border: `solid 1px ${theme.palette.divider}`,
    borderRadius: Number(theme.shape.borderRadius) * 1.25,
    ...(hasChildrenHourly && {
      flexWrap: 'wrap',
    }),
    ...(hasChildrenMonthly && {
      flexWrap: 'wrap',
    }),
    ...(hasChildrenAnnually && {
      flexWrap: 'wrap',
    }),
    
    ...(selected && {
      boxShadow: theme.customShadows.z24,
    }),
  }));




// -----------------------------MYLES CheckoutMethods-----------------------------------------



  
  export default function CareerDesiredSalary (){



              


const [show, setShow] = useState(false);

const [method, setMethod] = useState('');

const handleCollapseOut = () => {
  setShow(false);
};

const handleChangeMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (method === 'hourly') {
    setShow(false);
  }
  setMethod((event.target as HTMLInputElement).value);
};




// ----------------------------- Beginning-----------------------------------------





return (



              

  <RootStyle>

            <RadioGroup value={method} onChange={handleChangeMethod}>

            <Stack spacing={2.5}>
          {_paymentMethods.map((option) => {
            const { value, label, icons } = option;
            const hasChildrenHourly = value === 'hourly';
            const hasChildrenMonthly = value === 'monthly';
            const hasChildrenAnnually = value === 'annually';
            const isSelected = method === value;

            return (
              
              <OptionStyle
              key={label}
              hasChildrenHourly={hasChildrenHourly} 
               hasChildrenMonthly={hasChildrenMonthly} 
               hasChildrenAnnually={hasChildrenAnnually} 
               selected={isSelected}>


                <FormControlLabel
                  value={value}
                  control={<Radio checkedIcon={<Iconify icon={checkmarkOutline} />} />}
                  label={<Typography variant="body2">{label}</Typography>}
                  sx={{ py: 3, mx: 0 }}
                />

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ position: 'absolute', top: 32, right: 16 }}
                >
                  {icons.map((icon) => (
                    <Image key={icon} alt="duration" src={icon} sx={{ height: 36, width: 71 }} />
                  ))}
                </Stack>


                {isSelected && hasChildrenHourly && ( // Hourly
                  <>

                  
                  
                    <MUISlider
                    sx={{ mb: 3, mt:2 }} 
                    valueLabelDisplay="on"
                    min={6.50}
                    max={35}
                    step={0.25}
                    valueLabelFormat={(value) => fCurrency(value)}
                    />
                      

                      

                    <Collapse in={show} sx={{ width: 1 }}>
                      <CheckoutNewCardForm onCancel={handleCollapseOut} />
                    </Collapse>
                    
                  </>
                )}

                  {isSelected && hasChildrenMonthly && ( // Monthly
                    <>
                    
                    <MUISlider
                    sx={{ mb: 3, mt:2 }} 
                    valueLabelDisplay="on"
                    min={1080}
                    max={6000}
                    step={10}
                    valueLabelFormat={(value) => fCurrency(value)}
                    />
                        

                        

                      <Collapse in={show} sx={{ width: 1 }}>
                        <CheckoutNewCardForm onCancel={handleCollapseOut} />
                      </Collapse>
                    </>
                  )}


                  
                

                {isSelected && hasChildrenAnnually && ( // Annually
                  <>

                  
                  
                    <MUISlider
                    sx={{ mb: 3, mt:2 }} 
                    valueLabelDisplay="on"
                    min={14200}
                    max={70000}
                    step={100}
                    valueLabelFormat={(value) => fCurrency(value)}
                    />
                      

                      

                    <Collapse in={show} sx={{ width: 1 }}>
                      <CheckoutNewCardForm onCancel={handleCollapseOut} />
                    </Collapse>
                    
                  </>
                )}

                






              </OptionStyle>
            
          )})}
        </Stack>
        </RadioGroup>
        </RootStyle>
        );
        }
        
        