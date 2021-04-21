
import './App.css';
import React,{Suspense} from 'react'
import Loader from './Loader'
//import Tags from './Tags'
const Tags=React.lazy(()=>import('./Tags')) 

//Change the network speed to test this
//Make it slow 3G (/public/capture.png)
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
      <Tags/>
      </Suspense>
    </div>
  );
}

export default App;
