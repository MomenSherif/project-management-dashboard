import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './ProjectDetailsCardStyle';

const ProjectDetailsCard = ({ children, title, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainSec}>
      <Card className={(classes.root, classes.mainCard)}>
        <CardContent>
          {children}
          <Typography
            className={classes.title}
            variant='h4'
            //   color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant='subtitle1' className={classes.desc}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetailsCard;
