import React, {useState} from 'react';

// form input과 select 태그 데이터 세팅

function SignUp(props){
    const [name, setName] = useState('');
    const [gender, setGender] = useState('남자');

    const onChangeNameHandler = (event) => {
        setName(event.target.value);
    };

    function onChangeGenderHandler(event){
        setGender(event.target.value);
    }

    const onSubmitHandler = (event) => {
        alert(`이름 : ${name} / 성별 : ${gender}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label>이름 : 
                <input type='text' value={name} onChange={onChangeNameHandler} />
            </label>
            <br />
            <label>성별 :
                <select value={gender} onChange={onChangeGenderHandler}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type='submit'>제출</button>
        </form>
    );

}

export default SignUp;