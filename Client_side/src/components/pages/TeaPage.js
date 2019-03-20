import React, { Component } from 'react';
import axios from 'axios';
import TeaItem from '../Item/TeaItem';
import Navbar from '../nav/Navbar';

class TeaPage extends Component{

state = {

      recipes: [],
      search: ''
      
}

  componentDidMount(){
    this.getrecipes();
  }

   getrecipes(){
    axios.get('http://localhost:3000/api/tea')
      .then(response => {

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

        <TeaItem 
          recipes = {this.state.recipes}
          search={this.state.search}/>
  
      </div>
        
      )
  }

}

export default TeaPage;

