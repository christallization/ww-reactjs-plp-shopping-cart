import React, { Component } from 'react';

class Product extends Component
{
    state = {
        inCart: this.props.inCart
    };

    addToCart = (e) => {

        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
            inCart: true
        })
    }

    render() {

        const { product } = this.props;

        return (
            <div className="product col-md-4 col-sm-6">
                <figure className="card card-product">
                    <div className="img-wrap">
                        <img className="img-responsive" src={product.medias[0].url} />
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title">{product.name}</h4>
                        <p className="desc">{product.description}</p>
                    </figcaption>
                    <div className="bottom-wrap">

                        {
                            this.state.inCart ? (
                                <span className="btn btn-sm btn-success">Added to cart</span>
                            ) : (
                                <a href="#" onClick={this.addToCart} className={`btn btn-sm btn-primary float-right ${product.skus[0].quantityAvailable === 0 ? "disabled" : ""}`}>Add to cart</a>
                            )
                        }

                        <div className="price-wrap h5">
                            <span className="price-new">${product.retailPrice}</span>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }
}

export default Product;