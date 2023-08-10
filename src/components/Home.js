import React from 'react'

const Home = () => {
  return (
    <div className='pb-5 mb-5'>
      <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/food1.png" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="/vhh.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="/food2.jpg" class="d-block w-100" alt="..."/>
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
  
  
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Veggie Quesadillas
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Ingredients:</strong>
        <ul>
          <li>2 large flour tortillas</li>
          <li>1 cup grated cheddar cheese</li>
          <li>1/2 cup diced bell peppers</li>
          <li>1/2 cup diced onions</li>
          <li>1/2 cup sliced mushrooms</li>
          <li>1/4 cup chopped fresh cilantro</li>
          <li>1 teaspoon olive oil</li>
          <li>Salt and pepper to taste</li>
        </ul>
        
        <strong>Instructions:</strong>
        <ol>
          <li>Heat the olive oil in a skillet over medium heat.</li>
          <li>Add the diced onions, bell peppers, and sliced mushrooms. Sauté until vegetables are tender.</li>
          <li>Season with salt and pepper to taste. Remove from heat.</li>
          <li>Place one tortilla in the skillet. Sprinkle half of the grated cheese evenly over the tortilla.</li>
          <li>Spoon the sautéed vegetable mixture over the cheese.</li>
          <li>Sprinkle the remaining cheese and chopped cilantro over the vegetables.</li>
          <li>Top with the second tortilla.</li>
          <li>Cook until the bottom tortilla is golden brown and crispy.</li>
          <li>Carefully flip the quesadilla and cook the other side until crispy and the cheese is melted.</li>
          <li>Remove from the skillet and let cool slightly before slicing into wedges.</li>
        </ol>
        
        <p>These delicious veggie quesadillas are perfect for a quick lunch or dinner. Serve with salsa, guacamole, or sour cream on the side.</p>
      </div>
    </div>
  </div>
</div>
<div class="card">
  <img src="card.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Food</h5>
    <p class="card-text">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their metabolisms and have evolved to fill a specific ecological niche within specific geographical contexts.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <img src="card.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Food</h5>
    <p class="card-text">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their metabolisms and have evolved to fill a specific ecological niche within specific geographical contexts.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <img src="card.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Food</h5>
    <p class="card-text">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their metabolisms and have evolved to fill a specific ecological niche within specific geographical contexts.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <img src="card.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Food</h5>
    <p class="card-text">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their metabolisms and have evolved to fill a specific ecological niche within specific geographical contexts.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
  )
}

export default Home