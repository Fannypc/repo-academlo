import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import './card-component.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
  }));

export const Card = (props)=>{
    const classes = useStyles();

    return (
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.orange}>N</Avatar>
                    <h2>{props.nombre}</h2>
                    <p>Correo electrónico</p>
                    <DeleteIcon />
                </Paper>
            </Grid>
    )
}