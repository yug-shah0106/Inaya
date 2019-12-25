import React from 'react';
import axios from 'axios';
import unsplash from './unsplash.jpg';
import Util from './Util/Util.jsx';
import floral from './floralwoman.jpg';
import fashion from './fashion.jpg';
import lehenga from './lehenga.jpg';
import ReactImageMagnify from 'react-image-magnify';
import { cloneDeep } from "lodash";

export default class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getId: this.props.match.params.id,
            defaultSize: Util.sizes,
            selectedSize:'S'
        }
    }

componentWillMount(){
  axios({
    method: 'get',
    url: "/api/products/details",
    params:{filters:{id:this.state.getId}}
  }).then((res)=>{
    res.data.imagePath = [unsplash,floral,fashion,lehenga];
    res.data.size = ['x','xs','xl','l'];
    // JSON.parse(res.data.size)
    this.setState({
      data:res.data,
      selectedImage:res.data.imagePath[0]
    })
  },(err)=>{
    let res = {};
    res.data =
    {color: "Red",
      coupon_id: 2,
      description: "",
      design_code: "10AB20",
      designer_id: 12793,
      discount_percent: 15,
      discount_price: 850,
      id: 1,
      price: 999,
      quantity: 2,
      sell_count: 0,
      size: '{"size":["S","L","XL"]}',
      title: "red plain festival danglers drops",
      weight: 200};
      res.data.imagePath = [unsplash,floral,fashion,lehenga];
      res.data.size = JSON.parse(res.data.size);
      this.setState({
        data:res.data,
        selectedImage:res.data.imagePath[0]
      })
    console.log(err);
  })
}

//     addInCart = () =>{
//       let data = cloneDeep(this.state.data);
//       data.size = this.state.selectedSize;
//        localStorage.setItem('cartItems', data);

//        axios({
//    method: 'post',
//    url: "/api/cart/add",
//    data
//  }).then((res)=>{
//         this.setState({
//           addedSuccess:true
//         })
//       },(err)=>{
//         this.setState({
//           addedSuccess:false
//         });
//       })
//     }

createCart = () =>{
  axios({
    method:'post',
    url:"/api/cart/add",
    data: {id:1,user_id:2,created_at:"12-22-2019", updated_at:"2019-12-22"}
  }).then((res) => {
    console.log(res);
  },(err) => {
    console.log(err);
  });
}

postLineItem = () =>{
  axios({
    method:'post',
    url:"/api/lineItems/add",
    data: {id:1,design_id:101,status:"processing",created_at:"12-22-2019", received_at:"2019-12-22"}
  }).then((res) => {
    console.log(res);
  },(err) => {
    console.log(err);
  });
}

addInCart = () =>{
  axios({
    method:'get',
    url:"/api/cart/checkFromId",
    queryParams:{filter:{id:2}},
  }).then((res)=>{
    console.log(res);
    if(res.data !== "")
    {
      this.postLineItem();
    }else{
      this.createCart();
      this.postLineItem();
    }
  },(err)=>{
    console.log(err);
  });
}

    sizeChanged = (e) =>{
      this.setState({
        selectedSize:e.target.innerHTML
      })
    }

    onImageChnage = (o) =>{
      this.setState({
        selectedImage:o
      })
    }

    render() {
        return (
          <>
          {this.state.data ?
            <div className="container-fluid">
              <div className="row mb-5 mt-5">
                <div className="col-md-6 increase-z-index">
                  <div className="product-details-container sticky">
                    <div className="product-details-thumb" >
                        <ul>
                            <li className="arrow mb-2">
                              <a><i className="fa fa-chevron-up fa-fw"></i></a>
                            </li>
                            {
                              this.state.data.imagePath.map((o)=>{
                                return (<li className={this.state.selectedImage === o ? "active" : ""} onClick={this.onImageChnage.bind(this,o)}>
                                    <a><img alt="gift for me" className="listing-page-side-image" src={o} data-id={o} /></a>
                                </li>)
                              })
                            }
                            <li className="arrow mt-2">
                              <a><i className="fa fa-chevron-down fa-fw"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="product-details-image">
                      <div className="">
                      <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                         smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: false,
                            src: this.state.selectedImage,
                            width:470,
                            height:600,
                            sizes: '(max-width: 800px) 400vw, (max-width: 1200px) 120vw, 360px'
                        },
                        largeImage: {
                            src: this.state.selectedImage,
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerDimensions: {
                            width: '130%',
                            height: '100%'
                        }
                    }}/>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 zero-padding">
                    <div className="details-wrapper">
                      <div className="row">
                          <div className="col-md-12">
                              <h1 className="product-heading">
                              {this.state.data.title}
                              </h1>
                              <hr />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-10">
                            <table className="table noborder condensed product-cost-table">
                              <tbody>
                                <tr>
                                  <td><div class="strikethrough text-grey"><small>₹{this.state.data.price}</small></div></td>
                                </tr>
                                <tr>
                                  <td><b className="pricing">₹{this.state.data.discount_price}</b><span className="label-primary text-left ml-1">50% off</span></td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className= "col-md-10">
                            <div><label class="product-field mb-1"><span class="">Select Size</span></label></div>
                            {/*<div className="size-error">Please select a size</div>*/}
                            <div className="size-buttons">
                            {/*
                              this.state.defaultSize.map((o)=>{
                                  return <a className = {this.state.data.size.size.includes(o) ? this.state.selectedSize === o ? "btn btn-default btn-sm ml-2 active" : "btn btn-default btn-sm ml-2" : "btn btn-default btn-sm ml-2 grey disabled"} onClick={this.sizeChanged}>{o}</a>
                              })*/
                            }
                              </div>
                            <label className="product-field text-primary mt-2"><small><b><a className="underline pointer">View Size Chart +</a></b></small></label>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className= "col-md-10">
                            <label className="product-field"><span className="">Available Offers:</span></label>
                            <div clasNazaakatsName="offer-card-container">
                              <div className="offer-card">
                              <div className="offer-card-header mb-3">Buy 2 get 1 free</div>
                              <div className="offer-card-body">
                                Buy 2 of this item to get any 1 of this item for free
                              </div>
                              <div className="offer-card-button text-right">
                                <a>More Info +</a>
                              </div>
                              <div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                        <div className= "col-md-10">
                            <div className="offer-card-container">
                              <div className="offer-card">
                              <div className="offer-card-header mb-3">10% Cashback | Paytm</div>
                              <div className="offer-card-body">
                                Pay via Paytm to avail 10% cashback upto 5$
                              </div>
                              <div className="offer-card-button text-right">
                                <a>More Info +</a>
                              </div>
                              <div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row m-b-3 mt-3">
                        <div className= "col-md-10">
                          <div className="cart-buttons">
                            <button className="btn btn-primary mr-2" onClick={this.addInCart}>Add to cart</button>
                            <button className="btn btn-default ml-2 active text-primary pull-right">Wishlist +</button>
                          </div>
                        </div>
                      </div>
                      <div className="row m-b-3 mt-2">
                        <div className= "col-md-10">
                            <small className="product-field">
                              <span className="">Estimated Delivery Date <span className="text-primary">13 December 2019</span></span>
                            </small>
                        </div>
                      </div>
                       <div className="row mt-3">
                        <div className= "col-md-10">
                            <label className="product-field"><span className="">Product Details:</span></label>
                            <div>
                              <div className="product-detail-thingy mb-2"><b>Product ID:</b><div className="inline-block">{this.state.data.design_code}</div></div>
                              <div className="product-detail-thingy mb-2"><b>Product Name:</b><div className="inline-block">{this.state.data.design_title}</div></div>
                              <hr />
                              <div className="product-detail-thingy mb-2"><b>Brand:</b><div className="inline-block">Nazaakat</div></div>
                              <div className="product-detail-thingy mb-2"><b>Stictching Type:</b><div className="inline-block">Stitched</div></div>
                              <div className="product-detail-thingy mb-2"><b>Occassions:</b><div className="inline-block">Casual Wear </div></div>
                              <hr />
                            </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="extra-product-container  mt-3 mb-5">
                        {/*<div className="extra-product-box min-width">
                          <h1>More</h1>
                          <h1>Like</h1>
                          <h1>This</h1>
                          <h1>Product</h1>
                        </div>*/}
                        <div className="extra-product-box">
                          <a><img alt="gift for me" className="extra-product-image" src={unsplash} /></a>
                        </div>
                        <div className="extra-product-box">
                          <a><img alt="gift for me" className="extra-product-image" src={unsplash} /></a>
                        </div>
                        <div className="extra-product-box">
                          <a><img alt="gift for me" className="extra-product-image" src={unsplash} /></a>
                        </div>
                        <div className="extra-product-box">
                          <a><img alt="gift for me" className="extra-product-image" src={unsplash} /></a>
                        </div>
                        <div className="extra-product-box">
                          <a><img alt="gift for me" className="extra-product-image" src={unsplash} /></a>
                        </div>
                  </div>
              </div>
            : null }
          </>)
      }

}
