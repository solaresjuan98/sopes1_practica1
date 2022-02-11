import React from 'react'

interface Props {
    label: string;
    btnClass?: string;
    action: (val: string) => void;
    colNumber?: number;
}

export const CalculatorButton = ({ label, btnClass = 'btn btn-info', action, colNumber = 3 }: Props) => {
    return (
        <div className={`d-grid gap-2 col-${colNumber} mx-auto`}>

            <button
                className={btnClass}
                style={{ borderRadius: '10px' }}
                onClick={() => action(label)}
            >
                {label}
            </button>
        </div>
    )
}
