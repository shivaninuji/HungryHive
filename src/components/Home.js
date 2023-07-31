import React from 'react'

const Home = () => {
  return (
    <div><div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://th.bing.com/th/id/OIP.HW3eq5JDvyr1XFQ9rMuszAHaEo?w=310&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://th.bing.com/th/id/OIP.HW3eq5JDvyr1XFQ9rMuszAHaEo?w=310&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://th.bing.com/th/id/OIP.HW3eq5JDvyr1XFQ9rMuszAHaEo?w=310&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="..."/>
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
  </div></div>
  )
}

export default Home