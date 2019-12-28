import React from 'react';
import axios from 'axios';
import ProductRatingPage from "./ProductRatingPage.css";
import Rating from "./Rating";

export default class ProductRating extends React.Component {
    constructor(props){
      super(props);
      this.state={
          products:[],
            ProductListData:'',
            img: 'default',
            rating: 1,
      };
    }

    getSarees(){
        axios.get('api/products/sarees')
        .then(res => {
            console.log(res.data[0]);
            const productData = res.data;
            this.setState({products : productData});
            console.log(this.state.products);
        })
    }

    getJewelleries(){
        axios.get('api/products/jewellery')
        .then(res => {
            console.log(res.data[0]);
            const productData = res.data;
            this.setState({products : productData});
            console.log(this.state.products);
        })
    }

    update(e){
        e.preventDefault();
        const saree = {
            rating : this.state.rating,
        }
        axios.put('api/productRating{this.state.rating}', ProductRating)
        .then(res => 
            console.log(res.data));
    }

    componentDidMount(){
        this.getSarees();
    }

    SubmitRatings=()=>{
        let result = axios({
            method:'post',
            url:"api/productRating/add",
            data:{id:this.state.products.id, rating:1}
        })
        .then(res =>
            console.log(res));
            console.log(result);
    }

    loadNextItems=()=>{
        console.log("Button clicked");
        this.SubmitRatings();
        this.getJewelleries();
    }


    render(){
        return(
                <div>
                    drop
                    <div className="page-title">
                        Rate The Products
                    </div>
                    <div>
                        
                    </div>
                    <div className="product-list-container">
                        <div className="row">
                        {this.state.products.map((product) =>{
                            return(
                                <div className="col-md-4">
                                    <div className="product-box">
                                        <img className="product-image" src={product.image_url} alt={product.ocassion}></img>
                                        <div className="product-text">
                                            <h3>{product.type}</h3>
                                        </div>
                                        <Rating></Rating>
                                    </div>
                                </div>
                            )
                        }) }
                        </div>
                        <div className="row">
                        {this.state.products.map((product) =>{
                            return(
                                <div className="col-md-4 col-sm-6">
                                    <div className="product-box">
                                        <img className="product-image" src={product.image_url} alt={product.ocassion}></img>
                                        <div className="product-text">
                                            <h3>{product.type}</h3>
                                        </div>
                                        <Rating></Rating>
                                    </div>
                                </div>
                            )
                        }) }
                        </div>

                    </div>
                    <button onClick={this.loadNextItems} >Load more</button>
                </div>
        )
    }
}