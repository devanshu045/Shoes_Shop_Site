import React from 'react'
import './Navebar.scss'
// import '~@fortawesome/fontawesome-free/css/all.css';


const Navebar = () => {
  return (
    <div class="navbar">
  <div class="navbar_left">
    <img src="logo.png" alt="Logo" class="navbar_logo" />
  </div>
  <div class="navbar_center">
    <ul class="navbar_list">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
  <div class="navbar_right">
    <input type="text" placeholder="Search" class="navbar_search" />
    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    <i class="fa fa-user" aria-hidden="true"></i>
  </div>
</div>
  )
}

export default Navebar