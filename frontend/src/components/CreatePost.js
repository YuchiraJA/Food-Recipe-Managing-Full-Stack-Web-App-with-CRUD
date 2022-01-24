import React, { Component } from 'react'
import axios from 'axios';

export default class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state={
      recipename:"",
      ingredients:"",
      description:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit =(e) =>{
    e.preventDefault();

    const {recipename,ingredients,description} = this.state;

    const data = {
      recipename:recipename,
      ingredients:ingredients,
      description:description
    }

    console.log(data)

    axios.post("http://localhost:8006/post/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            recipename:"",
            ingredients:"",
            description:""
          }
        )
      }
      alert("New Recipe Save Successfully");
    })
  }

  render() {
    return (
        <div>
            <div className="col-md-8 mt-4 mx-auto">
              <h1 className="h3 mb-3 font-weight-normal">Add New Recipe</h1>
              <form className="needs-validation" noValidate>

                <div className='form-group' style={{marginBottom:'15px'}}>

                <label style={{marginBottom:'5px'}}> Recipe Name </label>
                <input type ="text" 
                className="form-control"
                name='recipename'
                placeholder='Enter Recipe Name'
                value={this.state.recipename}
                onChange={this.handleInputChange}/>

                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}> Ingredients </label>
                  <input type="text"
                  className='form-control'
                  name='ingredients'
                  placeholder='Enter Ingredients'
                  value={this.state.ingredients}
                  onChange={this.handleInputChange}/>
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Description</label>
                  <input type="text"
                  className='form-control'
                  name='description'
                  placeholder='Enter Description'
                  value={this.state.description}
                  onChange={this.handleInputChange}/>
                </div>

                <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}>
                  <i className='far fa-check-square'></i>
                  &nbsp; Save </button>
              </form>
            </div>
        </div>

    )
  }
}
