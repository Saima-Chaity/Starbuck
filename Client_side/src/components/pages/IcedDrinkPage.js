import React, { Component } from 'react';
import axios from 'axios';
import IcedDrinkItem from '../Item/IcedDrinkItem';
import Navbar from '../nav/Navbar';
import { Segment, Image, Loader, Dimmer } from 'semantic-ui-react';

class IcedDrinkPage extends Component{

state = {
  recipes: [],
  search: '',
  loading: true,   
}

componentDidMount(){
    this.getrecipes();
  }

   getrecipes(){
    axios.get('https://recipeappinreactnode.azurewebsites.net/api/icedDrink')
      .then(response => {
        this.setState({loading: false});
        this.setState({recipes: response.data})
    })
    .catch(err => console.log(err));
        
  }

  filterUpdate(value) {
    this.setState({
      search: value
    });
  }


  render(){
    return(
      <div>
       
        <Navbar
         search={this.state.search}
         filterUpdate = {this.filterUpdate.bind(this)}

       />

      {this.state.loading ? 
        (<Segment>
          <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
          </Dimmer>
    
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>)
        :  
        (<IcedDrinkItem 
          recipes = {this.state.recipes}
          search={this.state.search}/>)
      }
   
      </div>
        
      )
  }

}

export default IcedDrinkPage;

