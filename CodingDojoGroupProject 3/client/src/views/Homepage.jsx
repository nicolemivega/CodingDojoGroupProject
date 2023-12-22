import React from "react";
import { Link } from "react-router-dom";

function Homepage() {

    return (
        <div className="welcbody">
            <nav className='topnav'>
                    <Link to={'/thriftshop/new'}>Add an Item</Link>
                    <Link to={'/thriftshop/viewall'}>View Your Cart</Link>
                    <Link to = "/">Back to the Welcome Page</Link>
            </nav>
            <div className='welctitle'><h1>Welcome to Clothing Consignment!</h1>
            <h3>Shop our styles or add an item of your own to resell!</h3></div>
            <div className='main'>
            
            <div>
                <button><Link to={'/thriftshop/viewall'}>Shop Our Styles</Link></button>
            </div>
            <div>
                <button><Link to={'/thriftshop/new'}>Add Your Own Item</Link></button>
            </div>
            </div>
        </div>
    )
}

export default Homepage;