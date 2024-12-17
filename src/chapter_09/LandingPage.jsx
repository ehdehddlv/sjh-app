import React, {useState} from 'react';
import Toolbar from './Toolbar';

function LandingPage(props){

    const [isLogginIn, setIsLogginIn] = useState(false);

    const onClickLogin = () => {
        setIsLogginIn(true);
    }

    const onClickLogout = () => {
        setIsLogginIn(false);
    }

    return (
        <div>
            <Toolbar 
                isLogginIn={isLogginIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{padding:16}}>리액트 이벤트 핸들러 & Condition Rendering (&& 연산자, 삼항연산자) Learn!!!</div>
        </div>
    );

}

export default LandingPage;