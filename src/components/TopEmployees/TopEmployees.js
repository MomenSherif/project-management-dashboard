import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';

import useStyles from './TopEmployeesStyle';
import ChipProjectStatus from '../ChipProjectStatus/ChipProjectStatus';
import TeamFormDialog from '../TeamFormDialog/TeamFormDialog';
import EmployeeFormDialog from '../EmployeeFormDialog.js/EmployeeFormDialog';

const TopEmployees = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="subtitle2" color="textSecondary">
          Top Employees
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Employee</TableCell>
              <TableCell>Tasks accomplished</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Avatar alt="Wes Bos" src="/avatar.png" />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Christina Adel</Typography>
              </TableCell>
              <TableCell>
                <LinearProgress
                  variant="determinate"
                  value={90}
                  className={classes.barLarge}
                  color="primary"
                ></LinearProgress>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Avatar alt="Wes Bos" src="/avatar.png" />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Mennatullah Sayed</Typography>
              </TableCell>
              <TableCell>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  className={classes.barLarge}
                ></LinearProgress>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Avatar alt="Wes Bos" src="/avatar.png" />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Cady Emad</Typography>
              </TableCell>
              <TableCell>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  className={classes.barLarge}
                ></LinearProgress>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <EmployeeFormDialog></EmployeeFormDialog>
      </Paper>
    </Fragment>
  );
};

export default TopEmployees;
