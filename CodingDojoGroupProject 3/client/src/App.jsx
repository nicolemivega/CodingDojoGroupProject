import React from 'react';
import './App.css'
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import NewItem from './components/NewItem';
import ChangeItem from './components/ChangeItem';
import ViewOne from './components/ViewOne';
import Homepage from './views/Homepage';
import ViewAll from './components/ViewAll';



function App() {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/thriftshop")
      .then(res=> {
        console.log(res.data);
        setAllItems(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <BrowserRouter> 
      <header><h3>Thrift Shop</h3></header>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/thriftshop/viewall" element = {<ViewAll allItems = {allItems} setAllItems = {setAllItems}/>} />
        <Route path = "/thriftshop/new" element = {<NewItem allItems = {allItems} setAllItems = {setAllItems}/>}/>
        <Route path = "/thriftshop/:id/edit" element = {<ChangeItem allItems = {allItems} setAllItems = {setAllItems}/>}/>
        <Route path = "/thriftshop/:id/" element = {<ViewOne allItems = {allItems} setAllItems = {setAllItems}/>}/>
      </Routes>      
    </BrowserRouter>
  )
}

export default App;