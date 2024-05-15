import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import RouteList from './RouterList';
import NavBar from './NavBar';
import './App.css';


function App() {
  const [dogs, setDogs] = useState({data: null, isLoading: true})

  useEffect(()=>{
    async function loadDogs(){
      const res = await axios.get('http://localhost:5001/dogs')
      setDogs({dogs: res.data, isLoading: false})
    }
    loadDogs()
  }, [])
  if (dogs.isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div className='container'>
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
