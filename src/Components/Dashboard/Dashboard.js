import React,{Component} from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'
import axios from 'axios'
import HouseDisplay from './houseDisplay';

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      house:[]
    }
  }

  componentDidMount(){
    this.handleGetHouse()
  }

  compenentOnUpdate(){
    this.handleGetHouse()
  }

  handleGetHouse = () => {
    axios.get('/api/houses')
    .then(res => {
      console.log(res)
      this.setState({
        house:res.data
      })
      console.log(this.state)
    })
  }

  handleDeleteHouse = (id) => {
    axios.delete(`/api/houses/${this.state.house.id}`)
    //this provides the url and the id we want to delete, it gets the logic for how to handle the delete from controller.js
    .then(res => {
        this.props.handleGetHouse()
        // this is fired after we recieve the response from the server, res.data doesnt exist until we get a resonse from the server. 
    })
}


  render(){
    const mappedHouse = this.state.house.map((element,i) => {
      return (
        <HouseDisplay
        handleDeleteHouse = {this.handleDeleteHouse}
        key={i}
        house={element}
        />
      )
    })

    return(
      <div>Dashboard
        <House/>
        <Link to='/wizard'>
          <button>Add new Property</button>
        </Link>
        <div>
          {mappedHouse}
        </div>
      </div>
    )
  }
}

export default Dashboard