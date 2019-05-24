import React,{Component} from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'
import axios from 'axios'
import HouseDisplay from './houseDisplay';

class Dashboard extends Component {
  constructor(){
    super()
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

  render(){
    const mappedHouse = this.state.house.map((element,i) => {
      return (
        <HouseDisplay
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