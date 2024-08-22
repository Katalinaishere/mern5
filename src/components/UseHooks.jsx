
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const UseHooks = () => {
    const [number, setNumber] = useState(0);
    const isEven = number % 2 === 0;

    return (
        <div>
            <h1>{number}</h1>
            <p>{isEven ? 'Even' : 'Odd'}</p>
            <Button variant='primary' onClick={() => setNumber(number - 1)}>Decrement</Button>
            <Button variant='danger' onClick={() => setNumber(0)}>Reset</Button>
            <Button variant='success' onClick={() => setNumber(number + 1)}>Increment</Button>
        </div>
    );
};

export default UseHooks;
