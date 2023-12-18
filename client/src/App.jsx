import './App.css'
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import NewItem from './components/NewItem';
import ChangeItem from './components/ChangeItem';
import ViewOne from './components/ViewOne';





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
      <Routes>
        <Route path = "/thriftshop/new" element = {<NewItem allItems = {allItems} setAllItems = {setAllItems}/>}/>
        <Route path = "/thriftshop/:id/edit" element = {<ChangeItem allItems = {allItems} setAllItems = {setAllItems}/>}/>
        <Route path = "/thriftshop/:id/" element = {<ViewOne allItems = {allItems} setAllItems = {setAllItems}/>}/>

      </Routes>      
    </BrowserRouter>
  )
}

export default App