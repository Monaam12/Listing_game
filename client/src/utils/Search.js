import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  marginTop: {
    marginTop: 20,
  },
}));

function Search() {
  const classes = useStyles();
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  
  return (
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
  );
}

export default Search;
