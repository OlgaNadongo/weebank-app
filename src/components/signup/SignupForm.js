import React from 'react'

const SignupForm = () => {
  return (
    <div className='signupformcontainer'>

        <form className='signupformitem'>
            
                <label>Name</label>
            <div className='nameitem'>
                <input type="text" placeholder='name...' />
            </div>
              
            
                <label>Email</label>
            <div className='emailitem'>
                <input type="email" placeholder='email...' />
            </div>
           
            
                <label>Password</label>
            <div className='passworditem'>
                <input type="password" placeholder='enter password...' />
            </div>

           
                <label>Confirm Password</label>

            <div className='passworditem'>
                <input type="password" placeholder='confirm password...' />
            </div>

            <div className='loginbtncontainer'>
               <button className='loginbtn'>Signup</button>
            </div>
           
        </form>
    </div>
  )
}

export default SignupForm