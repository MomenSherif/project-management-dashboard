import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import cx from 'clsx';

import useStyles from './ProjectItemStyle';

const ProjectItem = () => {
  const classes = useStyles();
  return (
    <Box
      className={cx(classes.flexCol, classes.mr, classes.box)}
      borderRadius={8}
    >
      <div className={classes.flexCol}>
        <Typography className={classes.mr} varient='body1'>
          Project title
        </Typography>
        <Typography
          varient='body2'
          color='textSecondary'
          className={classes.mr}
        >
          organization
        </Typography>
      </div>
      <div className={classes.flexCol}>
        <Typography
          varient='subtitle2'
          color='secondary'
          className={classes.mr}
        >
          In Progress
        </Typography>
        <Button
          variant='contained'
          size='small'
          color='primary'
          className={cx(classes.margin, classes.btn)}
        >
          View
        </Button>
      </div>
    </Box>
  );
};

export default ProjectItem;
