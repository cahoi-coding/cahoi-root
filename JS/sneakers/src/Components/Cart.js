import React from 'react';

export function ProductCard(props) {
    return (
        <div key={props.key} className="product-card">
            {/*<img src="https://images.unsplash.com/photo-1652794121449-561adf5b5eb9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765" alt="" className="product-image"/>*/}
            <div className="product-name">{props.name}</div>
            <div className="product-price">{props.price}</div>
        </div>
    );
}