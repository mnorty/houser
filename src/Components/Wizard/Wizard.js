import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: 0
    }
    console.log(this.state)
  }

  handleName(name) {
    this.setState({name:name})
    console.log(this.state.name)
  }

  handleAddress(address) {
    this.setState({address:address})
    console.log(this.state.address)
  }

  handleCity(city) {
    this.setState({city:city})
    console.log(this.state.city)
  }

  handleState(state) {
    this.setState({state:state})
    console.log(this.state.state)
  }

  handleZipcode(zipcode) {
    this.setState({zipcode:zipcode})
    console.log(this.state.zipcode)
  }

  handleAddProduct = () => {
    console.log(this.state)
    axios.post('/api/houses' , {
      name:this.state.name,
      address:this.state.address,
      city:this.state.address,
      state:this.state.address,
      zipcode:this.state.zipcode
    })
    .then((res) => {
      console.log(res)
    })
  }
  render(){
    return(
      <div>Wizard
        <Link to ='/'>
          <button>Cancel</button>
        </Link>
        <input
         className='inputField'
         onChange={e => this.handleName(e.target.value)}
         type = 'text'
         placeholder='Property Name'
         />
         <input
         className='inputField'
         onChange={e => this.handleAddress(e.target.value)}
         type = 'text'
         placeholder='Property Address'
         />
         <input
         className='inputField'
         onChange={e => this.handleCity(e.target.value)}
         type = 'text'
         placeholder='Property City'
         />
         <input
         className='inputField'
         onChange={e => this.handleState(e.target.value)}
         type = 'text'
         placeholder='Property State'
         />
         <input
         className='inputField'
         onChange={e => this.handleZipcode(e.target.value)}
         type = 'text'
         placeholder='Property ZipCode'
         />
         <button onClick={this.handleAddProduct}>Add Property</button>
      </div>
    )
  }
}

export default Wizard