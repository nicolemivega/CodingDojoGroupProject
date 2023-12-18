import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const ChangeItem = (props) => {
    const {allItems, setAllItems} = props;
    const navigate = useNavigate();
    const {id} = useParams();
    const [editItem, setEditItem] = useState({type: "", color: "", size: "", condition: "", description: "", price: "" });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/thriftshop/${id}`, editItem)
            .then(res => setEditItem(res.data))
            .catch(err => console.log(err))
    }, [])

    const editItemHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/thriftshop/${id}`, editItem)
        .then(res => {
            const updatedItems = [];
            allItems.map(item => {
                item._id === id ? updatedItems.push(res.data) : updatedItems.push(item)
            })
            setAllItems(updatedItems)
            navigate("/")
        })
    }

    return(
        <div>
            <Link to = "/">Go Back to Welcome Page</Link>
            <form onSubmit = {editItemHandler}>
                <div>
                    <label>Type of Item</label>
                    <select value = {editItem.type} onChange= {e => setEditItem
                    ({...editItem, type: e.target.value})}>
                        <option value = "select">Select</option>
                        <option value = "clothing">Clothing</option>
                        <option value = "Shoes">Shoes</option>
                        <option value = "Accessories">Accessories</option>
                    </select> 
                </div>
                <div>
                    <label>Color</label>
                    <input type = "text" value = {editItem.color} onChange={e => setEditItem
                    ({...editItem, color: e.target.value})}/>
                </div>
                <div>
                    <label>Size</label>
                    <input type = "text" value = {editItem.size} onChange= {e => setEditItem
                    ({...editItem, size: e.target.value})}/>                        
                </div>
                <div>
                    <label>Condition</label>
                    <select value = {editItem.condition} onChange= {e => setEditItem
                    ({...editItem, condition: e.target.value})}>
                        <option value = "select">Select</option>
                        <option value = "poor">Poor</option>
                        <option value = "fair">Fair</option>
                        <option value = "good">Good</option>
                        <option value = "new">Still with Tags</option>
                    </select> 
                </div>
                <div>
                    <label>Description of the Item</label>
                    <textarea value = {editItem.description} onChange= {e => setEditItem
                    ({...editItem, description: e.target.value})}></textarea>
                </div>
                <div>
                    <label>Price</label>
                    <input type = "number" value = {editItem.price} onChange={e => setEditItem
                    ({...editItem, price: e.target.value})}/>
                </div>
                <button>Update this Item!</button>
            </form>
        </div>
    )
}
export default ChangeItem;