import React, { Fragment } from 'react';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import RateReviewIcon from '@material-ui/icons/RateReview';
import useStyles from './ChipProjectStatusStyle';

const ChipProjectStatus = (props) => {
  const classes = useStyles();
  let chipIcon = null;

  switch (props.statusType) {
    case 'done':
      chipIcon = (
        <Chip
          icon={<DoneIcon className={classes.statusDoneIconColor} />}
          className={classes.statusDoneColor}
          label="Done"
        />
      );
      break;
    case 'in-review':
      chipIcon = (
        <Chip
          icon={<RateReviewIcon className={classes.statusInReviewIconColor} />}
          label="In Review"
          className={classes.statusInReviewColor}
        />
      );
      break;
    default:
      chipIcon = (
        <Chip icon={<AutorenewIcon />} label="In Progress" color="secondary" />
      );
      break;
  }
  return <Fragment>{chipIcon}</Fragment>;
};

export default ChipProjectStatus;
