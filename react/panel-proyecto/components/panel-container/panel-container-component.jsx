import React from 'react';
import './panel-container-component.css';
import {SearchComponent} from '../search/search-component';
import AddUser from '../add-user/add-user-component';

export const PanelContainer = ()=>{
    return (
        <div className="panel-container">
            <AddUser/>
            <SearchComponent/>
        </div>
    )
}