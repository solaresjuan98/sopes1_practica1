import React from 'react'

export const Results = () => {
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
        <tr>
          <td scope="col">2</td>
          <td scope="col">1</td>
          <td scope="col">+</td>
          <td scope="col">3</td>
          <td scope="col">10/2/2022</td>
        </tr>
        <tr>
          <td scope="col">2</td>
          <td scope="col">3</td>
          <td scope="col">+</td>
          <td scope="col">5</td>
          <td scope="col">10/2/2022</td>
        </tr>
      </table>

    </div>
  )
}
