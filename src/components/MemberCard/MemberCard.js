import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import cx from 'clsx';

import useStyles from './MemberCardStyle';

const MemberCard = () => {
  const classes = useStyles();
  return (
    <Grid item>
      <Card
        className={cx(classes.root, classes.flex, classes.cardmargin)}
        elevation={2}
      >
        <CardHeader
          avatar={
            <Avatar alt='Wes Bos' src='/avatar.png' className={classes.large} />
          }
        />
        <CardContent>
          <Typography variant='h5' component='h2'>
            Cady Emad
          </Typography>
          <Typography className={classes.mb} color='textSecondary'>
            Frontend Developer
          </Typography>
          <Typography variant='body3' component='p'>
            020-123-456-567
            <br />
            cady.emad@hotmail.com
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MemberCard;
