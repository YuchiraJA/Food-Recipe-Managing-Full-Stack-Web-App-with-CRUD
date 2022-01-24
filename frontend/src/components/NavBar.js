import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
        <div>
          <center>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

  
   <a style={{alignContent:'center'}} className="navbar-brand" href="/"><h3>&nbsp; Food Recipe Web App &nbsp;</h3> </a>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">     
        <a className="nav-link" href="/"> All Recipes <span className="sr-only">(current)</span></a>
      
      </li>
    </ul>
   
  </div>
</nav>
</center>
        </div>

    )
  }
}