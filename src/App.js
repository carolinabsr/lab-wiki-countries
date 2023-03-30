import './App.css';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import CountriesList from './components/CountriesList'
import countriesData from './countries.json'
import {useState} from 'react'

function App() {
    const [countries, setCountries] = useState (countriesData)
  return (

    <div className="App">

        <Navbar/>
        <CountriesList countries = {countries}/>
      

    </div>

  );
}

export default App;
