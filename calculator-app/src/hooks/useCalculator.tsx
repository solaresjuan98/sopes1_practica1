import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

enum Operators {
    sum, sub, mul, div
}

interface Operation {
    id?: string;
    n1: number;
    n2: number;
    operator: "+" | "-" | "*" | "/";
    result?: number;
    time?: string;
}


export const useCalculator = () => {

    const [number, setNumber] = useState("0");
    const [previousNumber, setPreviousNumber] = useState("0");
    const [operation, setOperation] = useState<Operation>({
        n1: 0,
        n2: 0,
        operator: "+",
        //result: 0
    });
    const lastOperator = useRef<Operators>();

    // Results
    const [results, setResults] = useState<Operation[]>([])


    const getResults = async () => {

        await axios.get("http://localhost:5000/operations")
            .then(res => {

                //console.log(res.data.data)
                //console.log(res)
                //console.log(re)
                setResults(res.data.data.data)
            })



    }

    const sendOperation = async () => {
        //console.log(operation)
        console.log('Xd')
        await axios.post("http://localhost:5000/insertResult", operation)
            .then(res => {

                Swal.fire(
                    'Operation Saved',
                    'The operation has been saved',
                    'success'
                )
                console.log(res.data)
            })
    }

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
            ...operation,
            n1: 0,
            n2: 0,
            operator: '+',
            //result: 0
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
        lastOperator.current = Operators.mul;
        setOperation({
            ...operation,
            operator: '*'
        })
    }

    const btnDiv = () => {
        changeVal();
        lastOperator.current = Operators.div;
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
    const submitResult = async () => {

        const n1 = Number(previousNumber);
        const n2 = Number(number);

        // submit value to backend
        setOperation({
            ...operation,
            n1,
            n2
        })

        setPreviousNumber("0")

        switch (lastOperator.current) {

            case Operators.sum:

                setNumber(`${n1 + n2}`);
                break;

            case Operators.sub:
                setNumber(`${n1 - n2}`);
                break;

            case Operators.mul:
                setNumber(`${n1 * n2}`);
                break;

            case Operators.div:
                if (n2 !== 0) {
                    setNumber(`${n1 / n2}`);
                } else {
                    setNumber("Error")
                }

                break;
        }



        //await sendOperation(operation);
        // Reset operation to its defaults

        //resetOperation();
    }

    useEffect(() => {

        getResults();

    }, [])


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
        negativeNumber,
        // database
        results,
        getResults,
        sendOperation

    }
}
