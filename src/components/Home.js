import React from 'react'
import {robot} from './assets'

const Home = () => {
  return (
    <div className='home'>
         <div className='homeitems'>
                <p>10% <span style={{
                    color:"#96A1A8"
                }}>DISCOUNT FOR </span> 1 MONTH</p>
            
            <div className='hometext'>
                <h1>The Next</h1>
                <h1 style={{color:"#5CE1E6"}}>Generation</h1>
                <h1>Payment Method</h1>
            </div>
        
        </div>

        <div className='atmcardimg'>
            <img src={robot} alt="robot"style={{
                width:"70%"
            }}/>
        </div>
    </div>
       
  )
}

export default Home