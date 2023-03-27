
import React from "react";

import useFetch from './useFetch';
import './App.css';

function App() {
const url= 'http://localhost:3001/friendsData'
const anotherApi = 'https://jsonplaceholder.typicode.com/comments'
  const {data, loading, error} = useFetch(url)

  

  return (
    <div>
      {loading && <p>Loading...</p>} 
      {error ? <p>{error}</p> : console.log(data)}
    </div>
  );
}

export default App;
