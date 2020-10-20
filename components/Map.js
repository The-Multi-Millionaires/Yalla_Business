// import React, { Component } from 'react';
// import LocationPicker from 'react-location-picker';

// /* Default position */
// const defaultPosition = {
//   lat: 27.9878,
//   lng: 86.9250
// };


// class LocationPickerExample extends Component {
//   constructor (props) {
//     super(props);

//     this.state = {
//       address: "Kala Pattar Ascent Trail, Khumjung 56000, Nepal",
//       position: {
//          lat: 0,
//          lng: 0
//       }
//     };

//     // Bind
//     this.handleLocationChange = this.handleLocationChange.bind(this);
//   }

//   handleLocationChange ({ position, address, places }) {

//     // Set new location
//     this.setState({ position, address });
//   }

//   render () {
//     return (
//       <div>
//         <h1>{this.state.address}</h1>
//         <div>
//           <LocationPicker
//             containerElement={ <div style={ {height: '100%'} } /> }
//             mapElement={ <div style={ {height: '400px'} } /> }
//             defaultPosition={defaultPosition}
//             onChange={this.handleLocationChange}
//           />
//         </div>
//       </div>
//     )
//   }
// }

// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSV1AmlA-ArhLJz9u0TXS8zQEXt5wmdAU&v=3.exp&libraries=geometry,drawing,places"></script>


// export default LocationPickerExample