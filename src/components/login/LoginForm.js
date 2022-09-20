import React from 'react'

const LoginForm = () => {
  return (
    <div className='loginformcontainer'>
        <form className='loginformitem'>
            
            <label>Name</label>
            <div className='nameitem'>
                <input type="text" placeholder='name...' />
            </div>
           
            
            <label>Password</label>
            <div className='passworditem'>
                <input type="password" placeholder='enter password...' />
            </div>

            <div className='loginbtncontainer'>
               <button className='loginbtn'>Log in</button>
            </div>
           
        </form>
    </div>
  )
}

export default LoginForm