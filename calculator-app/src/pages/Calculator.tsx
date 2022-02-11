import React from 'react'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator';


export const Calculator = () => {

    const {
        number,
        buildNumber,
        deleteValue,
        btnSum,
        btnSub,
        btnMul,
        btnDiv,
        submitResult,
        negativeNumber,
        operation
    } = useCalculator();

    return (
        <>
            <div className='central-container mt-5' style={{ border: '3px solid white' }}>

                <div
                    className="result-screen"
                    style={{
                        backgroundColor: '#ccc',
                        overflow: 'hidden'
                    }}>
                    <h1 className='text-dark'>{number}</h1>
                </div>

                <div>

                    <div className="row mt-3">

                        <CalculatorButton label='DEL' action={deleteValue} />
                        <CalculatorButton label='+/-' action={negativeNumber} />
                        {/*<CalculatorButton label='%' /> */}
                        <CalculatorButton label='/' btnClass='btn btn-warning' action={btnDiv} />

                    </div>

                    <div className="row mt-3">
                        <CalculatorButton label='7' btnClass='btn btn-success' action={buildNumber} />
                        <CalculatorButton label='8' btnClass='btn btn-success' action={buildNumber} />
                        <CalculatorButton label='9' btnClass='btn btn-success' action={buildNumber} />
                        <CalculatorButton label='*' btnClass='btn btn-warning' action={btnMul} />
                    </div>

                    <div className="row mt-3">
                        <CalculatorButton label='4' btnClass='btn btn-success' action={buildNumber} />
                        <CalculatorButton label='5' btnClass='btn btn-success' action={buildNumber} />
                        <CalculatorButton label='6' btnClass='btn btn-success' action={buildNumber} />
                        <CalculatorButton label='-' btnClass='btn btn-warning' action={btnSub} />
                    </div>

                    <div className="row mt-3">
                        <CalculatorButton label='1' btnClass='btn btn-success' action={buildNumber} />
                        <CalculatorButton label='2' btnClass='btn btn-success' action={buildNumber} />
                        <CalculatorButton label='3' btnClass='btn btn-success' action={buildNumber} />
                        <CalculatorButton label='+' btnClass='btn btn-warning' action={btnSum} />
                    </div>

                    <div className="row mt-3">
                        <CalculatorButton label='0' btnClass='btn btn-success' colNumber={6} action={buildNumber} />
                        <CalculatorButton label='.' btnClass='btn btn-secondary' action={buildNumber} />
                        <CalculatorButton label='=' btnClass='btn btn-warning' action={submitResult} />
                    </div>
                </div>


            </div>
            <div>
                {JSON.stringify(operation, null, 4)}
            </div>
        </>

    )
}
