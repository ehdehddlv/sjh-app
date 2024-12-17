import React, {useState} from 'react';

function FunctionConfirmButton(props){

    const [isConfirmed, setIsConfirmed] = useState(false);

    // 1. 함수형
    // function handlerConfirm(){
    //     setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    // }

    // 2. Arrow function
    const handlerConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }

    return(
        <button onClick={handlerConfirm}
                disabled={isConfirmed}>
                    {isConfirmed ? "확인됨(Function)" : "확인하기(Function)"}
        </button>
    );

}

export default FunctionConfirmButton;