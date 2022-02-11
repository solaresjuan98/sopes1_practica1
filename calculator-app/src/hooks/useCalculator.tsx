import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'

enum Operators {
    sum, sub, mul, div
}

interface Operation {
    n1: number;
    n2: number;
    operator: "+" | "-" | "*" | "/";
}

export const useCalculator = () => {

    const [number, setNumber] = useState("0");
    const [previousNumber, setPreviousNumber] = useState("0");
    const [operation, setOperation] = useState<Operation>({
        n1: 0,
        n2: 0,
        operator: "+"
    });
    const lastOperator = useRef<Operators>();

    const buildNumber = (numStr: string) => {


        // Avoid double point
        if (number.includes(".") && numStr === ".") {
            return;
        }

        // Validate if number starts with "0" or "-0"
        if (number.startsWith("0") || number.startsWith("-0")) {


            if (numStr === ".") {
                setNumber(number + numStr);
                // 
            } else if (numStr === "0" && number.includes(".")) {
                setNumber(number + numStr)
            } else if (numStr !== "0" && !number.includes(".")) {
                setNumber(numStr);
            } else if (numStr === "0" && !number.includes(".")) {
                setNumber(number)
            }
            else {
                setNumber(number + numStr);
            }

        } else {
            setNumber(number + numStr);
        }
    }

    const deleteValue = () => {

        setNumber("0");
        setPreviousNumber("0");
        resetOperation();
    }

    const resetOperation = () => {
        setOperation({
            n1: 0,
            n2: 0,
            operator: '+'
        })
    }

    const changeVal = () => {

        // ex: 2. -> 2
        if (number.endsWith(".")) {
            setPreviousNumber(number.slice(0, -1))
            // any value (int or float)
        } else {
            setPreviousNumber(number)
        }

        setNumber("0")
    }

    // actions
    const btnSum = () => {
        changeVal();
        lastOperator.current = Operators.sum;
        setOperation({
            ...operation,
            operator: '+'
        })

    }

    const btnSub = () => {
        changeVal();
        lastOperator.current = Operators.sub;
        setOperation({
            ...operation,
            operator: '-'
        })
    }

    const btnMul = () => {
        changeVal();
        setOperation({
            ...operation,
            operator: '*'
        })
    }

    const btnDiv = () => {
        changeVal();
        setOperation({
            ...operation,
            operator: '/'
        })
    }


    const negativeNumber = () => {

        if (number.includes("-")) {
            setNumber(number.replace("-", ""))
        } else {
            setNumber("-" + number);
        }

    }



    // Method to send to backend
    const submitResult = () => {

        const n1 = Number(previousNumber);
        const n2 = Number(number);

        // submit value to backend
        setOperation({
            ...operation,
            n1,
            n2
        })



        setPreviousNumber("0")

        if (operation.operator === '/' && (operation.n2 === 0)) {
            Swal.fire(
                "Error",
                "Could not operate",
                'error'
            )
        } else {
            Swal.fire(
                'Operation Saved',
                'The operation has been saved',
                'success'
            )
        }

        // Reset operation to its defaults

        //resetOperation();
    }

    return {
        number,
        operation,
        buildNumber,
        deleteValue,
        // operators
        btnSum,
        btnSub,
        btnMul,
        btnDiv,
        submitResult,
        negativeNumber
    }
}
