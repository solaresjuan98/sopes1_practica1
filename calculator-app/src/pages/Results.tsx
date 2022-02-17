import React from 'react'
import { useCalculator } from '../hooks/useCalculator'
import moment from 'moment'


export const Results = () => {

  const { results, getResults } = useCalculator();


  /**
   * write an action to refresh db data
   * when the button is pressed
   * 
   */

  return (
    <div className='mt-5' style={{
      height: '80vh',
      width: '500px',
      overflow: 'scroll',
      overflowX: 'hidden',
      margin: '20'
    }}>
      <h1>Results</h1>

      <button 
        className='btn btn-info' 
        style={{
          borderRadius: '10px'
        }}
        onClick={() => getResults()}>
        Refresh data
      </button>


      <table className='table table-hover mt-2'>
        <thead>
          <tr className="table-dark">
            <th scope='col'>Number 1</th>
            <th scope='col'>Number 2</th>
            <th scope='col'>Operation</th>
            <th scope='col'>Result</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            results !== null && (

              results.map(({ id, n1, n2, operator, result, time }) => (
                <tr key={id}>
                  <td>{n1}</td>
                  <td>{n2}</td>
                  <td>{operator}</td>
                  <td>{result}</td>
                  <td>{moment(time).format('MMMM Do YYYY, h:mm:ss a')}</td>
                </tr>
              ))

            )
          }
        </tbody>


      </table>



    </div>
  )
}
