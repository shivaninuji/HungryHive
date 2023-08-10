import React from 'react'


const signup = () => {
  return (
    
        <div className="d-flex justify-content-center align-items-center vh-100 " id= "b-img">
            <div className="bg-light border border-3 border-success p-3">
        <form>
            <h2>Signup</h2>

            <label>Email</label>
            <input
            type="email"
            placeholder="Enter Your Email"
            name="Email"
            className="form-control"/>
            <label htmlFor="Password">Password
            </label><input
            type="password"
            placeholder="Enter your password"
            name="Password"
            className="form-control"
            />
            <input type='checkbox'/>
            <label htmlFor="Checkbox" className="ms-2">Remember your password</label>
            
           
        </form><div className="d-grid"> <button className="btn btn-danger">Signup</button></div>
    </div>
</div>
  )
}

export default signup