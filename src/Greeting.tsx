import React from 'react';

const Greeting: React.FC = () => {
    const greeting: string = "Hello, TypeScript!";
    const numberList: number[] = [5, 10, 15];

    const calculateSum = (a: number, b: number): number => {
        return a + b;
    };

    const sum: number = calculateSum(5, 10);

    return (
        <div>
            <h1>{greeting}</h1>
            <h2>Number List:</h2>
            <ul>
                {numberList.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <h2>Sum of 5 and 10: {sum}</h2>
        </div>
    );
};

export default Greeting;
