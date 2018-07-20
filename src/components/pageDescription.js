import React, { Component } from 'react'

class City extends Component{
render(){//render method will return a block of jsx
  return(
    <div>
      <h1>STATE/CITY/TOWN OF THE WORLD AND THEIR COORDINATES</h1>
      <p>GET COORDINATES OF ALL STATE/CITY/TOWN IN ANY COUNTRY OF YOUR CHOICE</p>
    </div>

     );
   }
}
export default City;//in order for App.js to use this componenet,
                    //we've to first export this componenet and import this into App.js.
                    //In App.js, import placeName.js
