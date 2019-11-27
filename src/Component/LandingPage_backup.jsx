import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Boxes from './CommonComponent.jsx';
import background from './background.png';

class Home extends React.Component {
constructor(props){
  super(props);
  this.state = {
      name:"",
      value:""
  }
}

componentWillMount(){
  this.getValue();
}

onNameChange = (e) =>{
  this.setState({name:e.target.value});
}

onValueChange = (e) =>{
  this.setState({value:e.target.value});
}

restCall = () =>{
  axios.post("/users",{body:{"name":this.state.name,"value":this.state.value}}).then((res)=>{
    console.log(res);
  })
}

getValue = () =>{
  axios.get("users").then((res)=>{
    this.setState({data:res.data});
  })
}

  render() {
    return (<div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img-height-custom"
      src={background}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-height-custom"
      src={background}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-height-custom"
      src={background}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="col-xs-12 widget-wrapper-cls">
                    <div className="col-xs-12 widget-section-cls">
                      <div className="row">
                        <div className="col-xs-12 col-sm-4 widget-box-cls">
                          <a href="https://www.craftsvilla.com/exclusive/buy-padma-saras-serendipity-online-craftsvilla?Normal_PadmaSaras_2_7524_1">
                            <img className="img-responsive" src="https://img1.craftsvilla.com/orig/C/V/1574142411_1_new&amp;networthy-2.jpg" alt="PadmaSaras" title="PadmaSaras"/>
                          </a>
                        </div>
                        <div className="col-xs-12 col-sm-4 widgets-box">
                          <a onclick="dataLayer.push({'event':'FeedClickEvent','eventName':'FeedClickEvent','FeedId':'7536','SectionPosition':'2','SectionName':'NEW &amp; NOTEWORTHY','Position':'2'});" href="https://www.craftsvilla.com/exclusive/buy-sunset-boulevard-fabled-fabrics-online-craftsvilla?Normal_SunsetBoulevard_2_7536_2">
                            <img className="img-responsive" src="https://img1.craftsvilla.com/orig/C/V/1574140561_2_new&amp;networthy-2.jpg" alt="SunsetBoulevard" title="SunsetBoulevard"/>
                          </a>
                        </div>
                        <div className="col-xs-12 col-sm-4 widgets-box">
                          <a onclick="dataLayer.push({'event':'FeedClickEvent','eventName':'FeedClickEvent','FeedId':'7534','SectionPosition':'2','SectionName':'NEW &amp; NOTEWORTHY','Position':'3'});" href="https://www.craftsvilla.com/exclusive/buy-swarn-rooh-luxe-fashion-play-online-craftsvilla?Normal_SwarnRooh_2_7534_3">
                            <img className="img-responsive" src="https://img1.craftsvilla.com/orig/C/V/1574140587_3_new&amp;networthy-2.jpg" alt="SwarnRooh" title="SwarnRooh"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 widget-wrapper-cls">
                      <div className="col-xs-12 widget-section-cls">
                          <div className="row">
                              <div className="col-lg-12 col-xs-12 widget-wrapper-cls">
                                    <a href="https://www.craftsvilla.com/store-locator?Normal_StoresLocation_3_8081_1" className="">
                                        <img className="img-responsive mb-view-images feed-img dy-feed" src="https://img1.craftsvilla.com/orig/C/V/1572607322_DiscountStrip.jpg" data-app-src="https://img1.craftsvilla.com/orig/C/V/1572607322_DiscountStrip.jpg"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                  <div className="col-xs-12 widget-wrapper-cls">
                      <div className="col-xs-12 widgets-section">
                          <div className="row">
                              <div className="col-sm-3 col-xs-6 widget-box-cls">
                                    <a href="https://www.craftsvilla.com/womens-clothing/sarees/?Normal_SAREES_4_8081_1">
                                        <img className="img-responsive" src="https://img1.craftsvilla.com/orig/C/V/1574140666_saree_SBC2.jpg" data-src="https://img1.craftsvilla.com/orig/C/V/1574140666_saree_SBC2.jpg" alt="SAREES" title="SAREES"/>
                                    </a>
                                </div>
                                <div className="col-sm-3 col-xs-6 widget-box-cls">
                                    <a href="https://www.craftsvilla.com/womens-clothing/kurtis-tunics?Normal_Kurtis_4_8083_2">
                                        <img className="img-responsive" src="https://img1.craftsvilla.com/orig/C/V/1574140709_kurti_SBC2.jpg" data-src="https://img1.craftsvilla.com/orig/C/V/1574140709_kurti_SBC2.jpg" alt="Kurtis" title="Kurtis"/>
                                    </a>
                                </div>
                                <div className="col-sm-3 col-xs-6 widget-box-cls">
                                    <a href="https://www.craftsvilla.com/jewellery/?Normal_Jewellery_4_8082_3">
                                        <img className="img-responsive" src="https://img1.craftsvilla.com/orig/C/V/1574140735_jewellery_SBC2.jpg" data-src="https://img1.craftsvilla.com/orig/C/V/1574140735_jewellery_SBC2.jpg" alt="Jewellery" title="Jewellery"/>
                                    </a>
                                </div>
                                <div className="col-sm-3 col-xs-6 widget-box-cls">
                                    <a href="https://www.craftsvilla.com/cvfeeds/buy-Suits-online-craftsvilla?Normal_Suits_4_8084_4">
                                        <img className="img-responsive" src="https://img1.craftsvilla.com/orig/C/V/1574140768_suit_SBC2.jpg" data-src="https://img1.craftsvilla.com/orig/C/V/1574140768_suit_SBC2.jpg" alt="Suits" title="Suits"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 widget-wrapper-cls">
                        <div className="col-xs-12 widget-section-cls">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 widget-box-cls">
                                    <a href="https://www.craftsvilla.com/cvfeeds/buy-saree-resplendence-online-craftsvilla?Normal_SAREE_5_7549_1">
                                        <img className="img-responsive" src="https://img1.craftsvilla.com/orig/C/V/1574140815_saree_Wedding.jpg" data-src="https://img1.craftsvilla.com/orig/C/V/1574140815_saree_Wedding.jpg" alt="SAREE" title="SAREE"/>
                                    </a>
                                </div>
                                <div className="col-xs-12 col-sm-4 widget-box-cls">
                                    <a href="https://www.craftsvilla.com/cvfeeds/buy-craftsvilla-special-kundan-jewellery-online-craftsvilla?Normal_Jewelery_5_6510_2">
                                        <img className="img-responsive" src="https://img1.craftsvilla.com/orig/C/V/1574140831_jewellery_Wedding.jpg" data-src="https://img1.craftsvilla.com/orig/C/V/1574140831_jewellery_Wedding.jpg" alt="Jewelery" title="Jewelery"/>
                                    </a>
                                </div>
                                <div className="col-xs-12 col-sm-4 widget-box-cls">
                                    <a href="https://www.craftsvilla.com/cvfeeds/buy-wedding-wear-online-craftsvilla?Normal_SUITS_5_7445_3">
                                        <img className="img-responsive" src="https://img1.craftsvilla.com/orig/C/V/1574140851_suit_Wedding.jpg" data-src="https://img1.craftsvilla.com/orig/C/V/1574140851_suit_Wedding.jpg" alt="SUITS" title="SUITS"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>);
  }
}

export default Home;
