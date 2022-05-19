import React from 'react';

import {ProductCard} from "./Cart";

export class ProductContainer extends React.Component {
    static PRICE_LEVEL = 120;

    constructor(props) {
        super(props);

        this.state = {
            productList: []
        }
    }

    componentWillMount() {
        this.setState({
            productList: [
                {
                    name: "abc",
                    price: 100
                },
                {
                    name: "xyz",
                    price: 200
                },
                {
                    name: "dbc",
                    price: 150
                }
            ],
            //
        })
    }

    render() {
        let filteredProductList = this.state.productList
            .reduce(function(newProductList, currentProduct) {
                if(currentProduct.price > ProductContainer.PRICE_LEVEL)
                    newProductList.push(
                        <ProductCard
                            key={currentProduct.key}
                            name={currentProduct.name}
                            price={currentProduct.price}/>
                    )

                return newProductList;
            }, [])

        return (
            <div className="product-container">
                {filteredProductList}
            </div>
        );
    }
}