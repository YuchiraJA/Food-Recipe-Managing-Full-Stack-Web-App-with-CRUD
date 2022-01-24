import React, { Component } from 'react';
import axios from 'axios';
import { useParams
 } from 'react-router-dom';

export default class EditPost extends Component {



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
    const id = this.props.match.params.id;                                        
    const {recipename,ingredients,description} = this.state;

    const data = {
      recipename:recipename,
      ingredients:ingredients,
      description:description
    }

    console.log(data)

    axios.put(`http://localhost:8006/post/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Post updated successfully")
        this.setState(
          {
            recipename:"",
            ingredients:"",
            description:""
          }
        )
      }
    })
  }





  componentDidMount(){

    
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8006/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });

        console.log(this.state.post);
      }
    });

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