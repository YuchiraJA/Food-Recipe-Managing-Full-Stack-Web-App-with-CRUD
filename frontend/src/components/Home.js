import React, { Component } from "react";
import axios from 'axios';


export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };

}

componentDidMount(){
  this.retrievePosts();
}


retrievePosts(){
  axios.get("http://localhost:8006/posts").then( res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}


  render() {
    return (
      <div className="container">
        <br/>
        
        <h3>&nbsp;All Food Recipes</h3>
        <br/>
        
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Recipe Name</th>
                <th scope="col">Ingredients</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead> 
            <tbody>
              {this.state.posts.map((posts,index) =>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                      <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                          {posts.recipename}
                      </a>
                  </td>
                  <td>{posts.ingredients}</td>
                  <td>{posts.description}</td>

                  <td>
                    <a className="btn btn-warning" href="#">
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#">
                      <i className="fas fa-trash"></i>&nbsp;Delete
                    </a>
                  </td>

                </tr>
              ))}
            </tbody>
        </table>

        <button className="btn btn-success" href="#"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Recipe</a></button>
        
      </div>
    )
  }
}