import React from 'react'
import { CalculatorButton } from '../components/CalculatorButton'

export const Calculator = () => {
    return (

        <div className='central-container mt-5' style={{ border: '3px solid white' }}>

            <div className="result-screen" style={{ backgroundColor: '#ccc' }}>
                <h1 className='text-dark'>100</h1>
            </div>

            <div>

                <div className="row">

                    <CalculatorButton label='AC' />
                    <CalculatorButton label='+/-' />
                    <CalculatorButton label='%' />
                    <CalculatorButton label='/' btnClass='btn btn-warning' />

                </div>

                <div className="row mt-3">
                    <CalculatorButton label='7' btnClass='btn btn-success' />
                    <CalculatorButton label='8' btnClass='btn btn-success' />
                    <CalculatorButton label='9' btnClass='btn btn-success' />
                    <CalculatorButton label='*' btnClass='btn btn-warning' />
                </div>

                <div className="row mt-3">
                    <CalculatorButton label='4' btnClass='btn btn-success' />
                    <CalculatorButton label='5' btnClass='btn btn-success' />
                    <CalculatorButton label='6' btnClass='btn btn-success' />
                    <CalculatorButton label='-' btnClass='btn btn-warning' />
                </div>

                <div className="row mt-3">
                    <CalculatorButton label='1' btnClass='btn btn-success' />
                    <CalculatorButton label='2' btnClass='btn btn-success' />
                    <CalculatorButton label='3' btnClass='btn btn-success' />
                    <CalculatorButton label='+' btnClass='btn btn-warning' />
                </div>

                <div className="row mt-3">
                    <CalculatorButton label='0' btnClass='btn btn-success' colNumber={6} />
                    <CalculatorButton label='.' btnClass='btn btn-secondary' />
                    <CalculatorButton label='=' btnClass='btn btn-warning' />
                </div>
            </div>
        </div>
    )
}
