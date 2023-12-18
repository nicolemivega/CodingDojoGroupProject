import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const ViewOne = (props) => {
    const {allItems, setAllItems} = props;
    const {id} = useParams();
    const [oneItem, setOneItem] = useState({type: "", color: "", size: "", condition: "", description: "", price: ""});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/thriftshop/${id}`)
            .then(res => setOneItem(res.data))
            //.catch(err = console.log(err))
    }, [id])

    const deleteItemHandler = e => {
        axios.delete(`http://localhost:8000/api/thriftshop/${id}`)
            .then(res => {
                const filteredItems = allItems.filter(item => item._id !== id)
                setAllItems(filteredItems);
                navigate("/")
            })
    }

    return(
        <div>
            <Link to = "/">Back to Welcome Page</Link>
            <h3>Details about your selected {oneItem.type}</h3>
            <p>Color: {oneItem.color}</p>
            <p>Size: {oneItem.size}</p>
            <p>Condition: {oneItem.condition}</p>
            <p>Description: {oneItem.description}</p>
            <p>Price: ${oneItem.price}</p>
            <button onClick = {deleteItemHandler}>Add to Cart</button>
        </div>
    );
}

export default ViewOne;