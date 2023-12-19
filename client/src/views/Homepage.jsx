import React from "react";
import { Link } from "react-router-dom";

function Homepage() {

    return (
        <div>
            <h1>Welcome to Clothing Consignment!</h1>
            <h3>Shop our styles or add an item of your own to resell!</h3>
            <div>
                <button><Link to={'/thriftshop/viewall'}>Shop Our Styles</Link></button>
            </div>
            <div>
                <button><Link to={'/thriftshop/new'}>Add Your Own Item</Link></button>
            </div>
        </div>
    )
}

export default Homepage;