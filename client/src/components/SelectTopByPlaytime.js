import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Typography } from "@material-ui/core";
import List from "../utils/List";
import { fetchData } from "../utils/fetchData";

const useStyles = makeStyles(() => ({
  marginTop: {
    marginTop: 20,
  },
}));

function SelectTopByPlaytime() {
  const classes = useStyles();
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    return fetchData("select_top_by_playtime", genre, platform)
        .then((data) => setData(data));
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
        <Grid item xs={6}>
          <Typography variant="h5" component="h2">
            Top games by playtime
          </Typography>
        </Grid>
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
      <List data={data} playtime={true} />
    </>
  );
}

export default SelectTopByPlaytime;
