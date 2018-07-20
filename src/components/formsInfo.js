import React, { Component } from 'react'

class InputForm extends Component{
render(){
  return(
    <form onSubmit = {this.props.getCoordinates}>
      <input type = "text" name ="city" placeholder ="Enter Town/City/State"/>
      <input type = "text" name ="country" placeholder ="Enter Country"/>
      <button>Get Coordinates</button>
    </form>

     );
   }
};
export default InputForm;
