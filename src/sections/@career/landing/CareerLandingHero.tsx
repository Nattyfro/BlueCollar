import { useState } from 'react';
// icons
import searchIcon from '@iconify/icons-carbon/search';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Container, Box, Grid, Divider, Button } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
import { fShortenNumber } from '../../../utils/formatNumber';
// @types
import { CitiesProps } from '../../../@types/map';
import { JobFiltersProps } from '../../../@types/career';
// utils
import { _brands } from '../../../../_data/mock';
// assets
import { CareerHeroIllustration } from '../../../assets';
// components
import { Iconify, SvgIconStyle } from '../../../components';
//
import { CareerJobKeywordFilter, CareerJobLocationsFilter } from '../filters';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  ...cssStyles(theme).bgImage(),
  overflow: 'hidden',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(15),
  },
}));

const BarStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  '& .MuiAutocomplete-root': {
    '& .MuiFilledInput-root': {
      height: '48px !important',
      backgroundColor: 'transparent !important',
    },
  },
  '& .MuiAutocomplete-endAdornment': {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

// ----------------------------------------------------------------------

type FiltersProps = Pick<JobFiltersProps, 'filterKeyword' | 'filterLocation'>;

export default function CareerLandingHero() {
  const [filters, setFilters] = useState<FiltersProps>({
    filterKeyword: null,
    filterLocation: null,
  });

  const handleChangeKeyword = (keyword: string | null) => {
    setFilters({
      ...filters,
      filterKeyword: keyword,
    });
  };

  const handleChangeLocation = (keyword: CitiesProps | null) => {
    setFilters({
      ...filters,
      filterLocation: keyword,
    });
  };

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={6} lg={5}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h1" sx={{ color: 'common.white' }}>
                  Ready to{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    Recruit
                  </Box>{' '}
                  Talent?
                </Typography>
                <Typography sx={{ color: 'grey.500' }}>
                We provide you with a comprehensive list of potential prospects in the construction industry.
                </Typography>
              </Stack>

              <BarStyle spacing={{ xs: 1, md: 0 }}>
                <CareerJobKeywordFilter
                  filterKeyword={filters.filterKeyword}
                  onChangeKeyword={handleChangeKeyword}
                />
                <Divider
                  orientation="vertical"
                  sx={{
                    height: 24,
                    display: { xs: 'none', md: 'block' },
                  }}
                />
                <CareerJobLocationsFilter
                  filterLocation={filters.filterLocation}
                  onChangeLocation={handleChangeLocation}
                />
                <Button
                  href='jobs'
                  size="large"
                  variant="contained"
                  sx={{
                    px: 0,
                    minWidth: { xs: 1, md: 48 },
                  }}
                >
                  <Iconify icon={searchIcon} sx={{ width: 24, height: 24 }} />
                </Button>
              </BarStyle>

              <BrandsSection />
              <SummarySection />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <CareerHeroIllustration />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

const DividerStyle = <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />;

function BrandsSection() {
  return (
    <Stack
      flexWrap="wrap"
      direction={{ md: 'row' }}
      alignItems={{ md: 'center' }}
      sx={{ pt: { sm: 1 , md: 1 } }}
      // sx={{ pt: { md: 1 } }} MYLES this is the original
    >
      {_brands.slice(0, 4).map((brand) => ( // this is basically telling me the size of the logos
        <Box
          key={brand.id}
          sx={{
            lineHeight: 0,
            my: { xs: 1.5, md: 0.5 },
            mr: { md: 3 },
            width: { xs: 0.5, md: 'auto' },
            '&:last-of-type': {
              mr: 0,
            },
          }}
        >
          <SvgIconStyle  // this is the actual svg
            src={brand.image}
            sx={{
              width: 98,
              height: 37,
              opacity: 0.8,
              color: 'grey.500',
            }}
          />
        </Box>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

function SummarySection() {
  return (
    <Stack
      spacing={3}
      direction={{ xs: 'column', md: 'row' }}
      divider={DividerStyle}
      sx={{ pt: { md: 5 } }}
    >
      <Stack spacing={{ md: 3 }} direction="row" divider={DividerStyle}>
        {SummaryItem(8000, 'Followers')}
        {SummaryItem(150, 'Hires')}
      </Stack>
      <Stack spacing={{ md: 3 }} direction="row" divider={DividerStyle}>
        {SummaryItem(650, 'Negotiations')}
        {SummaryItem(156000, 'Page Views')}
      </Stack>
    </Stack>
  );
}

function SummaryItem(total: number, label: string) {
  return (
    <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
      <Typography variant="h4">{fShortenNumber(total)}+</Typography>
      <Typography variant="body2" sx={{ opacity: 0.48 }}>
        {label}
      </Typography>
    </Stack>
  );
}
