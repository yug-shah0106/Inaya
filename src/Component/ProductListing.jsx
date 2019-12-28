import React from 'react';
import axios from 'axios';
import {
    Badge,
    Row,
    Col,
    Accordion,
    Card
} from "react-bootstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Util from './Util/Util.jsx';

const navbarHeader = [{label:"Saree Fabric",name:"saree_fabric"},
{label:"Pattern",name:"print_or_pattern_type"},
{label:"Blouse Color",name:"blouse_color"},
{label:"Blouse Fabric",name:"blouse_fabric"},
{label:"Saree Color",name:"saree_color"}];


export default class ProductListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedSize:[],
          selectedCategory:"Sarees",
          rangeValue: {
        min: 500,
        max: 9000,
      },
      maxPrice:10000,
      minPrice:400
        }
    }

    componentWillMount(){
      this.getDisplayeProduct();
    }

    async componentDidMount(){
      await navbarHeader.map(async(o)=>{
    try{
      let res = await axios.get('/api/products/sarees/getOptions',{
          params:{
            column:o.name
        }
      });
      this.state[o.name] = res.data;
      this.setState(this.state);
      this.forceUpdate();
    }
    catch(err){
      console.log(err);
    }
    });
    }

    getProductFromURL = () =>{
      let url = this.props.location.pathname.split("/");
      return url[url.length-1];
    }

    getDisplayeProduct = () =>{
      let params=Util.queryParamtoObject(this.props.location.search);
      let url = this.getProductFromURL();
      axios({
        method: 'get',
        url: `/api/products/${url}`,
        params
      }).then((res)=>{
        this.setState({
          data:res.data
        })
      },()=>{
      })
    }


    setCategory = (e) =>{
      this.setState({
        selectedCategory:e.target.text
      })
    }

    onRangeChanged = (value) =>{
      this.setState({ rangeValue: value},()=>{
        this.getDisplayeProduct();
      });
    }

    onSizeChange = (e) =>{
      this.state.selectedSize.push(e.target.value);
      this.getDisplayeProduct();
    }

    render() {
        return ( <>
            <div className="listing-page-container mt-3">
                <div className="listing-box row">
                    <div className="filter-side hidden-xs col-md-2 zero-padding">
                    <Accordion defaultActiveKey={0} className="checkout-container">
                        <div className="filter-list">

                        {
                          navbarHeader.map((o)=>{
                            return (<Card key={o.id}>
                            <Accordion.Collapse eventKey={0}>
                              <Card.Body>
                              <h5>{o.label}</h5>
                              <ul className="category-selector">
                                {this.state[o.name] ?
                                  this.state[o.name].map((type)=>{
                                    return (<li key={type[o.name]} className={this.state.selectedCategory === o.name ? "active" : ""} onClick={this.setCategory.bind(this)}><a>{type[o.name]}</a></li>)
                                  })
                                  : null
                                }
                                <li><a onClick={()=>{this.getCategory()}}>More Clothing</a></li>
                              </ul>
                              </Card.Body>
                            </Accordion.Collapse>
                            </Card>)
                          })
                        }


                            <h5>Filter By</h5>
                              <h6>Price</h6>
                            <div className="price-selector">
                                <InputRange
                                    maxValue={this.state.maxPrice}
                                    minValue={this.state.minPrice}
                                    formatLabel={value => `${value} Rs`}
                                    value={this.state.rangeValue}
                                    onChange={value => {this.onRangeChanged(value)}}
                                    onChangeComplete={value => console.log(value)} />
                            </div>
                        {  /*  <div className="discount-selector">
                                <h6>Discounts</h6>
                                <ul>
                                    <li className="active"><a>10% and above</a></li>
                                    <li><a>20% and above</a></li>
                                    <li><a>30% and above</a></li>
                                    <li><a>40% and above</a></li>
                                    <li><a>50% and above</a></li>
                                </ul>
                            </div> */}
                                <div className="size-selector m-t-md">
                                <h6 className="m-t-md">Size</h6>
                                <ul className="size-selector">
                                {
                                  this.state.size ?
                                  this.state.size.map((o)=>{
                                    return (<li key={o}><input type="checkbox" className="fa-fw" checked={this.state.selectedSize.includes(o) ? true : false} onClick={this.onSizeChange.bind(this)} onChange={this.onSizeChange.bind(this)}/>{o}</li>)
                                  })
                                  :null
                                }
                                </ul>
                                </div>
                                <div className="colour-selector">
                                <h6>Colour</h6>
                                <i className="fa fa-square fa-fw" style={{color:"#EBE6C8"}}></i>
                                <i className="fa fa-square fa-fw" style={{color:"#3DDBD0"}}></i>
                                <i className="fa fa-square fa-fw" style={{color:"#D26576"}}></i>
                                <i className="fa fa-square fa-fw" style={{color:"#000000"}}></i>
                            </div>
                        </div>
                        </Accordion>
                    </div>
                    <div className="listing-list col-md-10">
                        <div id="listProducts" className="products-container">
                        {/*<div className="products-section nopadding mt-2">
                          <div className="product-row">
                              <div className="product-item m-b-md">
                                  <div className="ibox">
                                      <div className="ibox-content product-box">
                                          <div className="product-imitation">
                                              <a className="product-image" href="/product/1">
                                              <img alt="gift for me" src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-list-src="https://img6.craftsvilla.com/image/upload/w_500,h_500/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" className="img-height-custom"/>
                                          </a>
                                          <div className="hover-buttons">
                                              <a className="plp-wishlist btn btn-default pull-left btn-sm">Wishlist</a>
                                              <a className="plp-atc btn btn-primary pull-right btn-sm">Add to Cart</a>
                                          </div>
                                          </div>
                                          <div className="product-desc">
                                            { /* <span className="product-price">
                                                  <i className="fa fa-square fa-fw" style={{color:"#EBE6C8"}}></i>
                                                  <i className="fa fa-square fa-fw" style={{color:"#3DDBD0"}}></i>
                                                  <i className="fa fa-square fa-fw" style={{color:"#D26576"}}></i>
                                                  <i className="fa fa-square fa-fw" style={{color:"#000000"}}></i>
                                              </span>
                                              <a href="#" className="product-name"> Product</a>
                                              <h6> kapde kapde kapde kapde kapde </h6>

                                              <div className="small m-t-sm">
                                                  <div className="strikethrough text-grey">₹999</div>
                                                  <b className="pricing">₹850</b><span className="label-primary text-left ml-1">50% off</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>*/}
                      <div className="products-section nopadding mt-2">
                        <div className="product-row">
                          { this.state.data ?
                            this.state.data.map((o)=>{
                              return (
                                    <div  key={o.id} className="product-item m-b-md">
                                        <div className="ibox">
                                            <div className="ibox-content product-box">
                                                <div className="product-imitation">
                                                    <a className="product-image" href={`#/product/${o.id}`} >
                                                    <img alt="gift for me" src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-list-src="https://img6.craftsvilla.com/image/upload/w_500,h_500/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" className="img-height-custom"/>
                                                </a>
                                                <div className="hover-buttons">
                                                    <a className="plp-wishlist btn btn-default pull-left btn-sm">Wishlist</a>
                                                    <a className="plp-atc btn btn-primary pull-right btn-sm">Add to Cart</a>
                                                </div>
                                                </div>
                                                <div className="product-desc">
                                                    <h5>{o.title}</h5>
                                                    <div className="small m-t-sm">
                                                        <div className="strikethrough text-grey">₹{o.price}</div>
                                                        <b className="pricing">₹{o.discount_price}</b><span className="label-primary text-left ml-1">50% off</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                          )
                            })
                             : null
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </>
        );
    }
}
