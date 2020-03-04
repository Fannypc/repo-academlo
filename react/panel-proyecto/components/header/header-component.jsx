import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import './header-component.css';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export const Header = ()=>{
    const classes = useStyles();

    return (
        <div className="header-style">
            <h4>ACADEMLO</h4>
            <h1>Panels de Usuarios</h1>
            <div className={classes.root}>
            <Button variant="outlined">INICIAR SESIÓN</Button>
            </div>
        </div>
    )
}