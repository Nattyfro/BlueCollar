// icons
// import closeIcon from '@iconify/icons-carbon/close';
// import settingsAdjust from '@iconify/icons-carbon/settings-adjust';
// @mui
import { alpha, styled } from '@mui/material/styles';
// import { Tooltip } from '@mui/material';
//
import Iconify from '../Iconify';
// import { IconButtonAnimate } from '../animate';
// import { Typography } from '@mui/material';
// import data from '@iconify/icons-carbon/user-avatar-filled-alt';
import launchIcon from '@iconify/icons-carbon/launch';

import { Button } from '@mui/material';
import NextLink from 'next/link';
import Routes from '../../routes';




// ----------------------------------------------------------------------

const zIndex = 1999;

const ToggleButtonStyle = styled('div')(({ theme }) => {
  const isLight = theme.palette.mode === 'dark';

  return {
    right: 32,
    bottom: 30,
    position: 'fixed',
    zIndex: zIndex - 1,
    borderRadius: '50%',
    // padding: theme.spacing(0.5),
    // backgroundColor: theme.palette.background.paper,
    boxShadow: `-12px 12px 32px -4px ${alpha(
      isLight ? theme.palette.grey[500] : theme.palette.common.black,
      0.8
    )}`,
  };
});

const BadgeStyle = styled('div')(({ theme }) => ({
  top: 8,
  right: 10,
  width: 8,
  height: 8,
  borderRadius: '50%',
  position: 'absolute',
  backgroundColor: theme.palette.error.main,
}));

// ----------------------------------------------------------------------

type Props = {
  notDefault: boolean;
  isOpen: boolean;
  onToggle: VoidFunction;
};

export default function ToggleButtonSetting({ isOpen, notDefault }: Props) {
  return (
    <ToggleButtonStyle>
      {notDefault && !isOpen && <BadgeStyle />}
      <NextLink href={Routes.career.landing}>
      <Button
              size="large"
              variant="contained"
              color='inherit'
              endIcon={<Iconify sx={{mr:0.5}} icon={launchIcon} />}
              sx={{p:1.5}}
              // target="_blank"
              // rel="noopener"
              // href={Routes.figmaPreview}
            >
              Employers site
            </Button>
          </NextLink>
    </ToggleButtonStyle>
  );
}
