import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import lehengastore from './lehengastore.jpg';
import lehenga from './lehenga.jpg';
import fashion from './fashion.jpg';
import unsplash from './unsplash.jpg';
import model from './model.jpg';
import banner from './saree_banner.jpg';
// import womanoutdoors from './womanoutdoors.jpg';
import floralwoman from './floralwoman.jpg';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            value: ""
        }
    }

    componentWillMount() {
        this.getValue();
    }

    onNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    onValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    restCall = () => {
        axios.post("/users", { body: { "name": this.state.name, "value": this.state.value } }).then((res) => {
            console.log(res);
        })
    }

    getValue = () => {
        axios.get("users").then((res) => {
            this.setState({ data: res.data });
        })
    }

    render() {
        return ( <div>
              <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 img-height-custom filter-"
                      src={fashion}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Latest Fashion</h3>
                      <p>Our designers work around the clock to bring you the best!</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 img-height-custom position-top"
                      src={lehenga}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Bespoke Styling</h3>
                      <p>Tailormade to fit your needs.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 img-height-custom"
                      src={lehengastore}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Extensive Collection</h3>
                      <p>We have everything you could ever need.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <div className="container mb-5">
                  <div className="row justify-content-md-center">
                      <div className="col col-xs-3 mt-5 mb-5">
                        <div className="card-collection-container">
                          <div className="card-collection">
                            <img title="Gifts for Her" src={unsplash} alt="Gifts for Her" className="img-responsive" />
                            <div className="overlay"></div>
                            <div className="content">
                              <span className="heading">Sarees</span>
                              <span className="subheading">Collection to look beautiful in</span>
                              <a href="/productListing/saree" className="photo-link" tabIndex="0">Shop Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-xs-3 mt-5 mb-5">
                        <div className="card-collection-container">
                          <div className="card-collection">
                            <img title="Gifts for Her" src={model} alt="Gifts for Her" className="img-responsive" />
                            <div className="overlay"></div>
                            <div className="content">
                              <span className="heading">Sarees</span>
                              <span className="subheading">Collection to look beautiful in</span>
                              <a href="/productListing/salwar" className="photo-link" tabIndex="0">Shop Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-xs-3 mt-5 mb-5">
                        <div className="card-collection-container">
                          <div className="card-collection">
                            <img title="Gifts for Her" src={floralwoman} alt="Gifts for Her" className="img-responsive" />
                            <div className="overlay"></div>
                            <div className="content">
                              <span className="heading">Sarees</span>
                              <span className="subheading">Collection to look beautiful in</span>
                              <a href="/productListing/unique" className="photo-link" tabIndex="0">Shop Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="container-fluid mb-5">
                  <div className="row bg-black text-white">
                    <div className="col"><img alt="gift for me" src={banner} className="img-responsive" width="100%" /></div>
                  </div>
                </div>
    </div>);
    }
}

export default Home;
