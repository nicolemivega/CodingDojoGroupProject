import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const NewItem = (props) => {
    const {allItems, setAllItems} = props;
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const [newItem, setNewItem] = useState({type: "", color: "", size: "", condition: "", description: "", price: "" })

    const newItemHandler = (e) => {
        e.preventDefault();
        const createdItem = {...newItem}
        axios.post("http://localhost:8000/api/thriftshop/new", createdItem)
            .then(res => {
                setAllItems([...allItems, res.data]);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data.errors)
                const errArray = [];
                for(const key of Object.keys(err.response.data.errors)){
                    errArray.push(err.response.data.errors[key].message);
                }
                setErrors(errArray);
            });
    }


    return (
        <div>
            <div>
                <nav>
                    <Link to={'/thriftshop/viewall'}>Shop All Styles</Link>
                    <Link>View Your Cart</Link>
                    <Link to = "/">Back to the Welcome Page</Link>
                </nav>
            </div>
            <h1>Add an Item to Sell</h1>
            <p>Add your item to resell!</p>
            <form onSubmit={newItemHandler}>
                {
                    errors.map((err) => {
                        return(
                            <p key = {err} style = {{color: "red"}}>{err}</p>
                        )
                    })
                }
                <div>
                    <label>Type of Item</label>
                    <select value = {newItem.type} onChange= {e => setNewItem
                    ({...newItem, type: e.target.value})}>
                        <option value = "select">Select</option>
                        <option value = "clothing">Clothing</option>
                        <option value = "Shoes">Shoes</option>
                        <option value = "Accessories">Accessories</option>
                    </select> 
                </div>
                <div>
                    <label>Color</label>
                    <input type = "text" value = {newItem.color} onChange={e => setNewItem({...newItem, color: e.target.value})}/>
                </div>
                <div>
                    <label>Size</label>
                    <input type = "text" value = {newItem.size} onChange= {e => setNewItem({...newItem, size: e.target.value})}/>
                        
                </div>
                <div>
                    <label>Condition</label>
                    <select value = {newItem.condition} onChange= {e => setNewItem({...newItem, condition: e.target.value})}>
                        <option value = "select">Select</option>
                        <option value = "poor">Poor</option>
                        <option value = "fair">Fair</option>
                        <option value = "good">Good</option>
                        <option value = "new">Still with Tags</option>
                    </select> 
                </div>
                <div>
                    <label>Description of the Item</label>
                    <textarea value = {newItem.description} onChange= {e => setNewItem({...newItem, description: e.target.value})}></textarea>
                </div>
                <div>
                    <label>Price</label>
                    <input type = "number" value = {newItem.price} onChange={e => setNewItem({...newItem, price: e.target.value})}/>
                </div>
                <button>Sell this Item!</button>
            </form>
        </div>
    )
}

export default NewItem;