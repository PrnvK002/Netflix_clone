import React from 'react'
import './App.css'
import NavBar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { ORIGINALS , ACTION , COMEDY , HORROR , ROMANCE , DOCUMENTARIES } from "./Constants/constants";


function App() {


  
    

  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title='Netflix Originals' url = {ORIGINALS} />
        <RowPost title='Action' url = {ACTION} isSmall />
        <RowPost title='Comedy' url = {COMEDY} isSmall />
        <RowPost title='Horror' url = {HORROR} isSmall />
        <RowPost title='Romance' url = {ROMANCE} isSmall />
        <RowPost title='Documentaries' url = {DOCUMENTARIES} isSmall />

    </div>
  );
}

export default App;
