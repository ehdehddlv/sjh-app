import React from 'react';
import Notification from './Notification';

const reservedNotification = [
    {
        id:1,
        message: "일어날 시간입니다."
    },
    {
        id:2,
        message: "점심시간 입니다."
    },
    {
        id:3,
        message: "이제 곧 미팅시간 입니다."
    }
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications: []
        };
        
    };

    componentDidMount(){
        const { notifications } = this.state;
        
        timer = setInterval(() => {
            if(notifications.length < reservedNotification.length){
                const index = notifications.length;
                notifications.push(reservedNotification[index]);
                this.setState({
                    notifications : notifications
                });
            }else{
                this.setState({
                    notifications : []
                });
                clearInterval(timer);
            }
        }, 3000);

    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                        key={notification.id} // map 함수 사용 시 key 세팅해야 console에 오류 메세지 안뜸
                        id={notification.id} 
                        message={notification.message} />
                })}
            </div>
        );
    };

}

export default NotificationList;