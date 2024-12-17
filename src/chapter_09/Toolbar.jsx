import React from 'react';

const style = {
    wrapper : {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey"
    },
    greeting: {
        marginRight: 8
    }
}

function Toolbar(props){

    const {isLogginIn, onClickLogin, onClickLogout} = props;

    return (
        <div style={style.wrapper}>
            {isLogginIn && <span style={style.greeting}>환영합니다!</span>}

            {isLogginIn ? (<button onClick={onClickLogout}>로그아웃</button>) : (<button onClick={onClickLogin}>로그인</button>)}
        </div>
    );

}

export default Toolbar;