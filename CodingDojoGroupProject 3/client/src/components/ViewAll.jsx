import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewAll = (props) => {
    const navigate = useNavigate();
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/thriftshop')
            .then((res) => {
                setAllItems(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return(
        <div className='body'>
            <div className='title'><h1>Your Order</h1></div>
            <div className='main'>
                <nav className='topnav'>
                    <Link to={'/thriftshop/new'}>Add an Item</Link>
                    <Link to={"/thriftshop/viewall"}>View Your Cart</Link>
                    <Link to={'/'}>Back to Welcome Page</Link>
                </nav>
                <div>
                    <table>
                        <tbody>
                            {
                                allItems.map( (item) => {
                                    return (
                                        <tr key={item._id}>
                                            <td><img src="#" alt="item image" /></td>
                                            <td>{item.type}</td>
                                            <td>{item.color}</td>
                                            <td>{item.size}</td>
                                            <td>{item.condition}</td>
                                            <td>${item.price}</td>
                                            <td><Link to={`/thriftshop/${item._id}`}>View More Details</Link></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewAll;
