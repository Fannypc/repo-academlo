import React from 'react';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function AddUser(){
    const classes = useStyles();

    return (
        <div>
            <form>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                      <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<AddIcon />}
                        >
                            AGREGAR
                        </Button>
            </form>
        </div>
    )
}
