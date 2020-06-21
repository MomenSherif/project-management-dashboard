import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import cx from 'clsx';

import useStyles from './MemberCardStyle';
import { Link } from 'react-router-dom';

const MemberCard = ({ member }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Card
        className={cx(classes.root, classes.flex, classes.cardmargin)}
        elevation={2}
      >
        <CardHeader
          avatar={
            <Avatar
              alt="team member"
              variant="square"
              className={classes.avatar}
            >
              {member.firstName.charAt(0).toUpperCase() +
                member.lastName.charAt(0).toUpperCase()}
            </Avatar>
          }
        />
        <CardContent>
          <Typography
            variant="h6"
            component={Link}
            to={`/profile/${member._id}`}
            className={classes.link}
          >
            {member.firstName + ' ' + member.lastName}
          </Typography>
          <Typography className={classes.mb} color="textSecondary">
            {member.role}
          </Typography>
          <Typography variant="body2" component="p">
            {member.phoneNumber}
            <br />
            {member.email}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MemberCard;
