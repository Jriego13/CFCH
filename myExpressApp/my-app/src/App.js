import React from 'react';
import FluidImage from './FluidImage';
import logo from './logo.svg';
import './App.css';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function clicked(e){
  console.log("suck mike hawk");
}

function App(props) {

  return(
    <div className="background">
      <div className="Image">
       <FluidImage src="/images/houselogo.png" id="CornerImage"/>
       <div id="Title"><p><strong>St. Francis House Gainesville</strong></p></div>
       <div id ="Subtitle"><p><em>-transitions to end homelessness</em> </p></div>
      </div>
    </div>
  );
}  

export default App;

// return(
//   <div className="Welcome">
//       <header className="Header">
//           <img src="/Users/jonathanriego/Desktop/CFCH/myExpressApp/my-app/src/images/house image.jpg" class="ui fluid image" />            
//       </header>
//   </div>
// );
// }

// export default App;
