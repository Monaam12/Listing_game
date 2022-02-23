import React, { useEffect, useState } from "react";
import List from "../utils/List";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Typography } from "@material-ui/core";
import { fetchData } from "../utils/fetchData";

const useStyles = makeStyles(() => ({
  marginTop: {
    marginTop: 20,
  },
}));

function SelectTopByPlayers() {
  const classes = useStyles();
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [data, setData] = useState([]);
  const [global, setGlobal] = useState("");
  const [datafilter, setDatafilter] = useState([]);

  useEffect(() => {
    return fetchData("select_top_by_players", genre, platform)
                .then(data => setData(data));
  }, [genre, platform]);

  useEffect(() => {
    const filter = data.filter((item) => {
      if (global) {
        return [...item.platforms, ...Object.values(item)].some((x) =>
          x.toString().toLowerCase().match(global.toLowerCase())
        );
      }
      return item;
    });
    setDatafilter(filter);
  }, [global, data]);

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
          <Typography variant="h5" component="h2">
            Top games by number of players
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Global"
            type="search"
            variant="outlined"
            value={global}
            onChange={(e) => setGlobal(e.target.value)}
          />
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
      <List data={datafilter} playtime={false} />
    </>
  );
}

export default SelectTopByPlayers;
