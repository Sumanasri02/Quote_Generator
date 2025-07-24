// import React from 'react';
// // actual react component --> UI/ logic
// class App extends React.Component { //class comp APP 
//   render() {
//     //
//     return <h1>Hello {this.props.name}</h1>;
//   }
// }

// export default App; // avaiable for other files to use

//state 
import React from "react";
class Counter extends React.Component{
  constructor(){
    super();
      this.state = {
        count:0
      }
    
  }
  updateCount = () => {
    this.setState(prevState => ({count : prevState.count + 1}));
  };

  render() {
    return(
      <button onClick={this.updateCount}>
        Clicked {this.state.count} times
      </button>
    );
  }
}
export default Counter;