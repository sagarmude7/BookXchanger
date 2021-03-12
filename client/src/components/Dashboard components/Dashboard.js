import React, { Component } from 'react';
import { render } from 'react-dom';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selection : 1
    };
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(event, index, value) {
    //set selection to the value selected
    this.setState({ selection : value });

  }

  pageControl(){
    if( this.state.selection == 1){
      return (
        <div>Hello</div>
      );
    } else if( this.state.selection == 2) {
      return (
        <div>Hola</div>
      );
    } else if( this.state.selection == 3) {
      return (
        <div>Bonjour</div>
      );
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar
            title="My App"
            style={
              { 
                background:"#ffb400" //hex color values (yellow)
              }
            }
            titleStyle = {
              {
                color:"#FFFFF" //color of text (black)
              }
            }
            showMenuIconButton={false}
         />
         <DropDownMenu 
          value={this.state.selection} 
          onChange={this.handleChange}   
         >
          <MenuItem value={1} primaryText="English"  />
          <MenuItem value={2} primaryText="Spanish" />
          <MenuItem value={3} primaryText="French" />

        </DropDownMenu>
        <br/><br/><br/>
        <center>
        {this.pageControl()}
        </center>
        </MuiThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
