import React from 'react';
//import {Container} from '@material-ui/core';
import {Card} from '../card/card-component'
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export const CardContainer = (props)=>{
    const classes = useStyles();

    return (
        // <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    props.personas.map(persona => <Card nombre={persona}/>)
                }
                
            </Grid>
        /* </div> */
    )
}