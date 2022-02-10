import React from 'react'
import { Calculator } from './pages/Calculator'
import { Results } from './pages/Results';

export const App = () => {
  return (
    <>

      <div className="container">
        <div className="row">

          <div className="col-6">
          
            <Calculator />
          </div>

          <div className="col-6">
            
            <Results />

          </div>


        </div>
      </div>


    </>
  )
}
