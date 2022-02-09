import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function List({ data, playtime }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Game</TableCell>
            <TableCell align="center">Genre</TableCell>
            <TableCell align="center">Platforms</TableCell>
            <TableCell align="center">{playtime ? 'Total Play Time' : 'Number Of Players'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">{row.game}</TableCell>
              <TableCell align="center">{row.genre}</TableCell>
              <TableCell align="center">{row.platforms.join(", ")}</TableCell>
              <TableCell align="center">{playtime ? row.playTime : row.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
