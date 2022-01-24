import React, { Component } from 'react'

export default class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state={
      topic:"",
      description:"",
      postCategory:""
    }
  }

  render() {
    return (
        <div>
            Create Post 
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
                  <label style={{marginBottom:'5px'}}></label>
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

                <button className='btn btn-success' type='submit'></button>
              </form>
            </div>
        </div>

    )
  }
}