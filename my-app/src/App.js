
import React from "react";

import useFetch from './useFetch';
import './App.css';
import Characters from "./Components/Characters";

function App() {
const url= 'https://friends-c7qz-3nb48uwi3-yasmingsdm.vercel.app/friendsData'
  const {data, loading, error} = useFetch(url)

  const {characters} = data

  return (
    <div>
      {loading && <p>Loading...</p>} 
      {error ? <p>{error}</p> : <Characters characters={characters}/>}
    </div>
  );
}

export default App;
