import React from 'react'
import NavUser from './NavUser'

const Homeuser = () => {
  return (
    <div>
        <NavUser/>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <marquee><p>&nbsp;&nbsp;&nbsp;welcome to ksrtc &nbsp;&nbsp; &nbsp;&nbsp;home&nbsp;&nbsp; &nbsp;&nbsp;login &nbsp;&nbsp;&nbsp;&nbsp;addbus&nbsp;&nbsp;&nbsp;&nbsp; view bus &nbsp;&nbsp;&nbsp;&nbsp;view all details</p></marquee>
      <img src="https://i.ytimg.com/vi/tMDLN7h0oNU/maxresdefault.jpg"height="400px" width="400px" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://tse2.mm.bing.net/th?id=OIP.w8G-7VXydzt8VRP2cNgwkwHaFL&pid=Api&P=0&h=180" height="400px" width="400px"class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://tse4.mm.bing.net/th?id=OIP.w5ezL79Ar_28CfFCnaCsyQHaEo&pid=Api&P=0&h=180"height="400px" width="400px" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
    </div>
  )
}

export default Homeuser