import React, {useState, useEffect} from 'react';
import VerticalNav from './Components/VerticalNav'
import DoubleGrid from './Components/Grid'
import FluidImage from './Components/FluidImage'
import DonationTextContainer from './Components/DonationTextContainer'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  //const [apiResponse, setApiResponse] = useState('');

  return (
    <div>
      <div>
        <DoubleGrid/>
      </div>
    </div>

  );
}

export default App;
