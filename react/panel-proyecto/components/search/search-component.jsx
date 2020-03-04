import React from 'react';
import {TextField} from '@material-ui/core';

export const SearchComponent = ()=>{
    return (
        <div>
            <form>
                <TextField id="outlined-search" 
                label="Buscar" 
                type="Search"
                variant="outlined" />
            </form>
        </div>
    )
}