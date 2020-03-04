import React, {Component} from 'react';
import './App.css';
import {Container} from '@material-ui/core';
import {PanelContainer} from './components/panel-container/panel-container-component';
import {CardContainer} from './components/card-container/card-container-component';
import {Header} from './components/header/header-component';


class App extends Component{
  constructor(){
    super();
    this.state={
      personas: [
        "Rodrigo", "Juan", "Marcos"
      ],
    }

  }
  render(){
    return(
      <Container maxWidth="lg">
          <Header/>
          <PanelContainer/>
          <CardContainer personas={this.state.personas}/>
      </Container>
    )
  }
}

export default App;
