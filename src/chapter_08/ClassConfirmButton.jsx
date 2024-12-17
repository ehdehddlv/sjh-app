import React from 'react';

class ClassConfirmButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isConfirmed : false
        };

        // 1. Handler 바인딩
        // this.handlerConfirm = this.handlerConfirm.bind(this);        
    };

    // 1. Handler 바인딩
    // handlerConfirm(){
    //     this.setState((preState) => ({
    //         isConfirmed : !preState.isConfirmed
    //     }));
    // }

    // 2. Handler Arror function
    handlerConfirm = () => {
        this.setState((preState) => ({
            isConfirmed : !preState.isConfirmed
        }));
    }

    render(){
        return(
            <button onClick={this.handlerConfirm}
                    disabled={this.state.isConfirmed}>
                        {this.state.isConfirmed ? "확인됨(Class)" : "확인하기(Class)"}
            </button>
        );
    }

}

export default ClassConfirmButton;