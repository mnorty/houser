import React, {Component} from 'react';
import './house.css'
// import axios from 'axios';

class House extends Component {
    // handleDeleteBeetle = () => {
    //     axios.delete(`/api/beetle/${this.props.beetle.id}`)
    //     //this provides the url and the id we want to delete, it gets the logic for how to handle the delete from controller.js
    //     .then(res => {
    //         this.props.deleteBeetle(res.data)
    //         // this is fired after we recieve the response from the server, res.data doesnt exist until we get a resonse from the server. 
    //     })
    // }
    
    render(){
        return (
        <div className="housePost">
            <div>
                <div className="housePost">
                    <p >Name: {this.props.house.name}</p>
                    <p >Address: {this.props.house.address}</p>
                    <p >City: {this.props.house.city}</p>
                    <p >State: {this.props.house.state}</p>
                    <p >Zip: {this.props.house.zip}</p>
                    <p >img: {this.props.house.img}</p>
                    <p >Mortgage: {this.props.house.mortgage}</p>
                    <p >Rent: {this.props.house.rent}</p>
                    <button onClick={this.props.handleDeleteHouse}>Delete</button>
                </div>
            </div>        
        </div>
    )
    }
}

export default House;