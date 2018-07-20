import React, { Component } from 'react';

import './App.css';


import City from './components/pageDescription';
import InputForm from './components/formsInfo';
import Coordinates from './components/coordinates';

const API_KEY ='a9b02ea436b34a61493e1400e6b200bf';

class App extends Component {

  state = {

  longitude :undefined,
  latitude :undefined,
      city :undefined,
    country :undefined,
      error:undefined

  }
  getCoordinates = async (value) => {
      value.preventDefault();
    const city = value.target.elements.city.value;
    const country = value.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}
        &appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
console.log(data);
     if(city && country){

       console.log(data);

       this.setState({
         city:data.name,
         country:data.sys.country,
         longitude:data.coord.lon,
         latitude:data.coord.lat,
         error:""
       });
     }
     else{
       this.setState({
         longitude:undefined,
         latitude :undefined,
         city :undefined,
         country :undefined,
         error:"Not a country or state/city/town, please enter an appropriate country and its state/town/city"

       });
     }
      }
  render() {
      return (

        <div>
          <City />
          <InputForm getCoordinates ={this.getCoordinates}/>
          <Coordinates
           latitude={this.state.latitude}
           longitude={this.state.longitude}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
           />
        </div>
    );
  }
};

export default App;
