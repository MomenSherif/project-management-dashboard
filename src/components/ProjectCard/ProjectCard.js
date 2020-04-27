import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Grid from '@material-ui/core/Grid';
import useStyles from './ProjectCardStyle';
import ChipProjectStatus from '../ChipProjectStatus/ChipProjectStatus';

const ProjectCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Project Management Project"
        subheader="Deadline: September 14, 2016"
      />
      <CardContent className={classes.cardContent}>
        <Grid container spacing={3} justify="space-between">
          <Grid item>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </Grid>
          <Grid item>
            <ChipProjectStatus statusType="in-review" />
          </Grid>
          <Grid item>
            <IconButton aria-label="share">
              <ArrowForwardOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
