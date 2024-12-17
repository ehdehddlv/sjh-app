import React, {useState, useEffect} from 'react';
import UseCounter from './UseCounter';

const MAX_CAPACITY = 10;

function Accommodate(props){

    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = UseCounter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect called");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value : ${count}`);
    }, [count]);

    return(
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color:"red"}}>입장 수용인원이 가득찼습니다.</p>}
        </div>
    );

}

export default Accommodate;