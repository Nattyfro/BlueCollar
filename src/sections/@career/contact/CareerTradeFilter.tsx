import { useState } from 'react';
// @mui
import { Stack, Box } from '@mui/material';
import { JobFiltersProps } from '../../../@types/career';
// components
import DropDown from './DropDown';
import Age from './Age';


// ----------------------------------------------------------------------

const defaultValues = {
  filterKeyword: null,
  filterCategories: null,
  filterLocation: null,
  filterType: [],
  filterLevel: [],
  filterBenefits: [],
  filterSalary: [0],
};

export default function CareerTradeFilter() {

  const [filters, setFilters] = useState<JobFiltersProps>(defaultValues);


  const handleChangeCategory = (keyword: string | null) => {
    setFilters({
      ...filters,
      filterCategories: keyword,
    });
  };

  const handleChangeSalary = (event: Event, newValue:number[]) => {
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
      <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} alignItems="center">
        

        <DropDown
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />
        
      </Stack>

      <Age 
          filterSalary={filters.filterSalary}
          onChangeSalary={handleChangeSalary}
        />

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
