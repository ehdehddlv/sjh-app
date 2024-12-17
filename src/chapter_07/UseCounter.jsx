import React, {useState} from 'react';

function UseCounter(props){
    const [count, setCount] = useState(props);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default UseCounter;