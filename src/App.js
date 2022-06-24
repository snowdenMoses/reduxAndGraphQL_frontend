import React, { useEffect, useState } from 'react';
import './App.css';
import {useSelector,useDispatch} from "react-redux"


import {fetchBooks} from './redux/actions'

function App() {
// const getBooks = useSelector(state=>state.books)
const dispatch = useDispatch()



useEffect(()=>{

  const getData = async()=>{
    const fetchedResult = await fetch("http://localhost:4000/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        query:`
        query {
          getBooks {
          name,
          author,
          pages
          }
        }
        `
      })
    })
    const result = await fetchedResult.json()
   
    const data = await result.data.getBooks
   dispatch(fetchBooks(data))
  }

  getData()
  
  
  

 
},[dispatch])


const retrieveBooks = useSelector(state=>state.books)
if (!retrieveBooks) return

  return (
    <div className="App">
      {retrieveBooks.map(item=>{
        return( <div>{item.name}</div>)
      })}
    </div>
  );
  
}

export default App;
