import React, { Fragment } from 'react';
import moment from 'moment';

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

const TopEmployees = ({ employees, role, handleEmployeeAdded }) => {
  const classes = useStyles();

  const employeeList = employees.map((e) => {
    return (
      <TableRow key={e._id}>
        {/* <TableCell>
          <Avatar alt="Wes Bos" src="/avatar.png" />
        </TableCell> */}
        <TableCell>
          <Typography variant='subtitle1'>
            {e.firstName} {e.lastName}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant='subtitle1'>{e.teamId?.name}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant='subtitle1'>{e.role}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant='subtitle1'>
            {moment(e.createdAt).format('MMM DD, YYYY')}
          </Typography>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant='subtitle2' color='textSecondary'>
          Recent Employees
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              {/* <TableCell></TableCell> */}
              <TableCell>Employee</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Joining Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{employeeList}</TableBody>
        </Table>
        {role === 'business-owner' && (
          <EmployeeFormDialog
            handleEmployeeAdded={handleEmployeeAdded}
          ></EmployeeFormDialog>
        )}
      </Paper>
    </Fragment>
  );
};

export default TopEmployees;
