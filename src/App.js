import React,{useEffect, useState} from 'react'

const App = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=10000').then(
    response=>response.json()
  ).then (json=> setData(json.coins))
  },[])
  return (
    <div>

    {data.map(coins => <li key={coins.id}>{coins.price}</li>)}

    </div>
  )
}

export default App;

   