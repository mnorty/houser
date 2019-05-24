import React,{Component} from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'

class Dashboard extends Component {
  render(){
    return(
      <div>Dashboard
        <House/>
        <Link to='/wizard'>
          <button>Add new Property</button>
        </Link>
      </div>
    )
  }
}

export default Dashboard