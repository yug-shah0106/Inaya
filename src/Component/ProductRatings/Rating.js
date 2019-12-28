import React from 'react';
import ProductRatingPage from './ProductRatingPage.css';
import { Label } from 'react-bootstrap';

export default class Rating extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectedOption:"1",
            options:[1,2,3,4,5,6,7,8,9,10],
        }
    }
    handleonClick=(e)=>{
        //e.preventDefault();
        this.setState({
            selectedOption:e.target.value,
        })
        console.log(e.target.value);
    }
    render(){
        return(
            <form className="rating-options" >
            {this.state.options.map((option, i)=>{
                const rdbId = "rdb" + option;
                return(
                    <span className="col-xs-12">
                        <label for={rdbId} className="ratings-content-icon">{option}</label>
                        <input type="radio" name="rating" id={rdbId} value={option} className="ratings-radio-button" 
                        onChange={this.handleonClick} checked={this.state.selectedOption == option}></input>
                    </span>
                )
            })}
        </form>
        );
    }
}