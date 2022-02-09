import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
import List from "../utils/List"
import axios from "axios";

const useStyles = makeStyles(() => ({
    marginTop: {
      marginTop: 20,
    },
  }));
  

function SelectTopByPlaytime() {
    const classes = useStyles();
    const [genre, setGenre] = useState('')
    const [platform, setPlatform] = useState('');
    const [data, setData] = useState([])

    useEffect(() => {
      return axios
        .get(`${process.env.REACT_APP_BASE_URL}/select_top_by_playtime`, {
          params: { genre, platform },
        })
        .then(({data}) => setData(data))
        .catch((err) => console.error(err));
    }, [genre, platform]);

  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="flex-end"
        alignItems="center"
        className={classes.marginTop}
      >
        <Grid item>
          <TextField
            label="Genre"
            type="search"
            variant="outlined"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Platform"
            type="search"
            variant="outlined"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          />
        </Grid>
      </Grid>
      <List data={data} />
    </>
  );
}

export default SelectTopByPlaytime
