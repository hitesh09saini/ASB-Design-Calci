import React, { useState } from 'react';
import Button from './Button';

const Frame = () => {
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [prevValue, setPrevValue] = useState(null);

    const handleNumber = (val) => {
        setInput((prevInput) => (prevInput === "0" ? val : prevInput + val));
    };

    const handleOperator = (op) => {
        if (operator !== null) {
            // If an operator is already set, perform the calculation
            handleEqual();
        } else {
            // If no operator is set, update the previous value and set the operator
            setPrevValue(input);
            setOperator(op);
            setInput("0");
        }
    };

    const handleEqual = () => {
        if (prevValue !== null && operator !== null) {
            const currentInput = parseFloat(input);
            const previousValue = parseFloat(prevValue);

            switch (operator) {
                case '+':
                    setInput((previousValue + currentInput).toString());
                    break;
                case '-':
                    setInput((previousValue - currentInput).toString());
                    break;
                case '*':
                    setInput((previousValue * currentInput).toString());
                    break;
                case '/':
                    setInput((previousValue / currentInput).toString());
                    break;
                default:
                    break;
            }

            setPrevValue(null);
            setOperator(null);
        }
    };

    const handleClear = () => {
        setInput("0");
        setOperator(null);
        setPrevValue(null);
    };

    return (
        <div className='flex flex-col items-center rounded-xl bg-black'>
            <span className='text-[#8BF40B]'>---------[ Calculator ]--------</span>
            <input
                type="text"
                className='rounded w-[90%] bg-[#212121] text-2xl text-end h-[60px] mt-4 outline-none pr-2 text-[#8BF40B]'
                readOnly
                value={input}
            />

            <div className='grid grid-cols-4 gap-1 rounded m-4 bg-white'>
                <Button text={'+'} onClick={() => handleOperator('+')} />
                <Button text={'-'} onClick={() => handleOperator('-')} />
                <Button text={'*'} onClick={() => handleOperator('*')} />
                <Button text={'/'} onClick={() => handleOperator('/')} />

                <Button text={'7'} onClick={() => handleNumber('7')} />
                <Button text={'8'} onClick={() => handleNumber('8')} />
                <Button text={'9'} onClick={() => handleNumber('9')} />
                <Button text={'C'} onClick={handleClear} />

                <Button text={'4'} onClick={() => handleNumber('4')} />
                <Button text={'5'} onClick={() => handleNumber('5')} />
                <Button text={'6'} onClick={() => handleNumber('6')} />
                <Button text={'='} color="red" onClick={handleEqual} />

                <Button text={'1'} onClick={() => handleNumber('1')} />
                <Button text={'2'} onClick={() => handleNumber('2')} />
                <Button text={'3'} onClick={() => handleNumber('3')} />

                <Button text={'0'} onClick={() => handleNumber('0')} />
            </div>
        </div>
    );
}

export default Frame;
