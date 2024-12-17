import Card from './Card';

function ProfileCard(props){
    return (
        <Card title="나다" backgroundColor="green">
            <p>안녕하세요. 접니다</p>
            <p>리액트 Composition children과 Spacialization을 사용하였습니다.</p>
        </Card>
    );
}

export default ProfileCard;