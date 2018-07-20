import React, { Component } from 'react'

class Coordinates extends Component{
render(){//render method will return a block of jsx
  return(
    <div>
      {this.props.country && <p>Country:{this.props.country}</p>}
      {this.props.city && <p>Town/City/State:{this.props.city}</p>}
    {this.props.longitude && <p>Longitude:{this.props.longitude}</p>}
          {this.props.latitude && <p>Latitude:{this.props.latitude}</p>}
    {this.props.error && <p>{this.props.error}</p>}
      </div>

     );
   }
};
export default Coordinates;
