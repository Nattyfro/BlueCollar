import { useState } from 'react';
// icons
import playIcon from '@iconify/icons-carbon/play';
import lockedIcon from '@iconify/icons-carbon/locked';
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronRight from '@iconify/icons-carbon/chevron-right';
import pauseOutline from '@iconify/icons-carbon/pause-outline';
// @mui
import { styled } from '@mui/material/styles';
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// @types
import { CourseLessonProp } from '../../../@types/e-learning';
// components
import { Iconify, PlayerWithButton } from '../../../components';

// ----------------------------------------------------------------------

const AccordionStyle = styled(Accordion)(({ theme }) => ({
  '&.Mui-expanded': {
    overflow: 'hidden',
    borderRadius: '8px !important',
    marginBottom: theme.spacing(2.5),
    boxShadow: theme.customShadows.z16,
  },
}));

const AccordionSummaryStyle = styled(AccordionSummary)(({ theme }) => ({
  '&.Mui-expanded': {
    minHeight: 'auto',
    backgroundColor: theme.palette.action.selected,
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(2, 0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    '&.Mui-expanded': { margin: theme.spacing(2, 0) },
  },
}));

// ----------------------------------------------------------------------

type Props = {
  lessons: CourseLessonProp[];
};

export default function ElearningCourseDetailsLessons({ lessons }: Props) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Lessons
      </Typography>

      {lessons?.map((lesson) => (
        <LessonItem
          key={lesson.id}
          lesson={lesson}
          selected={expanded === lesson.id}
          onChange={handleChangeExpanded(lesson.id)}
        />
      ))}
    </div>
  );
}

// ----------------------------------------------------------------------

type LessonItemProps = {
  lesson: CourseLessonProp;
  selected: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

function LessonItem({ lesson, selected, onChange }: LessonItemProps) {
  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  const { title, duration, description, isUnLock, videoPath } = lesson;

  return (
    <>
      <AccordionStyle expanded={selected} onChange={onChange} disabled={isUnLock}>
        <AccordionSummaryStyle>
          <Iconify
            icon={isUnLock ? lockedIcon : openVideo ? pauseOutline : playIcon}
            onClick={handleOpenVideo}
            sx={{
              mr: 2,
              width: 24,
              height: 24,
              ...(!isUnLock && { color: 'primary.main' }),
            }}
          />

          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <Typography variant="body3" sx={{ mr: 2 }}>
            {duration} m
          </Typography>

          <Iconify
            icon={selected ? chevronDown : chevronRight}
            sx={{
              color: 'text.secondary',
              width: 20,
              height: 20,
              ...(isUnLock && { color: 'text.disabled' }),
            }}
          />
        </AccordionSummaryStyle>

        <AccordionDetails sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </AccordionDetails>
      </AccordionStyle>

      <PlayerWithButton
        open={openVideo}
        onClose={handleCloseVideo}
        videoPath={videoPath}
        playing={false}
        controls
      />
    </>
  );
}
