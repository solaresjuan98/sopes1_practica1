import React from 'react'
import { useCalculator } from '../hooks/useCalculator'

export const Results = () => {

  const { results } = useCalculator();



  // console.log(results)

  // // for(let i = 0; i < results.length; i++) {
  // //   console.log(results[i])
  // // }

  return (
    <div className='mt-5'>
      <h1>Results</h1>

      <table className='table table-hover'>
        <thead>
          <tr className="table-dark">
            <th scope='col'>Number 1</th>
            <th scope='col'>Number 2</th>
            <th scope='col'>Operation</th>
            <th scope='col'>Result</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        {


          results.map((result) => (
            <tr>
              <td>{result.n1}</td>
              <td>{result.n2}</td>
              <td>{result.operator}</td>
              <td>{result.result}</td>
              <td>{result.time}</td>
            </tr>
          ))


        }
        {/* <tr>
          <td>2</td>
          <td>1</td>
          <td>+</td>
          <td>3</td>
          <td>10/2/2022</td>
        </tr>
        <tr>
          <td>2</td>
          <td>3</td>
          <td>+</td>
          <td>5</td>
          <td>10/2/2022</td>
        </tr> */}
      </table>

    </div>
  )
}
