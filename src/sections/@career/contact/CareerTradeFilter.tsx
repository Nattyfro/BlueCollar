import { useState } from 'react';
// @mui
import { Stack, Box, Button} from '@mui/material';
// components
import DropDown from './DropDown';
import Age from './Age';
import CareerPostCode from './CareerPostCode';


// ----------------------------------------------------------------------

const defaultValues = {
  filterCategories: null,
  filterSalary: [0],
  filterPostCode: '',
};
type AgeProps = {
  filterCategories: string | null;
  filterSalary: number[];
  filterPostCode: string;
};

export default function CareerTradeFilter() {

  const [filters, setFilters] = useState<AgeProps>(defaultValues);



  const handleChangeCategory = (keyword: string | null) => {
    setFilters({
      ...filters,
      filterCategories: keyword,
    });
  };

  const handleChangeAge = (event: Event, newValue:number | number[]) => {
    setFilters({
      ...filters,
      filterSalary: newValue as number[],
    });
  };
  const handleChangePostCode = (event: Event, newValue:string) => {setFilters({
      ...filters,
       filterPostCode: newValue as string,
      
    });
  };


  const onReset = () => {
    setFilters(defaultValues);
  };

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(filters, null, 2));
    onReset();
  };


  //---------------------------------------QUINCY ------------------------------------------------------------------------
                                  {/* const renderFilters = (
                                  <>
                                    <Stack spacing={2.5} sx={{ py: 2, width: 1 }} direction={{ xs: 'column', md: 'row' }}>
                                      <DropDown
                                        filterCategories={filters.filterCategories}
                                        onChangeCategory={handleChangeCategory}
                                      />  */}

  const renderFilters = (
    <>
      <Stack spacing={2.5} sx={{ py: 2, width: 1 }} direction={{ xs: 'column', md: 'row' }} >
        

        <DropDown
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />
        
      </Stack>

      <Stack>

        <Age 
          filterSalary={filters.filterSalary}
          onChangeSalary={handleChangeAge}
        />

      </Stack>

      <Stack>

        <CareerPostCode
          filterPostCode={filters.filterPostCode}
          onChangePostCode={ handleChangePostCode as any }
        />

      </Stack>

            <Button
              size="large"
              variant="outlined"
              color="inherit"
              onClick={onSubmit}
              sx= {{mr:1, my:3}}
              
              
            >
              Submit
            </Button>


            <Button
              size="large"
              variant="outlined"
              color="inherit"
              onClick={onReset}
              sx= {{mr:1, my:3}}
              
              
            >
              Reset
            </Button>

    </>
  );

  return (
    <>
      {/* -- Desktop -- */}
      <Box
      >
        {renderFilters}
      </Box>
    </>
  );
}
