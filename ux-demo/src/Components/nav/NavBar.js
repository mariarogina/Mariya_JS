import React from 'react'
import { NavLink} from  'react-router-dom'


const Navbar = () => {
    return ( <div  style={{float:'left', marginRight:"800px"}}>
        <ul  class=" navbar navbar-expand-lg 
        navbar-light bg-light fixed-top py-lg-0 " style={{display:"flex", flexDirection:"row", marginBottom:'35px'}}>
        <li  class="nav-link">
          <NavLink style={{color:"purple", margin:"15px", fontSize:'1.4rem', width:'200px'}} to='/' activeClassName="active" exact>Home</NavLink>
        </li>
        <li  class="nav-link">
          <NavLink style={{color:"purple",  margin:"15px", fontSize:'1.4rem', width:'200px'}} to='/countries' activeClassName="active" >Countries</NavLink>
        </li>
        <li  class="nav-link">
          <NavLink style={{color:"purple",  margin:"15px", fontSize:'1.4rem', width:'200px'}} to='/simplecat' activeClassName="active">Cats table</NavLink>
        </li>
        <li  class="nav-link">
          <NavLink style={{color:"purple",  margin:"15px", fontSize:'1.4rem', width:'200px'}} to='/catmock' activeClassName="active">Cat editable</NavLink>
        </li>
        <li  class="nav-link">
          <NavLink style={{color:"purple",  margin:"15px", fontSize:'1.4rem', width:'200px'}} to='/cated' activeClassName="active">Cats reserve</NavLink>
        </li>
      </ul>
      </div>
    )
}

export default Navbar