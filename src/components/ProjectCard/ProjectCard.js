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
import Tooltip from '@material-ui/core/Tooltip';

import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { title, description, state } = project;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label={title} className={classes.avatar}>
            {title.charAt(0)}
          </Avatar>
        }
        title={title}
        subheader={new Date().toDateString()}
      />
      <CardContent className={classes.cardContent}>
        <Grid container spacing={1} justify="space-between">
          <Grid item xs={12}>
            <Typography variant="subtitle1" component="p" gutterBottom>
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <ChipProjectStatus statusType={state} />
          </Grid>
          <Grid item>
            <Link to={`/project-details/${project._id}`}>
              <Tooltip title="More Details" aria-label="More Details">
                <IconButton aria-label="share">
                  <ArrowForwardOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
