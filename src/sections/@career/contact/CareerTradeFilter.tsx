import { useState } from 'react';
// @mui
import { Stack, Box } from '@mui/material';
// components
import DropDown from './DropDown';
import Age from './Age';
import PostCode from './postCode';


// ----------------------------------------------------------------------

const defaultValues = {
  filterCategories: null,
  filterSalary: [0],
};

type AgeProps = {
  filterCategories: string | null;
  filterSalary: number[];
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

  // const onReset = () => {
  //   setFilters(defaultValues);
  // };

  // const onSubmit = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   alert(JSON.stringify(filters, null, 2));
  //   onReset();
  // };

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

        <PostCode 
          filterSalary={filters.filterSalary}
          onChangeSalary={handleChangeAge}
        />

      </Stack>


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
