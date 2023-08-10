import React from 'react'

const Create = () => {
  return (
    <div><div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Contact Information
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>Contact Details:</strong>
          <ul>
            <li><strong>Name:</strong> John Doe</li>
            <li><strong>Email:</strong> johndoe@example.com</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Location:</strong> 123 Main Street, Cityville, State, ZIP</li>
          </ul>
          
          <strong>Availability:</strong>
          <p>I'm available for contact during weekdays from 9 AM to 5 PM. Feel free to reach out for any inquiries or questions you may have.</p>
          
          <strong>Social Media:</strong>
          <p>Connect with me on social media:</p>
          <ul>
            <li><a href="https://www.twitter.com/johndoe" target="_blank">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/johndoe" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/johndoe" target="_blank">Instagram</a></li>
          </ul>
          
          <p>Feel free to contact me through any of the above channels. Looking forward to connecting with you!</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Create